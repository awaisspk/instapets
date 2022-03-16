import { formatDate } from '@/utils/utils';

import { Avatar } from '../Avatar';

type ProfileProps = {
  picture: string;
  firstName: string;
  lastName: string;
  date: Date;
};

export const Profile = ({
  date,
  firstName,
  lastName,
  picture,
}: ProfileProps) => {
  return (
    <div className="flex items-center space-x-3">
      <Avatar name={firstName} imgUrl={picture} />
      <div className="flex flex-col">
        <span className="text-sm sm:text-lg sm:font-semibold">{`${firstName} ${lastName}`}</span>
        <span className="text-xs sm:text-sm">{formatDate(new Date(date))}</span>
      </div>
    </div>
  );
};
