import cx from 'classnames';
import Image from 'next/image';

type AvatarProps = {
  imgUrl: string;
  name: string;
  large?: boolean;
};

export const Avatar = ({ imgUrl, name, large }: AvatarProps) => {
  return (
    <div>
      <div
        className={cx(
          'relative bg-gray-200 border-[3px] border-blue-400 rounded-full overflow-hidden  text-xs',
          {
            'w-12 md:w-16 h-12 md:h-16': !large,
            'w-20 h-20 md:w-32 md:h-32': large,
          }
        )}
      >
        <Image src={imgUrl} layout="fill" alt={name} />
      </div>
    </div>
  );
};
