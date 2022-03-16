import { useEffect, useState } from 'react';

import cx from 'classnames';
import Link from 'next/link';

import { ThemeToggle } from '../ThemeToggle';

export const Header = () => {
  const [isScollPassed, setIsScrollPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
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
        'flex fixed backdrop-blur-sm bg-white/60 items-center w-full z-50 transition-all duration-500  dark:border-gray-800',
        'dark:bg-black/5',
        {
          'h-[70px] border-b-[1px] dark:border-gray-800 dark:bg-black/30':
            isScollPassed,
          'h-[100px]': !isScollPassed,
        }
      )}
    >
      <div className="flex justify-between mx-auto w-[min(1200px,100%-30px)]">
        <div className="relative z-20">
          <Link href="/">
            <a className="text-2xl relative md:text-3xl text-gray-700 dark:text-gray-200 font-bold select-none">
              Excelorythm
            </a>
          </Link>
          <div className="absolute z-10 w-full h-full blur-xl" />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
