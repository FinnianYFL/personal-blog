import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import { siteConfig } from '@/lib/site';

describe('Footer', () => {
  it('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© \d{4}/)).toBeDefined();
  });

  it('renders author name', () => {
    render(<Footer />);
    expect(screen.getByText(siteConfig.author)).toBeDefined();
  });

  it('renders social links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /github/i })).toBeDefined();
  });
});
