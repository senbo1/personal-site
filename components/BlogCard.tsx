import { Blog } from '@/lib/types';

export default function BlogCard({ title, link, date }: Blog) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-between gap-2"
    >
      <h3 className="text-md sm:text-lg font-medium">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground">{date}</p>
    </a>
  );
}
