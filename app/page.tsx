import { Nav } from '@/components/Nav';
import { ThemeToggler } from '@/components/ui/ThemeToggler';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Hi, I am harsh</h1>
          <h2 className="text-lg font-medium">
            I love building <span className="italic text-red-500">fast</span>{' '}
            and <span className="italic text-green-500">efficient</span> full
            stack applications.
          </h2>
          <p>
            Stack - TypeScript, Golang, Next.js, React, Node.js, PostgreSQL,
            Prisma, Drizzle, Docker
          </p>
        </section>

        <section className="pt-20">
          <h2 className="text-xl text-center font-bold">Projects</h2>
        </section>
      </main>
    </>
  );
}
