import Header from '@/components/Header';
import Project from '@/components/Project';
import { getProjects } from '@/data/projects';

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col gap-4 mb-6" aria-label="description">
          <p>
            Hi there, I'm Harsh. A CS Undergrad from India. I mostly do web
            development with{' '}
            <strong>Nextjs, TypeScript, Nodejs & Postgres.</strong>
          </p>
          <p>
            I am currently building a{' '}
            <a
              href="https://github.com/senbo1/twitter-clone"
              className="underline underline-offset-4 decoration-neutral-600 decoration-2 hover-transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter/X Clone
            </a>{' '}
            using Nextjs 14 and TypeScript. In my free time I like to watch
            anime, read manga and listen to music.
          </p>

          <h2 className="text-2xl font-bold mb-2">Projects</h2>
          <section className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-x-6 mb-6">
            {projects.map((project) => (
              <Project {...project} />
            ))}
          </section>
          
        </section>
      </main>
    </>
  );
}
