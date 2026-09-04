import type { CardItem } from "@/lib/types";
import Link from "next/link";

export default function Card({ title, description, url }: CardItem) {
  return (
    <Link
      href={url}
      target="_blank"
      className="-mx-3 flex flex-col items-start gap-0.5 rounded-lg border border-transparent px-3 py-1.5 hover:bg-muted sm:flex-row sm:items-center sm:gap-2"
    >
      <h3 className="shrink-0 text-sm font-medium">{title}</h3>
      <p className="min-w-0 text-sm text-muted-foreground sm:flex-1 sm:truncate sm:text-right">
        {description}
      </p>
    </Link>
  );
}
