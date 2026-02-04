import { MainLayout } from '@/components/layout';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About | Finnian\'s Blog',
  description: 'Learn more about Finnian, a software developer passionate about clean code and modern web technologies.',
};

const skills = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Docker',
  'Git',
  'AWS',
];

const interests = [
  'Clean Code & Best Practices',
  'System Design',
  'Open Source',
  'Technical Writing',
  'Continuous Learning',
];

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <header className="mb-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
                <Terminal className="h-4 w-4" />
                <span>About Me</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Hi, I&apos;m Finnian
              </h1>
              <p className="text-lg text-muted-foreground">
                A software developer passionate about building clean, efficient, and user-friendly applications.
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert mb-12">
              <p>
                I&apos;m a software developer with a passion for clean code and modern web technologies. 
                With several years of experience in full-stack development, I specialize in building 
                scalable web applications using JavaScript, TypeScript, and modern frameworks.
              </p>
              <p>
                My journey in software development started with a curiosity about how things work on the web. 
                Since then, I&apos;ve worked on various projects ranging from small startups to large enterprise applications.
              </p>
              <p>
                I believe in writing code that is not only functional but also maintainable and easy to understand. 
                I&apos;m constantly learning new technologies and best practices to improve my skills and deliver better solutions.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {interests.map(interest => (
                  <span
                    key={interest}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Connect</h2>
              <div className="flex gap-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-muted"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-muted"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-muted"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
