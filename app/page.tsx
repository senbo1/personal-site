import Card from "@/components/Card";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import {
  blogs,
  bookingLink,
  messageLink,
  projects,
  workExperiences,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <main className="space-y-6 py-8">
        <section>
          <h1 className="text-xl font-bold">Hi, I&apos;m Harsh</h1>
          <p className="font-medium">
            I love building <span className="italic text-red-500">fast</span>{" "}
            and <span className="italic text-green-500">efficient</span> AI
            apps.
          </p>
        </section>

        <section className="flex flex-wrap gap-2">
          <Button
            asChild
            size="default"
            className="transition-[color,background-color,transform] duration-150 active:scale-[0.97]"
          >
            <a
              href={bookingLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {bookingLink.label}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="default"
            className="transition-[color,background-color,transform] duration-150 active:scale-[0.97]"
          >
            <a
              href={messageLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {messageLink.label}
            </a>
          </Button>
        </section>


        <section>
          <h2 className="text-sm mb-3 text-muted-foreground">Work</h2>
          <div className="flex flex-col gap-1">
            {workExperiences.map((work) => (
              <Card key={work.title} {...work} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm mb-3 text-muted-foreground">Projects</h2>
          <div className="flex flex-col gap-1">
            {projects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm mb-3 text-muted-foreground">Blogs</h2>
          <div className="flex flex-col gap-1">
            {blogs.map((blog) => (
              <Card key={blog.title} {...blog} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
