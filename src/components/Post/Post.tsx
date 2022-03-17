import { useState } from 'react';

import cx from 'classnames';
import Image from 'next/image';
import NextLink from 'next/link';

import { Post } from '@/types';

import { HeartIcon } from '../icons';
import { Profile } from '../Profile';

const Likes = ({ likes }: { likes: number }) => {
  const [liked, setIsLiked] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsLiked((state) => !state)}
        className="flex items-center"
      >
        <HeartIcon
          className={cx('stroke-gray-600 w-8 md:w-9', {
            'fill-red-600 stroke-red-600': liked,
          })}
        />
        <span className="mt-1 ml-1">{liked ? likes + 1 : likes}</span>
      </button>
    </div>
  );
};

type PostPreviewProps = Post & {
  disableLink?: boolean;
};

export const PostPreview = (props: PostPreviewProps) => {
  const { text, tags, likes, id, owner, publishDate, image, disableLink } =
    props;
  return (
    <section className=" relative rounded-xl md:p-5 ">
      <div className="backdrop-blur-xl z-10 mb-3">
        <Profile
          key={id}
          date={publishDate}
          firstName={owner.firstName}
          lastName={owner.lastName}
          picture={owner.picture}
        />
      </div>
      <NextLink href={`/post/${id}`}>
        <a
          className={cx(
            'relative block aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-blue-100/20',
            {
              'pointer-events-none': disableLink,
            }
          )}
        >
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-all"
          />
        </a>
      </NextLink>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Likes likes={likes} />
          <div>
            <p className="text-xs sm:text-sm mt-1">{text}</p>
          </div>
        </div>
        <div className="flex gap-3">
          {tags.map((tag, i) => (
            <NextLink key={i} href={`/tags/${tag}`}>
              <a className="bg-blue-200/50 hover:bg-blue-300/50 dark:bg-black/30 dark:hover:bg-black/40 text-sm px-3 py-1 rounded-full cursor-pointer">
                {tag}
              </a>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
};
