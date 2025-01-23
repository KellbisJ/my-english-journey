import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialMode = root.classList.contains('dark');
    setIsDarkMode(initialMode);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode] as const;
};

export { useDarkMode };
