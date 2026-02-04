import { Hero, FeaturedPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <MainLayout>
      <Hero />
      <FeaturedPosts posts={posts} />
    </MainLayout>
  );
}
