import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { PostPreview } from '@/components/Post';
import { Main } from '@/layout/Main';
import { Meta } from '@/layout/Meta';
import { Post } from '@/types';

const HomePage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Main
      meta={
        <Meta
          title="Excelorithm"
          description="Social media site for developers"
        />
      }
    >
      <div className="grid grid-cols-1 gap-10 md:gap-5 w-[min(600px,100%-30px)] mx-auto">
        {data.map((post) => {
          return <PostPreview key={post.id} {...post} />;
        })}
      </div>
    </Main>
  );
};

type Posts = {
  data: Post[];
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const slug = ctx.params!.slug as string;

  const response = await fetch(`https://dummyapi.io/data/v1/tag/${slug}/post`, {
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
