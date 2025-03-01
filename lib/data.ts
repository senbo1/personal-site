import { Blog, Link, Project } from './types';

export const projects = [
  {
    title: 'Katen Chart',
    description: 'your favourite seasonal anime tracker',
    link: 'https://katen-chart.vercel.app',
  },
  {
    title: 'Madrid Software',
    description: 'A landing page for a software company',
    link: 'https://madridsoftware.vercel.app',
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
