import { useEffect, useState } from 'react';

import cx from 'classnames';
import Link from 'next/link';

import { ThemeToggle } from '../ThemeToggle';

export const Header = () => {
  const [isScollPassed, setIsScrollPassed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrollPassed(true);
      } else {
        setIsScrollPassed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <header
      className={cx(
        'flex fixed bg-blue-100/10 backdrop-blur-xl items-center w-full z-50 transition-all duration-500  dark:border-gray-800',
        'dark:bg-black/5',
        {
          'h-[70px] border-b-[1px] dark:border-gray-800 ': isScollPassed,
          'h-[100px]': !isScollPassed,
        }
      )}
    >
      <div className="flex justify-between mx-auto w-[min(1200px,100%-30px)]">
        <div>
          <Link href="/">
            <a className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 font-bold select-none">
              Excelorythm
            </a>
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
