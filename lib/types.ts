export type WorkExperience = {
  title: string;
  role: string;
  url: string;
  period: string;
  imageUrl?: string;
};

export type Project = {
  title: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  imageUrl?: string;
};

export type Blog = {
  title: string;
  link: string;
  date: string;
};

export type Link = {
  title: string;
  link: string;
};
