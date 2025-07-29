import { render, screen } from '@testing-library/react';
import { H1, H2, H3, H4 } from './Headings';
import '@testing-library/jest-dom';

describe('Headings', () => {
  it('renders H1 with correct tag and classes', () => {
    render(<H1>Heading 1</H1>);
    const el = screen.getByText('Heading 1');
    expect(el.tagName).toBe('H1');
    expect(el).toHaveClass(
      'font-bold',
      'font-headings',
      'text-default',
      'text-3xl',
      'md:text-[32px]'
    );
  });

  it('renders H1 with mobile prop', () => {
    render(<H1 mobile>Mobile Heading 1</H1>);
    const el = screen.getByText('Mobile Heading 1');
    expect(el).toHaveClass('text-3xl', 'md:text-2xl');
  });

  it('renders H2 with correct tag and classes', () => {
    render(<H2>Heading 2</H2>);
    const el = screen.getByText('Heading 2');
    expect(el.tagName).toBe('H2');
    expect(el).toHaveClass(
      'font-bold',
      'font-headings',
      'text-default',
      'text-lg',
      'md:text-xl'
    );
  });

  it('renders H2 with mobile prop', () => {
    render(<H2 mobile>Mobile Heading 2</H2>);
    const el = screen.getByText('Mobile Heading 2');
    expect(el).toHaveClass('text-lg', 'md:text-lg');
  });

  it('renders H3 with correct tag and classes', () => {
    render(<H3>Heading 3</H3>);
    const el = screen.getByText('Heading 3');
    expect(el.tagName).toBe('H3');
    expect(el).toHaveClass(
      'font-bold',
      'font-headings',
      'text-default',
      'text-lg'
    );
  });

  it('renders H4 with correct tag and classes', () => {
    render(<H4>Heading 4</H4>);
    const el = screen.getByText('Heading 4');
    expect(el.tagName).toBe('H4');
    expect(el).toHaveClass(
      'font-semibold',
      'font-headings',
      'text-default',
      'text-base'
    );
  });

  it('applies custom className', () => {
    render(<H1 className="custom-class">Custom Heading</H1>);
    const el = screen.getByText('Custom Heading');
    expect(el).toHaveClass('custom-class');
  });
});
