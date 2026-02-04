import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Terminal decoration */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
            <Terminal className="h-4 w-4" />
            <span>Developer & Technical Writer</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Building{' '}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              digital experiences
            </span>{' '}
            that matter
          </h1>

          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Sharing technical knowledge, programming tutorials, and insights 
            from my journey as a software developer. Focused on clean code, 
            best practices, and continuous learning.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Read Blog
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
