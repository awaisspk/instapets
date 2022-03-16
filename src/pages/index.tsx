import { useEffect, useState } from 'react';

import { InferGetServerSidePropsType } from 'next';

import { Button } from '@/components/Button';
import { LoadingIndicator } from '@/components/LoadingIndicator';
import { PostPreview } from '@/components/Post';
import { Main } from '@/layout/Main';
import { Meta } from '@/layout/Meta';
import { Post } from '@/types';

const HomePage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [posts, setPosts] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const getMorePost = async () => {
      const response = await fetch(
        `https://dummyapi.io/data/v1/post?limit=10&page=${page}`,
        {
          headers: {
            'app-id': process.env.NEXT_PUBLIC_APP_ID!,
          },
        }
      );
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { data }: Posts = await response.json();
      setPosts((state) => [...state, ...data]);
      setIsLoading(false);
    };
    getMorePost();
  }, [page]);

  return (
    <Main
      meta={
        <Meta
          title="Excelorithm"
          description="Social media site for developers"
        />
      }
    >
      <div className="grid  grid-cols-1  gap-10 md:gap-5 w-[min(600px,100%-30px)] mx-auto">
        {posts.map((post) => {
          return <PostPreview key={post.id} {...post} />;
        })}
        <div className="justify-self-center">
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <Button onClick={() => setPage(page + 1)}>Load more</Button>
          )}
        </div>
      </div>
    </Main>
  );
};

type Posts = {
  data: Post[];
};

export const getServerSideProps = async () => {
  const response = await fetch('https://dummyapi.io/data/v1/post', {
    headers: {
      'app-id': process.env.NEXT_PUBLIC_APP_ID!,
    },
  });
  const { data }: Posts = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
