import { describe, it, expect, vi, beforeAll } from 'vitest';
import { getPostSlugs, getPostBySlug, getAllPosts, getPostsByCategory } from './posts';

describe('Posts API', () => {
  it('getPostSlugs returns array of slugs', () => {
    const slugs = getPostSlugs();
    expect(Array.isArray(slugs)).toBe(true);
  });

  it('getPostBySlug returns post data', () => {
    const slugs = getPostSlugs();
    if (slugs.length > 0) {
      const post = getPostBySlug(slugs[0]);
      expect(post).toBeDefined();
      expect(post.slug).toBe(slugs[0]);
    }
  });

  it('getAllPosts returns array of posts', () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
  });

  it('getPostsByCategory filters by category', () => {
    const posts = getAllPosts();
    if (posts.length > 0) {
      const categories = posts.flatMap(post => post.categories);
      const uniqueCategories = [...new Set(categories)];
      if (uniqueCategories.length > 0) {
        const filteredPosts = getPostsByCategory(uniqueCategories[0]);
        expect(filteredPosts.every(post => post.categories.includes(uniqueCategories[0]))).toBe(true);
      }
    }
  });
});
