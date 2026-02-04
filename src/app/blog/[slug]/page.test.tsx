import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BlogPostPage } from './page';

describe('BlogPostPage', () => {
  it('renders post title', () => {
    render(
      <BlogPostPage
        params={{
          slug: 'test-post'
        }}
      />
    );
    expect(screen.getByRole('heading')).toBeDefined();
  });

  it('renders back link', () => {
    render(
      <BlogPostPage
        params={{
          slug: 'test-post'
        }}
      />
    );
    expect(screen.getByRole('link', { name: /back to blog/i })).toBeDefined();
  });
});
