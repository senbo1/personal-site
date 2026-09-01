import BlogCard from "@/components/BlogCard";
import Card from "@/components/Card";
import IconLink from "@/components/IconLink";
import { ThemeToggler } from "@/components/ui/ThemeToggler";
import { blogs, links, projects, workExperiences } from "@/lib/data";

export default function Home() {
  return (
    <>
      <main className="py-8">
        <section className="flex justify-between">
          <div className="flex flex-col gap-1 items-start">
            <h1 className="text-xl font-bold">Hi, I'm Harsh</h1>
            <h2 className="text-base font-medium">
              I love building <span className="italic text-red-500">fast</span>{" "}
              and <span className="italic text-green-500">efficient</span> AI apps.
            </h2>
            <div className="mt-2 flex items-center gap-4">
              {links.map((link) => (
                <IconLink key={link.title} {...link} />
              ))}
            </div>
          </div>
          <ThemeToggler />
        </section>

        <section className="mt-10">
          <h2 className="text-sm mb-3 text-muted-foreground">Work</h2>
          <div className="flex flex-col gap-1">
            {workExperiences.map((work) => (
              <Card key={work.title} {...work} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-sm mb-3 text-muted-foreground">Projects</h2>
          <div className="flex flex-col gap-1">
            {projects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-sm mb-3 text-muted-foreground">Blogs</h2>
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
