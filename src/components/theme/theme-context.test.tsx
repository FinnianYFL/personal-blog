import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ThemeProvider, useTheme } from './theme-context';

// Mock next-themes or implement our own test version
describe('ThemeContext', () => {
  const TestComponent = () => {
    const { theme, toggleTheme, resolvedTheme } = useTheme();
    return (
      <div>
        <span data-testid="current-theme">{theme}</span>
        <span data-testid="resolved-theme">{resolvedTheme}</span>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    );
  };

  it('provides theme state', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('current-theme')).toBeDefined();
    expect(screen.getByTestId('resolved-theme')).toBeDefined();
  });

  it('toggles between light and dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    const toggleButton = screen.getByText('Toggle');
    const themeElement = screen.getByTestId('current-theme');
    
    const initialTheme = themeElement.textContent;
    fireEvent.click(toggleButton);
    
    expect(themeElement.textContent).not.toBe(initialTheme);
  });
});
