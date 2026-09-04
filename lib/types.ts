export type CardItem = {
  title: string;
  description: string;
  url: string;
};

export type Blog = {
  title: string;
  link: string;
  date: string;
};

export type Link = {
  title: string;
  link: string;
  icon: string;
};

export type StackItem = {
  name: string;
  href: string;
  icon: {
    path: string;
    size: "regular" | "large";
    colors: {
      light: string;
      dark: string;
    };
  };
};
