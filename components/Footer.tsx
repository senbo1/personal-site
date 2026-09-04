import IconLink from "@/components/IconLink";
import { links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <IconLink key={link.title} {...link} />
        ))}
      </div>
    </footer>
  );
}
