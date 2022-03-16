import { useEffect, useState } from 'react';

import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { PostPreview } from '@/components/Post';
import { PostComment } from '@/components/PostComment';
import { Main, Meta } from '@/layout';
import { Comments, Post } from '@/types';

const PostDetails = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [comments, setComments] = useState<Comments | null>(null);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    setLoadingComments(true);
    const getComments = async ({ userId }: { userId: string }) => {
      const response = await fetch(
        `https://dummyapi.io/data/v1/post/${userId}/comment`,
        {
          headers: {
            'app-id': '62315f423097d0daffa133ab',
          },
        }
      );
      const data: Comments = await response.json();
      setComments(data);
    };
    getComments({ userId: post.id });
    setLoadingComments(false);
  }, [post.id]);

  return (
    <div>
      <Main meta={<Meta title={post.text} description={post.text} />}>
        <div className="grid grid-cols-1 gap-10 md:gap-5 w-[min(800px,100%-30px)] mx-auto">
          <PostPreview key={post.id} {...post} disableLink={true} />
        </div>
        <section className="w-[min(800px,100%-30px)] mx-auto space-y-10">
          <h3 className="text-2xl font-bold my-10">Comments</h3>
          {comments?.data.length === 0 && (
            <div>Be the first to comment on this post</div>
          )}
          {loadingComments ? (
            <div className="text-gray-300">Loading comments</div>
          ) : (
            comments?.data.map((comment) => (
              <PostComment key={comment.id} {...comment} />
            ))
          )}
        </section>
      </Main>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const slug = ctx.params!.slug as string;
  const response = await fetch(`https://dummyapi.io/data/v1/post/${slug}`, {
    headers: {
      'app-id': process.env.NEXT_PUBLIC_APP_ID!,
    },
  });

  const post: Post = await response.json();

  return {
    props: {
      post,
    },
  };
};

export default PostDetails;
