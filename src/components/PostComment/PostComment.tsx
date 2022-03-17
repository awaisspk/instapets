import NextLink from 'next/link';

import { Comment } from '@/types';

import { Profile } from '../Profile';

export const PostComment = (comment: Comment) => {
  const { owner, ...rests } = comment;
  return (
    <section className="flex pb-10 flex-col border-b border-b-slate-300 dark:border-b-slate-300/30">
      <div className="space-y-3">
        <NextLink href={`/profile/${owner.id}`}>
          <a>
            <Profile
              firstName={owner.lastName}
              lastName={owner.lastName}
              picture={owner.picture}
              date={rests.publishDate}
            />
          </a>
        </NextLink>
        <p className="md:text-lg ml-20">{rests.message}</p>
      </div>
    </section>
  );
};
