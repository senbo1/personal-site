import type { Blog } from "@/lib/types";

export default function BlogCard({ title, link, date }: Blog) {
  return (
    <a
      href={link}
      target="_blank"
      className="-mx-3 flex flex-col items-start gap-0.5 rounded-lg border border-transparent px-3 py-2 hover:bg-muted sm:flex-row sm:items-center sm:justify-between sm:gap-2"
    >
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="shrink-0 text-xs text-muted-foreground">{date}</p>
    </a>
  );
}
