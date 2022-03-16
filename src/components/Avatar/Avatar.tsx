import Image from 'next/image';

type AvatarProps = {
  imgUrl: string;
  name: string;
};
export const Avatar = ({ imgUrl, name }: AvatarProps) => {
  return (
    <div>
      <div className="relative w-12 md:w-16 h-12 md:h-16 bg-gray-200 border-[3px] border-blue-400 rounded-full overflow-hidden  text-xs">
        <Image src={imgUrl} layout="fill" alt={name} />
      </div>
    </div>
  );
};
