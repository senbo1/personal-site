"use client";

import { Blog } from '@/lib/types';
import posthog from "posthog-js";

export default function BlogCard({ title, link, date }: Blog) {
  return (
    <a
      href={link}
      target="_blank"
      onClick={() => {
        if (
          process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
          process.env.NEXT_PUBLIC_POSTHOG_HOST
        ) {
          posthog.capture("blog_post_clicked", { post_title: title });
        }
      }}
      className="flex items-center justify-between gap-2 px-3 py-2 -mx-3 rounded-lg hover:bg-muted border border-transparent"
    >
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-xs text-muted-foreground">{date}</p>
    </a>
  );
}
