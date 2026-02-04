import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import { MainLayout } from '@/components/layout';
import { format } from 'date-fns';
import { ArrowLeft, Clock, Tag } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Finnian's Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <MainLayout>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          {/* Header */}
          <header className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
              {post.readingTime && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </>
              )}
            </div>

            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mb-8 flex flex-wrap gap-2">
              {post.categories.map(category => (
                <Link
                  key={category}
                  href={`/blog?category=${category}`}
                  className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                >
                  <Tag className="h-3 w-3" />
                  {category}
                </Link>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
