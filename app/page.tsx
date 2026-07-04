import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import WorkList from "@/components/WorkList";
import { ThemeToggler } from "@/components/ui/ThemeToggler";
import { blogs, links, projects, workExperiences } from "@/lib/data";

export default function Home() {
  return (
    <>
      <main className="py-8">
        <section className="flex justify-between">
          <div className="flex flex-col gap-1 items-start">
            <h1 className="text-2xl font-bold">Hi, I am harsh</h1>
            <h2 className="text-sm font-medium">
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

        <section className="mt-10">
          <h2 className="text-base font-bold mb-3">Work Experience</h2>
          <WorkList items={workExperiences} />
        </section>

        <section className="mt-10">
          <h2 className="text-base font-bold mb-3">Projects</h2>
          <div className="flex flex-col gap-1">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-base font-bold mb-3">Blogs</h2>
          <div className="flex flex-col gap-1">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} {...blog} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
