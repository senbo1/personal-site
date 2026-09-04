import {
  siCloudflare,
  siDocker,
  siExpo,
  siGo,
  siMongodb,
  siNextdotjs,
  siPostgresql,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

import { awsIconPath } from "./icons/aws";
import type { Blog, CardItem, Link, StackItem } from "./types";

export const bookingLink = {
  label: "Book intro",
  href: "https://cal.com/senbo",
};

export const messageLink = {
  label: "Message on X",
  href: "https://x.com/messages/compose?recipient_id=1714698585776734208",
};

export const currentStack = [
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: {
      path: siTypescript.path,
      size: "regular",
      colors: {
        light: `#${siTypescript.hex}`,
        dark: `#${siTypescript.hex}`,
      },
    },
  },
  {
    name: "React",
    href: "https://react.dev/",
    icon: {
      path: siReact.path,
      size: "regular",
      colors: { light: `#${siReact.hex}`, dark: `#${siReact.hex}` },
    },
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: {
      path: siNextdotjs.path,
      size: "regular",
      colors: { light: `#${siNextdotjs.hex}`, dark: "#FFFFFF" },
    },
  },
  {
    name: "Expo",
    href: "https://expo.dev/",
    icon: {
      path: siExpo.path,
      size: "regular",
      colors: { light: `#${siExpo.hex}`, dark: "#FFFFFF" },
    },
  },
  {
    name: "Go",
    href: "https://go.dev/",
    icon: {
      path: siGo.path,
      size: "large",
      colors: { light: `#${siGo.hex}`, dark: `#${siGo.hex}` },
    },
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: {
      path: siTailwindcss.path,
      size: "large",
      colors: {
        light: `#${siTailwindcss.hex}`,
        dark: `#${siTailwindcss.hex}`,
      },
    },
  },
  {
    name: "Postgres",
    href: "https://www.postgresql.org/",
    icon: {
      path: siPostgresql.path,
      size: "large",
      colors: {
        light: `#${siPostgresql.hex}`,
        dark: `#${siPostgresql.hex}`,
      },
    },
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: {
      path: siMongodb.path,
      size: "large",
      colors: { light: `#${siMongodb.hex}`, dark: `#${siMongodb.hex}` },
    },
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    icon: {
      path: siDocker.path,
      size: "large",
      colors: { light: `#${siDocker.hex}`, dark: `#${siDocker.hex}` },
    },
  },
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    icon: {
      path: awsIconPath,
      size: "large",
      colors: { light: "#232F3E", dark: "#FFFFFF" },
    },
  },
  {
    name: "Cloudflare",
    href: "https://www.cloudflare.com/",
    icon: {
      path: siCloudflare.path,
      size: "large",
      colors: { light: `#${siCloudflare.hex}`, dark: `#${siCloudflare.hex}` },
    },
  },
] satisfies StackItem[];

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
    description: "Contributor · 4 months",
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
