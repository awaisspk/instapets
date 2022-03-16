import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { IconButton } from '../Button';
import { MoonIcon, SunIcon } from '../icons';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleThemeChange = () => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div>
      <IconButton onClick={handleThemeChange}>
        {theme === 'dark' ? (
          <MoonIcon className="stroke-white" />
        ) : (
          <SunIcon className="stroke-white" />
        )}
      </IconButton>
    </div>
  );
};
