import Link from 'next/link';
import { PostMeta } from '@/types';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface FeaturedPostsProps {
  posts: PostMeta[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                  <span>•</span>
                  <span>{post.readingTime || '5 min read'}</span>
                </div>

                <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>

                <p className="mb-4 flex-1 text-muted-foreground">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
