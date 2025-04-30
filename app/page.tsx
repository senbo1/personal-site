import BlogCard from '@/components/BlogCard';
import { Nav } from '@/components/Nav';
import ProjectCard from '@/components/ProjectCard';
import { blogs, links, projects } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="flex flex-col gap-2 items-start">
          <h1 className="text-4xl font-bold">Hi, I am harsh</h1>
          <h2 className="text-lg font-medium">
            I love building <span className="italic text-red-500">fast</span>{' '}
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
        </section>

        <section className="mt-20">
          <h2 className="text-xl text-center font-bold mb-5">Projects</h2>
          <div className="flex flex-col gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xl text-center font-bold mb-5">Blogs</h2>
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
