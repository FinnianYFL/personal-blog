import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './hero';

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />);
    expect(screen.getByText(/building/i)).toBeDefined();
  });

  it('renders description', () => {
    render(<Hero />);
    expect(screen.getByText(/technical/i)).toBeDefined();
  });

  it('renders CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /read blog/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /learn more/i })).toBeDefined();
  });
});
