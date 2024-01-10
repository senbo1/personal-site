import Header from '@/components/Header';

export default function Home() {
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
        </section>
      </main>
    </>
  );
}
