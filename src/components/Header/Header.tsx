import cx from 'classnames';
import Link from 'next/link';

import { ThemeToggle } from '../ThemeToggle';

export const Header = () => {
  return (
    <header
      className={cx(
        'flex fixed bg-blue-100/10 backdrop-blur-sm  items-center w-full h-[100px]',
        'dark:bg-black/5'
      )}
    >
      <div className="flex justify-between mx-auto w-[min(1200px,100%-30px)]">
        <div>
          <Link href="/">
            <a className="text-3xl text-gray-700 dark:text-gray-200 font-bold select-none">
              Excelorythm
            </a>
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
