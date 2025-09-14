import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import { ThemeToggler } from "@/components/ui/ThemeToggler";
import { blogs, links, projects } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="py-10">
        <section className="flex justify-between">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-4xl font-bold">Hi, I am harsh</h1>
            <h2 className="text-lg font-medium">
              I love building <span className="italic text-red-500">fast</span>{" "}
              and <span className="italic text-green-500">efficient</span> full
              stack applications.
            </h2>
            <div className="flex gap-2">
              {links.map((link) => (
                <a
                  href={link.link}
                  target="_blank"
                  key={link.title}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          <ThemeToggler />
        </section>

        <section className="mt-20">
          <h2 className="text-xl font-bold mb-5">Work Experience</h2>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium">
                  <Link
                    href="https://summerofcode.withgoogle.com/programs/2025/projects/8dgkuzjy"
                    target="_blank"
                  >
                    GSoC 2025 - CircuitVerse
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Open Source Contributor
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                May 2025 - August 2025
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xl font-bold mb-5">Projects</h2>
          <div className="flex flex-col gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xl font-bold mb-5">Blogs</h2>
          <div className="flex flex-col gap-5">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} {...blog} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
