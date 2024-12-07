import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type Project = {
  title: string;
  description: string;
  codeUrl?: string;
  demoUrl?: string;
};

const projects = [
  {
    title: 'Stream Mate',
    description:
      'A WebRTC video chat app with screen sharing, using the Perfect Negotiation Method for seamless, high-quality communication.',
    demoUrl: 'https://stream-mate.vercel.app/',
    codeUrl: 'https://github.com/senbo1/StreamMate',
  },
  {
    title: 'go-container',
    description: 'Simple Container Runtime in Go',
    codeUrl: 'https://github.com/senbo1/go-container',
  },
] satisfies Project[];

const Projects = () => {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="max-h-24 h-full">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-4">
              {project.demoUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
