import { Blog, Link, Project, WorkExperience } from "./types";

export const workExperiences = [
  {
    title: "rork",
    role: "swe",
    url: "https://rork.com/",
    period: "October 2025 - May 2026",
    imageUrl: "/rork.webp",
  },
  {
    title: "supernova ai",
    role: "swe intern",
    url: "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN",
    period: "July 2025 - October 2025",
    imageUrl: "/supernova.webp",
  },
  {
    title: "google summer of code 2025",
    role: "open source contributor",
    url: "https://summerofcode.withgoogle.com/programs/2025/projects/8dgkuzjy",
    period: "June 2025 - September 2025",
    imageUrl: "/gsoc.webp",
  },
] satisfies WorkExperience[];

export const projects = [
  {
    title: "chat0",
    description: "blazingly fast, free, open source ai chat app",
    demoUrl: "https://chat0.app",
    githubUrl: "https://github.com/senbo1/chat0",
  },
  {
    title: "stream-mate",
    description: "video chat app with perfect negotiation webRTC",
    demoUrl: "https://stream-mate.senbocodes.workers.dev",
    githubUrl: "https://github.com/senbo1/stream-mate",
  },
  {
    title: "Katen Chart",
    description: "your favourite seasonal anime tracker",
    demoUrl: "https://katen-chart.vercel.app",
    githubUrl: "https://github.com/senbo1/katen-chart",
  },
] satisfies Project[];

export const blogs = [
  {
    title: "Server Actions 101",
    link: "https://spotted-router-f69.notion.site/Server-Actions-101-1a2a18c8612c80acba00e433673f77df",
    date: "February 27, 2025",
  },
  {
    title: "Just enough Typescript to build Projects.",
    link: "https://dev.to/senbo/just-enough-typescript-to-build-projects-a4o",
    date: "July 11, 2023",
  },
] satisfies Blog[];

export const links = [
  {
    title: "Twitter",
    link: "https://x.com/senbodev",
  },
  {
    title: "Github",
    link: "https://github.com/senbo1",
  },
  {
    title: "Email",
    link: "mailto:senbodev@gmail.com",
  },
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/12cj6JKyJEiKgqFUid0bjVZub4yADiHs1/view",
  },
] satisfies Link[];
