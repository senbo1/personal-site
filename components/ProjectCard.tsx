export default function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col items-center text-center gap-2 border border-foreground/30 p-3 sm:p-2 transition-all max-w-md w-full mx-auto"
    >
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </a>
  );
}
