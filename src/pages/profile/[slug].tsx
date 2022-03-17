import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Avatar } from '@/components/Avatar';
import { LoadingIndicator } from '@/components/LoadingIndicator';
import { PostPreview } from '@/components/Post';
import { Post } from '@/types';

type Location = {
  street: string;
  city: string;
  state: string;
  country: string;
};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  location: Location;
};

type Posts = {
  data: Post[];
};

const UserProfile = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<User | null>(null);
  const [posts, setPosts] = useState<Posts | null>(null);
  const { slug } = router.query;

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(`https://dummyapi.io/data/v1/user/${slug}`, {
        headers: {
          'app-id': process.env.NEXT_PUBLIC_APP_ID!,
        },
      });
      const data: any = await response.json();
      setProfile(data);
    };
    getComments();
  }, [slug]);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(
        `https://dummyapi.io/data/v1/user/${slug}/post`,
        {
          headers: {
            'app-id': process.env.NEXT_PUBLIC_APP_ID!,
          },
        }
      );
      const data: Posts = await response.json();
      setPosts(data);
    };
    getComments();
  }, [slug]);

  return (
    <div>
      <section className="min-h-[calc(100vh-100px)]">
        {!profile ? (
          <LoadingIndicator />
        ) : (
          <section className="mt-10 flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center space-x-4">
              <Avatar
                imgUrl={profile.picture}
                name={profile.firstName}
                large={true}
              />
              <div className="flex text-center sm:text-left md:mb-3 flex-col">
                <span className="text-lg md:text-xl font-semibold">{`${profile.firstName} ${profile.lastName}`}</span>
                <span>{profile.email}</span>
                <span>Phone : {profile.phone}</span>
              </div>
            </div>
          </section>
        )}

        <div className="grid mt-20 grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 w-[min(1000px,100%-30px)] mx-auto">
          {posts?.data &&
            posts.data.map((post) => {
              return <PostPreview key={post.id} {...post} hideUser={true} />;
            })}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
