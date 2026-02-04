export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  categories: string[];
  tags: string[];
  content: string;
  readingTime?: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  categories: string[];
  tags: string[];
  readingTime?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  social: {
    github: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}
