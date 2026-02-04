'use client';

import { useTheme as useNextThemes } from 'next-themes';
import { useSyncExternalStore } from 'react';

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => false,
    () => true
  );
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextThemes();
  const mounted = useIsMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return {
    theme: mounted ? theme : 'dark',
    resolvedTheme: mounted ? resolvedTheme : 'dark',
    toggleTheme,
    setTheme,
  };
}
