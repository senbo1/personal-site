import type { Blog, CardItem, Link } from "./types";

export const workExperiences = [
  {
    title: "Rork",
    description: "Contract · 6 months",
    url: "https://rork.com/",
  },
  {
    title: "Supernova AI",
    description: "Intern · 3 months",
    url: "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN",
  },
  {
    title: "Google Summer of Code 2025",
    description: "GSoC Contributor · 4 months",
    url: "https://summerofcode.withgoogle.com/programs/2025/projects/8dgkuzjy",
  },
] satisfies CardItem[];

export const projects = [
  {
    title: "Chat0",
    description: "blazingly fast, free, open source ai chat app",
    url: "https://chat0.app",
  },
  {
    title: "Stream Mate",
    description: "video chat app with perfect negotiation webRTC",
    url: "https://stream-mate.senbocodes.workers.dev",
  },
  {
    title: "Katen Chart",
    description: "your favourite seasonal anime tracker",
    url: "https://katen-chart.vercel.app",
  },
] satisfies CardItem[];

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
    icon: "/x.svg",
  },
  {
    title: "Github",
    link: "https://github.com/senbo1",
    icon: "/github.svg",
  },
  {
    title: "Email",
    link: "mailto:senbodev@gmail.com",
    icon: "/mail.svg",
  },
] satisfies Link[];
