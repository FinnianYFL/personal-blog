import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactPage } from './page';

describe('ContactPage', () => {
  it('renders page title', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('renders contact form', () => {
    render(<ContactPage />);
    expect(screen.getByRole('form')).toBeDefined();
  });

  it('renders form fields', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/name/i)).toBeDefined();
    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByLabelText(/message/i)).toBeDefined();
  });
});
