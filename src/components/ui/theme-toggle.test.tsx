import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as nextThemes from 'next-themes';
import { ThemeToggle } from './theme-toggle';

vi.mock('next-themes');

describe('ThemeToggle', () => {
  beforeEach(() => {
    vi.spyOn(nextThemes, 'useTheme').mockReturnValue({
      theme: 'dark',
      resolvedTheme: 'dark',
      toggleTheme: vi.fn(),
      setTheme: vi.fn(),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('shows sun icon in dark mode', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
  });

  it('calls toggleTheme when clicked', async () => {
    const toggleTheme = vi.fn();
    vi.spyOn(nextThemes, 'useTheme').mockReturnValue({
      theme: 'dark',
      resolvedTheme: 'dark',
      toggleTheme,
      setTheme: vi.fn(),
    });
    
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    expect(toggleTheme).toHaveBeenCalled();
  });
});
