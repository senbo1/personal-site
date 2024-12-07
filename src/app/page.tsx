import Name from '@/components/Name';
import Projects from '@/components/Projects';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <Name />
        <h2 className="text-2xl mb-4 text-center">Next.js Developer</h2>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-xl text-center">
            I love creating fast, responsive, and user-friendly web applications
            using Next.js and React.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Next.js',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'Node.js',
              'REST APIs',
              'PostgreSQL',
              'MongoDB',
              'Git',
            ].map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <Projects />
      </div>
    </main>
  );
}
