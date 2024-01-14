export interface Project {
  name: string;
  description: string;
  link: string;
}

export const getProjects = async (): Promise<Project[]> => {
  return [
    {
      name: 'twitter-clone',
      description: 'Twitter clone made with Nextjs, shadcn/ui, and postgres',
      link: 'https://github.com/senbo1/twitter-clone',
    },
    {
      name: 'personal-site',
      description: 'Personal site made with Nextjs',
      link: 'https://github.com/senbo1/personal-site',
    },
    {
      name: 'RESTful-API',
      description: 'A RESTful API with JWT and Typescript',
      link: 'https://github.com/senbo1/RESTful-API',
    },
    {
      name: 'Algorithms',
      description: 'Implementation of common data structures & algorithms',
      link: 'https://github.com/senbo1/Algorithms',
    },
    {
      name: 'GPTussy',
      description: "A Discord bot that integrates OpenAI's GPT Models",
      link: 'https://github.com/senbo1/GPTussy',
    },
    {
      name: 'BookReviews',
      description: 'Expressjs app to review books',
      link: 'https://github.com/senbo1/BookReviews',
    },
  ];
};
