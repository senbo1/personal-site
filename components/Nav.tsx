import { ThemeToggler } from '@/components/ui/ThemeToggler';

export function Nav() {
  return (
    <div className="flex justify-end pt-2">
      <ThemeToggler />
    </div>
  );
}
