'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { a } from 'motion/react-client';
import { useTheme } from 'next-themes';

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleThemeChange}>
      <Sun className="h-4 w-4 rotate-0 scale-100 dark:scale-0 dark:rotate-90 transition-all" />
      <Moon className="absolute h-4 w-4 scale-0 dark:scale-100 dark:rotate-0 transition-all" />
    </Button>
  );
}
