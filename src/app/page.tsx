import Contact from '@/components/Contact';
import Name from '@/components/Name';
import Projects from '@/components/Projects';
import { ThemeToggle } from '@/components/Theme/ThemeToggle';
import { Badge } from '@/components/ui/badge';
import BlurFade from '@/components/ui/blur-fade';

export const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 sm:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <header>
          <ThemeToggle />
        </header>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Name />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-2xl mb-4 text-center">Next.js Developer</h2>
        </BlurFade>

        {/* Introduction */}
        <section className="mb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-xl text-center">
              I love creating fast, responsive, and user-friendly web
              applications using Next.js and React.
            </p>
          </BlurFade>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          </BlurFade>
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
              'Docker',
            ].map((skill, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 4 + id * 0.05} key={skill}>
                <Badge variant="secondary">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </section>

        <Projects />

        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Contact />
        </BlurFade>
      </div>
    </main>
  );
}
