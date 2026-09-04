import { currentStack } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

type StackIconStyle = CSSProperties & {
  "--stack-icon-color": string;
  "--stack-icon-color-dark": string;
  "--stack-icon-delay": string;
};

export default function StackList() {
  return (
    <section aria-labelledby="current-stack-heading">
      <h2
        id="current-stack-heading"
        className="mb-3 text-sm text-muted-foreground"
      >
        Current stack
      </h2>
      <ul
        className="flex items-center justify-between sm:justify-start sm:gap-6"
        aria-label="Technologies in my current stack"
      >
        {currentStack.map(({ name, href, icon }, index) => {
          const style: StackIconStyle = {
            "--stack-icon-color": icon.colors.light,
            "--stack-icon-color-dark": icon.colors.dark,
            "--stack-icon-delay": `${index * 40}ms`,
          };

          return (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                style={style}
                className="stack-icon-link inline-flex rounded-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className={cn(
                    "size-5 shrink-0 fill-current",
                    icon.size === "large" && "size-[22px]",
                  )}
                >
                  <path d={icon.path} />
                </svg>
                <span className="sr-only">Visit the {name} website</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
