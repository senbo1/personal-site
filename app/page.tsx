import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Project from '@/components/Project';
import Spotify from '@/components/Spotify/Spotify';
import { getProjects } from '@/data/projects';

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Header />
      <main className="flex flex-col gap-2 mb-4">
        <section className="flex flex-col gap-4 mb-4" aria-label="description">
          <p>
            Hi there, I&apos;m Harsh. A CS Undergrad from India. I mostly do web
            development with{' '}
            <strong>Nextjs, TypeScript, Nodejs & Postgres.</strong>
          </p>
          <p>
            I am currently building a{' '}
            <a
              href="https://github.com/senbo1/twitter-clone"
              className="underline-gray hover:decoration-slate-200 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter/X Clone
            </a>{' '}
            using Nextjs and TypeScript. In my free time I like to watch anime,
            read manga and listen to music.
          </p>
        </section>

        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <section className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-x-6 mb-2">
          {projects.map((project) => (
            <Project {...project} key={project.link} />
          ))}
        </section>

        {/* <Spotify /> */}
      </main>
      <Footer />
    </>
  );
}
