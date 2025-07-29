import { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroCarousel from './HeroCarousel';
import { DEFAULT_HERO_IMAGES } from './constants';
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@shadcn-ui';

jest.mock('@shadcn-ui', () => ({
  Carousel: ({ children, ...props }: ComponentProps<typeof Carousel>) => (
    <div data-testid="carousel" {...props}>
      {children}
    </div>
  ),
  CarouselContent: ({
    children,
    ...props
  }: ComponentProps<typeof CarouselContent>) => (
    <div data-testid="carousel-content" {...props}>
      {children}
    </div>
  ),
  CarouselItem: ({
    children,
    ...props
  }: ComponentProps<typeof CarouselItem>) => (
    <div data-testid="carousel-item" {...props}>
      {children}
    </div>
  ),
  Card: ({ children, ...props }: ComponentProps<typeof Card>) => (
    <div data-testid="card" {...props}>
      {children}
    </div>
  ),
  CardContent: ({ children, ...props }: ComponentProps<typeof CardContent>) => (
    <div data-testid="card-content" {...props}>
      {children}
    </div>
  ),
}));

describe('HeroCarousel', () => {
  it('renders the carousel', () => {
    render(<HeroCarousel />);
    expect(screen.getByTestId('carousel')).toBeInTheDocument();
  });

  it('renders the correct number of images', () => {
    render(<HeroCarousel />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(DEFAULT_HERO_IMAGES.length);
  });

  it('renders images with correct src and alt', () => {
    render(<HeroCarousel />);
    DEFAULT_HERO_IMAGES.forEach((src, idx) => {
      const img = screen.getByAltText(`Hero ${idx + 1}`);
      expect(img).toHaveAttribute('src', src);
    });
  });
});
