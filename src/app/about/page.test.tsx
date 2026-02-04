import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutPage } from './page';

describe('AboutPage', () => {
  it('renders page title', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('renders about content', () => {
    render(<AboutPage />);
    expect(screen.getByText(/software developer/i)).toBeDefined();
  });

  it('renders skills section', () => {
    render(<AboutPage />);
    expect(screen.getByText(/skills/i)).toBeDefined();
  });
});
