import BlogCard from "@/components/BlogCard";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import StackList from "@/components/StackList";
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
      <main className="space-y-8 py-8">
        <section>
          <div className="flex flex-col gap-1 items-start">
            <h1 className="text-xl font-bold">Hi, I&apos;m Harsh</h1>
            <p className="text-sm font-medium">
              I love building <span className="italic text-red-500">fast</span>{" "}
              and <span className="italic text-green-500">efficient</span> AI
              apps. Anything from optimizing renders in React to building
              scalable AI systems. If you are looking for someone who cares
              deeply about performance, product, and building things that work,
              reach out.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Button
                asChild
                size="sm"
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
                size="sm"
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
            </div>
          </div>
        </section>

        <StackList />

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
              <BlogCard key={blog.title} {...blog} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
