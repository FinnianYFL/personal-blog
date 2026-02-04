import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BlogPage } from './page';

describe('BlogPage', () => {
  it('renders page title', () => {
    render(<BlogPage searchParams={{}} />);
    expect(screen.getByText(/blog/i)).toBeDefined();
  });

  it('renders filters section', () => {
    render(<BlogPage searchParams={{}} />);
    expect(screen.getByText(/categories/i)).toBeDefined();
    expect(screen.getByText(/tags/i)).toBeDefined();
  });
});
