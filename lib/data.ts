import type { Blog, CardItem, Link } from "./types";

export const bookingLink = {
  label: "Book intro",
  href: "https://cal.com/senbo",
};

export const messageLink = {
  label: "Message on X",
  href: "https://x.com/messages/compose?recipient_id=1714698585776734208",
};


export const workExperiences = [
  {
    title: "Rork AI",
    description: "Oct 2025 – Apr 2026",
    url: "https://rork.com/",
  },
  {
    title: "Supernova AI",
    description: "Jul 2025 – Oct 2025",
    url: "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN",
  },
  {
    title: "Google Summer of Code 2025",
    description: "May 2025 – Aug 2025",
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
    description: "video chat app with webRTC",
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
    url: "https://spotted-router-f69.notion.site/Server-Actions-101-1a2a18c8612c80acba00e433673f77df",
    description: "February 27, 2025",
  },
  {
    title: "Just enough Typescript to build Projects.",
    url: "https://dev.to/senbo/just-enough-typescript-to-build-projects-a4o",
    description: "July 11, 2023",
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
