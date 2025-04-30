import { Project } from '@/lib/types';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
}: Project) {
  return (
    <div className="relative flex flex-col gap-2 max-w-prose w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="cursor-pointer flex gap-2">
          <Link href={githubUrl} target="_blank">
            <GithubIcon className="w-5 h-5 text-muted-foreground" />
          </Link>
          <Link href={demoUrl} target="_blank">
            <ExternalLinkIcon className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="text-sm text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
