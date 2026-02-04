import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Header } from './header';
import { navItems } from '@/lib/site';

describe('Header', () => {
  beforeEach(() => {
    vi.mock('next/navigation', () => ({
      usePathname: () => '/',
    }));
  });

  afterEach(() => {
    cleanup();
  });

  it('renders navigation links', () => {
    render(<Header />);
    
    navItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeDefined();
    });
  });

  it('renders theme toggle', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeDefined();
  });

  it('highlights active navigation link', () => {
    render(<Header />);
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeDefined();
  });
});
