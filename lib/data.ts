import { Blog, Link, Project } from './types';

export const projects = [
  {
    title: 'chat0',
    description: 'blazingly fast, free, open source ai chat app',
    demoUrl: 'https://chat0.space',
    githubUrl: 'https://github.com/senbo1/chat0',
  },
  {
    title: 'stream-mate',
    description: 'video chat app with perfect negotiation webRTC',
    demoUrl: 'https://video.chat0.space',
    githubUrl: 'https://github.com/senbo1/stream-mate',
  },
  {
    title: 'Katen Chart',
    description: 'your favourite seasonal anime tracker',
    demoUrl: 'https://katen-chart.vercel.app',
    githubUrl: 'https://github.com/senbo1/katen-chart',
  },
  {
    title: 'Madrid Software',
    description: 'A landing page for company',
    demoUrl: 'https://madridsoftware.vercel.app',
    githubUrl: 'https://github.com/senbo1/madridsoftware',
  },
] satisfies Project[];

export const blogs = [
  {
    title: 'Server Actions 101',
    link: 'https://spotted-router-f69.notion.site/Server-Actions-101-1a2a18c8612c80acba00e433673f77df',
    date: 'February 27, 2025',
  },
  {
    title: 'Just enough Typescript to build Projects.',
    link: 'https://dev.to/senbo/just-enough-typescript-to-build-projects-a4o',
    date: 'July 11, 2023',
  },
] satisfies Blog[];

export const links = [
  {
    title: 'Twitter',
    link: 'https://x.com/senbodev',
  },
  {
    title: 'Github',
    link: 'https://github.com/senbo1',
  },
  {
    title: 'Email',
    link: 'mailto:senbodev@gmail.com',
  },
] satisfies Link[];
