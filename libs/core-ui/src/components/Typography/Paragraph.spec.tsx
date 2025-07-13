import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { P } from './Paragraph';
import { ParagraphSize } from './interface';

describe('Paragraph (P)', () => {
  it('renders a <p> tag', () => {
    render(<P>Paragraph text</P>);
    const el = screen.getByText('Paragraph text');
    expect(el.tagName).toBe('P');
  });

  it('renders children', () => {
    render(<P>Some content</P>);
    expect(screen.getByText('Some content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<P>Default paragraph</P>);
    const el = screen.getByText('Default paragraph');
    expect(el).toHaveClass(
      'text-default',
      'font-body',
      'font-normal',
      'text-base'
    );
  });

  it('applies bold class when bold is true', () => {
    render(<P bold>Bold paragraph</P>);
    const el = screen.getByText('Bold paragraph');
    expect(el).toHaveClass('font-medium');
    expect(el).not.toHaveClass('font-normal');
  });

  it('applies custom font', () => {
    render(<P font="body">Serif paragraph</P>);
    const el = screen.getByText('Serif paragraph');
    expect(el).toHaveClass('font-body');
  });

  it('applies correct class for each size', () => {
    const sizes = [
      { size: '3xs', className: 'text-xs' },
      { size: '2xs', className: 'text-sm' },
      { size: 'xs', className: 'text-base' },
      { size: 'sm', className: 'text-lg' },
      { size: 'md', className: 'text-xl' },
      { size: 'lg', className: 'text-2xl' },
      { size: 'xl', className: 'text-[32px]' },
      { size: '2xl', className: 'text-4xl' },
      { size: '3xl', className: 'text-5xl' },
      { size: '4xl', className: 'text-6xl' },
    ];

    sizes.forEach(({ size, className }) => {
      render(<P size={size as ParagraphSize}>{size} paragraph</P>);
      const el = screen.getByText(`${size} paragraph`);
      expect(el).toHaveClass(className);
    });
  });

  it('applies custom className', () => {
    render(<P className="custom-class">Custom class</P>);
    const el = screen.getByText('Custom class');
    expect(el).toHaveClass('custom-class');
  });
});
