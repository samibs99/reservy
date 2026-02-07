'use client';

import { useMemo, useEffect, useState } from 'react';

// ----------------------------------------------------------------------

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type Breakpoint = keyof typeof breakpoints;

export function useResponsive(query: 'up' | 'down' | 'between', start: Breakpoint, end?: Breakpoint) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const getQuery = () => {
      switch (query) {
        case 'up':
          return `(min-width: ${breakpoints[start]}px)`;
        case 'down':
          return `(max-width: ${breakpoints[start] - 1}px)`;
        case 'between':
          if (!end) return '';
          return `(min-width: ${breakpoints[start]}px) and (max-width: ${breakpoints[end] - 1}px)`;
        default:
          return '';
      }
    };

    const mediaQuery = getQuery();
    if (!mediaQuery) return;

    const media = window.matchMedia(mediaQuery);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query, start, end]);

  return matches;
}

export function useWidth() {
  const [width, setWidth] = useState<Breakpoint>('xs');

  useEffect(() => {
    const getWidth = () => {
      const windowWidth = window.innerWidth;
      const keys = Object.keys(breakpoints).reverse() as Breakpoint[];

      for (const key of keys) {
        if (windowWidth >= breakpoints[key]) {
          return key;
        }
      }
      return 'xs';
    };

    setWidth(getWidth());

    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
