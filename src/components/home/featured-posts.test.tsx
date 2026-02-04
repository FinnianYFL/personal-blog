import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FeaturedPosts } from './featured-posts';

describe('FeaturedPosts', () => {
  it('renders section title', () => {
    render(<FeaturedPosts posts={[]} />);
    expect(screen.getByText(/recent posts/i)).toBeDefined();
  });

  it('renders empty state when no posts', () => {
    render(<FeaturedPosts posts={[]} />);
    expect(screen.getByText(/no posts yet/i)).toBeDefined();
  });

  it('renders post cards when posts available', () => {
    const mockPosts = [
      {
        slug: 'test-post',
        title: 'Test Post',
        description: 'Test description',
        date: '2024-01-01',
        categories: ['Test'],
        tags: ['test'],
        content: 'Content',
      },
    ];
    
    render(<FeaturedPosts posts={mockPosts} />);
    expect(screen.getByText('Test Post')).toBeDefined();
  });
});
