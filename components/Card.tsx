"use client";

import type { CardItem } from "@/lib/types";
import Link from "next/link";
import posthog from "posthog-js";

export default function Card({ title, description, url }: CardItem) {
  return (
    <Link
      href={url}
      target="_blank"
      onClick={() => {
        if (process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
          posthog.capture("portfolio_item_clicked", { item_title: title });
        }
      }}
      className="-mx-3 flex flex-col items-start gap-0.5 rounded-lg border border-transparent px-3 py-1.5 hover:bg-muted sm:flex-row sm:items-center sm:gap-2"
    >
      <h3 className="shrink-0 text-sm font-medium">{title}</h3>
      <p className="min-w-0 text-sm text-muted-foreground sm:flex-1 sm:truncate sm:text-right">
        {description}
      </p>
    </Link>
  );
}
