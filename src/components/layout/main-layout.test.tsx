import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainLayout } from './main-layout';

describe('MainLayout', () => {
  it('renders header', () => {
    render(
      <MainLayout>
        <main>Content</main>
      </MainLayout>
    );
    expect(screen.getByRole('banner')).toBeDefined();
  });

  it('renders footer', () => {
    render(
      <MainLayout>
        <main>Content</main>
      </MainLayout>
    );
    expect(screen.getByRole('contentinfo')).toBeDefined();
  });

  it('renders children content', () => {
    render(
      <MainLayout>
        <main>
          <h1>Test Content</h1>
        </main>
      </MainLayout>
    );
    expect(screen.getByText('Test Content')).toBeDefined();
  });
});
