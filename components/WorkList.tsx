import { WorkExperience } from '@/lib/types';
import Link from 'next/link';

export default function WorkList({ items }: { items: WorkExperience[] }) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((work) => (
        <Link
          key={work.title}
          href={work.url}
          target="_blank"
          className="flex justify-between px-3 py-2 -mx-3 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border transition-colors"
        >
          <div className="flex flex-col gap-0.5">
            <h3 className="text-sm font-medium">{work.title}</h3>
            <p className="text-xs text-muted-foreground">{work.role}</p>
          </div>
          <div className="text-xs text-muted-foreground">{work.period}</div>
        </Link>
      ))}
    </div>
  );
}
