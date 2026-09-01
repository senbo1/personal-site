import type { CardItem } from "@/lib/types";
import Link from "next/link";

export default function Card({ title, description, url }: CardItem) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center gap-2 px-3 py-1.5 -mx-3 rounded-lg hover:bg-muted border border-transparent"
    >
      <h3 className="shrink-0 text-sm font-medium">{title}</h3>
      <p className="min-w-0 flex-1 truncate text-right text-sm text-muted-foreground">
        {description}
      </p>
    </Link>
  );
}
