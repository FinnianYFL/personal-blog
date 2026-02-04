import Link from 'next/link';
import { getAllPosts, getAllCategories, getAllTags, getPostsByCategory } from '@/lib/posts';
import { MainLayout } from '@/components/layout';
import { format } from 'date-fns';
import { Clock, Tag } from 'lucide-react';

interface BlogPageProps {
  searchParams: Promise<{
    category?: string;
    tag?: string;
  }>;
}

export async function generateMetadata() {
  return {
    title: 'Blog | Finnian\'s Blog',
    description: 'Explore technical articles, tutorials, and insights on programming and software development.',
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const { category, tag } = resolvedSearchParams;

  const posts = category ? getPostsByCategory(category) : getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore technical articles, tutorials, and insights on programming and software development.
            </p>
          </header>

          {/* Filters */}
          <div className="mx-auto mb-12 max-w-5xl">
            {/* Categories */}
            <div className="mb-6">
              <h2 className="mb-3 text-sm font-medium text-muted-foreground">Categories</h2>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/blog"
                  className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                    !category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  All
                </Link>
                {categories.map(cat => (
                  <Link
                    key={cat}
                    href={`/blog?category=${cat}`}
                    className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                      category === cat
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h2 className="mb-3 text-sm font-medium text-muted-foreground">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <Link
                    key={t}
                    href={`/blog?tag=${t}`}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-sm transition-colors hover:border-primary/50 hover:bg-muted"
                  >
                    <Tag className="h-3 w-3" />
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="mx-auto max-w-5xl">
            {posts.length === 0 ? (
              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <p className="text-muted-foreground">No posts found.</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {posts.map(post => (
                  <article
                    key={post.slug}
                    className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
                  >
                    <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </time>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime || '5 min read'}
                      </span>
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
                      {post.categories.map(category => (
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
        </div>
      </section>
    </MainLayout>
  );
}
