'use client';

import { WorkExperience } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function WorkList({ items }: { items: WorkExperience[] }) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const anyImage = items.some((w) => w.imageUrl);

  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        {items.map((work) => (
          <Link
            key={work.title}
            href={work.url}
            target="_blank"
            className="flex justify-between px-3 py-2 -mx-3 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border transition-colors"
            onMouseEnter={() => setHoveredImage(work.imageUrl ?? null)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-medium">{work.title}</h3>
              <p className="text-xs text-muted-foreground">{work.role}</p>
            </div>
            <div className="text-xs text-muted-foreground">{work.period}</div>
          </Link>
        ))}
      </div>

      {anyImage && (
        <div className="absolute -right-4 top-0 translate-x-full hidden md:block pointer-events-none z-50">
          <Image
            src={hoveredImage ?? items.find((w) => w.imageUrl)!.imageUrl!}
            alt="preview"
            width={280}
            height={160}
            className={`rounded-lg shadow-xl object-cover transition-opacity duration-300 ${hoveredImage ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      )}
    </div>
  );
}
