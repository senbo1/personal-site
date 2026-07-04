import { Blog } from '@/lib/types';

export default function BlogCard({ title, link, date }: Blog) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-between gap-2 px-3 py-2 -mx-3 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border transition-colors"
    >
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-xs text-muted-foreground">{date}</p>
    </a>
  );
}
