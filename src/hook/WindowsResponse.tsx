import { useState, useEffect } from 'react';

export const WindowResponse = () => {
  const [windowSize, setWindowSize] = useState({ width: 1440 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWindowResize = () => {
        setWindowSize({ width: window.innerWidth });
      };
      window.addEventListener('resize', handleWindowResize);
      handleWindowResize();
      return () => window.removeEventListener('resize', handleWindowResize);
    } else {
      return;
    }
  }, []);
  return windowSize;
};
