import { Project } from '@/lib/types';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({
  title,
  description,
  githubUrl,
  demoUrl,
  imageUrl,
}: Project) {
  return (
    <div className="relative group flex flex-col gap-0.5 max-w-prose w-full px-3 py-2 -mx-3 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border transition-colors">
      <div className="flex justify-between items-center relative">
        <h3 className="text-sm font-medium">
          <Link href={demoUrl} target="_blank">
            {title}
          </Link>
        </h3>
        <div className="cursor-pointer flex gap-2">
          <Link href={githubUrl} target="_blank">
            <GithubIcon className="w-3.5 h-3.5 text-muted-foreground" />
          </Link>
          <Link href={demoUrl} target="_blank">
            <ExternalLinkIcon className="w-3.5 h-3.5 text-muted-foreground" />
          </Link>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">{description}</p>
      
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={120}
          className="absolute -right-4 top-0 translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg shadow-xl object-cover pointer-events-none z-50 hidden md:block"
        />
      )}
    </div>
  );
}
