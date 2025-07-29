import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

// Optionally, mock subcomponents if you want to isolate the test
jest.mock('./HeroCarousel', () => () => <div data-testid="hero-carousel" />);
jest.mock('./HeroContent', () => () => <div data-testid="hero-content" />);

describe('Hero', () => {
  it('renders the hero container with correct classes', () => {
    render(<Hero />);
    const container = screen.getByTestId('hero-container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('flex', 'flex-col', 'md:flex-row-reverse');
  });

  it('renders HeroCarousel and HeroContent', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-carousel')).toBeInTheDocument();
    expect(screen.getByTestId('hero-content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Hero className="custom-class" />);
    const container = screen.getByTestId('hero-container');
    expect(container).toHaveClass('custom-class');
  });

  it('spreads additional props to the container', () => {
    render(<Hero id="hero-id" aria-label="hero" />);
    const container = screen.getByTestId('hero-container');
    expect(container).toHaveAttribute('id', 'hero-id');
    expect(container).toHaveAttribute('aria-label', 'hero');
  });
});
