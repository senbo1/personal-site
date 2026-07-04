'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    const transitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };

    if (!transitionDocument.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    transitionDocument.startViewTransition(() => {
      setTheme(nextTheme);
    });
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleThemeChange}>
      <Sun className="h-4 w-4 rotate-0 scale-100 dark:scale-0 dark:rotate-90 transition-transform" />
      <Moon className="absolute h-4 w-4 scale-0 dark:scale-100 dark:rotate-0 transition-transform" />
    </Button>
  );
}
