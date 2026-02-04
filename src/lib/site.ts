import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Finnian',
  description: 'Personal blog for sharing technical knowledge and programming tutorials.',
  url: 'https://finnian-blog.vercel.app',
  author: 'Finnian',
  social: {
    github: 'https://github.com/finnian',
    twitter: 'https://twitter.com/finnian',
    linkedin: 'https://linkedin.com/in/finnian',
  },
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
