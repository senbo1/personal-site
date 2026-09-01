"use client";

import type { Link as LinkData } from "@/lib/types";
import posthog from "posthog-js";

export default function IconLink({ title, link, icon }: LinkData) {
  const maskImage = `url(${icon})`;

  return (
    <a
      href={link}
      target="_blank"
      aria-label={title}
      title={title}
      onClick={() => {
        if (
          process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
          process.env.NEXT_PUBLIC_POSTHOG_HOST
        ) {
          posthog.capture("social_link_clicked", { destination: title });
        }
      }}
      className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
    >
      <span
        aria-hidden="true"
        className="block size-5 bg-current"
        style={{
          mask: `${maskImage} center / contain no-repeat`,
          WebkitMask: `${maskImage} center / contain no-repeat`,
        }}
      />
    </a>
  );
}
