import { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';
import { DEFAULT_HERO_IMAGES } from './constants';
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@shadcn-ui';
import Text from '../Text';
import Button from '../Button';

jest.mock('@fs/intl', () => ({
  useIntl: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock('@shadcn-ui', () => ({
  Card: ({ children, className }: ComponentProps<typeof Card>) => (
    <div data-testid="card" className={className}>
      {children}
    </div>
  ),
  CardContent: ({
    children,
    className,
  }: ComponentProps<typeof CardContent>) => (
    <div data-testid="card-content" className={className}>
      {children}
    </div>
  ),
  Carousel: ({
    children,
    className,
    plugins,
  }: ComponentProps<typeof Carousel>) => (
    <div data-testid="carousel" className={className}>
      {children}
    </div>
  ),
  CarouselContent: ({
    children,
    className,
  }: ComponentProps<typeof CarouselContent>) => (
    <div data-testid="carousel-content" className={className}>
      {children}
    </div>
  ),
  CarouselItem: ({
    children,
    className,
  }: ComponentProps<typeof CarouselItem>) => (
    <div data-testid="carousel-item" className={className}>
      {children}
    </div>
  ),
}));

jest.mock('embla-carousel-autoplay', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
}));

jest.mock('../Text', () => ({
  __esModule: true,
  default: ({ children, as, size, className }: ComponentProps<typeof Text>) => {
    const Component = as || 'span';
    return (
      <Component data-testid="text" data-size={size} className={className}>
        {children}
      </Component>
    );
  },
}));

jest.mock('../Button', () => ({
  __esModule: true,
  default: ({
    children,
    size,
    variant,
    onClick,
  }: ComponentProps<typeof Button>) => (
    <button
      data-testid="button"
      data-size={size}
      data-variant={variant}
      onClick={onClick}
    >
      {children}
    </button>
  ),
}));

jest.mock(
  '../../assets/images/hero/hero-image-1.jpg',
  () => 'hero-image-1.jpg'
);
jest.mock(
  '../../assets/images/hero/hero-image-2.jpg',
  () => 'hero-image-2.jpg'
);
jest.mock(
  '../../assets/images/hero/hero-image-3.jpg',
  () => 'hero-image-3.jpg'
);
jest.mock(
  '../../assets/images/hero/hero-image-4.jpg',
  () => 'hero-image-4.jpg'
);
jest.mock(
  '../../assets/images/hero/hero-image-5.jpg',
  () => 'hero-image-5.jpg'
);

describe('Hero', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the hero component with default structure', () => {
      render(<Hero />);

      const heroContainer = screen.getByTestId('hero-container');
      expect(heroContainer).toHaveClass(
        'flex',
        'flex-col',
        'md:flex-row-reverse'
      );
    });

    it('renders with custom className', () => {
      render(<Hero className="custom-class" />);

      const heroContainer = screen.getByTestId('hero-container');
      expect(heroContainer).toHaveClass('custom-class');
    });

    it('renders with additional props', () => {
      render(<Hero data-testid="hero" aria-label="Hero section" />);

      const heroContainer = screen.getByTestId('hero');
      expect(heroContainer).toHaveAttribute('aria-label', 'Hero section');
    });
  });

  describe('HeroContent', () => {
    it('renders hero content with correct structure', () => {
      render(<Hero />);

      const contentContainer = screen.getByText('HERO.EYEBROW').closest('div');
      expect(contentContainer).toHaveClass(
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'gap-2',
        'pt-10',
        'pb-16',
        'py-2',
        'w-full',
        'md:justify-center',
        'md:gap-4',
        'md:pt-0',
        'md:pb-0',
        'md:w-[calc(80%-4px)]'
      );
    });

    it('renders all text elements with correct content', () => {
      render(<Hero />);

      expect(screen.getByText('HERO.EYEBROW')).toBeTruthy();
      expect(screen.getByText('hero.title')).toBeTruthy();
      expect(screen.getByText('hero.subtitle')).toBeTruthy();
    });

    it('renders text elements with correct styling', () => {
      render(<Hero />);

      const accentText = screen.getByText('HERO.EYEBROW');
      expect(accentText).toHaveClass(
        'text-accent.amberGold',
        'font-barlowCondensed',
        'tracking-widest'
      );

      const title = screen.getByText('hero.title');
      expect(title).toHaveClass('text-default', 'font-playfairDisplay', 'm-0');

      const description = screen.getByText('hero.subtitle');
      expect(description).toHaveClass(
        'text-accent.jetBlack.bolder',
        'font-inter'
      );
    });

    it('renders buttons with correct content and styling', () => {
      render(<Hero />);

      const buttons = screen.getAllByTestId('button');
      expect(buttons).toHaveLength(2);

      expect(buttons[0]).toHaveTextContent('Collection');
      expect(buttons[0]).toHaveAttribute('data-size', 'lg');

      expect(buttons[1]).toHaveTextContent('Showroom');
      expect(buttons[1]).toHaveAttribute('data-size', 'lg');
      expect(buttons[1]).toHaveAttribute('data-variant', 'outline');
    });

    it('renders buttons in correct container', () => {
      render(<Hero />);

      const buttonContainer = screen.getByText('Collection').closest('div');
      expect(buttonContainer).toHaveClass('flex', 'gap-6');
    });
  });

  describe('HeroCarousel', () => {
    it('renders carousel with correct structure', () => {
      render(<Hero />);

      expect(screen.getByTestId('carousel')).toBeTruthy();
      expect(screen.getByTestId('carousel-content')).toBeTruthy();
    });

    it('renders carousel with correct styling', () => {
      render(<Hero />);

      const carousel = screen.getByTestId('carousel');
      expect(carousel).toHaveClass('w-full', 'gap-0');

      const carouselContent = screen.getByTestId('carousel-content');
      expect(carouselContent).toHaveClass('gap-0');
    });

    it('renders all hero images', () => {
      render(<Hero />);

      const carouselItems = screen.getAllByTestId('carousel-item');
      expect(carouselItems).toHaveLength(DEFAULT_HERO_IMAGES.length);

      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(DEFAULT_HERO_IMAGES.length);
    });

    it('renders images with correct attributes', () => {
      render(<Hero />);

      const images = screen.getAllByRole('img');

      images.forEach((image, index) => {
        expect(image).toHaveAttribute('src', DEFAULT_HERO_IMAGES[index]);
        expect(image).toHaveAttribute('alt', `Hero ${index + 1}`);
        expect(image).toHaveClass('w-full', 'h-full', 'object-cover');
      });
    });

    it('renders cards with correct styling', () => {
      render(<Hero />);

      const cards = screen.getAllByTestId('card');
      const cardContents = screen.getAllByTestId('card-content');

      cards.forEach((card) => {
        expect(card).toHaveClass('rounded-none', 'border-0');
      });

      cardContents.forEach((content) => {
        expect(content).toHaveClass(
          'flex',
          'aspect-[3/2]',
          'items-center',
          'justify-center',
          'p-0',
          'border-0'
        );
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper heading structure', () => {
      render(<Hero />);

      const h1 = screen.getByRole('heading', { level: 1 });

      expect(h1).toHaveTextContent('hero.title');
    });

    it('has proper button accessibility', () => {
      render(<Hero />);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);

      buttons.forEach((button) => {
        expect(button).toBeTruthy();
      });
    });

    it('has proper image alt text', () => {
      render(<Hero />);

      const images = screen.getAllByRole('img');
      images.forEach((image, index) => {
        expect(image).toHaveAttribute('alt', `Hero ${index + 1}`);
      });
    });
  });

  describe('Responsive Design', () => {
    it('applies responsive classes correctly', () => {
      render(<Hero />);

      const heroContainer = screen.getByTestId('hero-container');
      expect(heroContainer).toHaveClass('flex-col', 'md:flex-row-reverse');

      const contentContainer = screen.getByText('HERO.EYEBROW').closest('div');
      expect(contentContainer).toHaveClass(
        'w-full',
        'md:w-[calc(80%-4px)]',
        'pt-10',
        'md:pt-0',
        'pb-16',
        'md:pb-0',
        'gap-2',
        'md:gap-4',
        'justify-center',
        'md:justify-center'
      );
    });
  });

  describe('Integration', () => {
    it('renders complete hero section with all components', () => {
      render(<Hero />);

      expect(screen.getByText('HERO.EYEBROW')).toBeTruthy();
      expect(screen.getByText('hero.title')).toBeTruthy();
      expect(screen.getByText('hero.subtitle')).toBeTruthy();
      expect(screen.getByText('Collection')).toBeTruthy();
      expect(screen.getByText('Showroom')).toBeTruthy();

      expect(screen.getByTestId('carousel')).toBeTruthy();
      expect(screen.getAllByRole('img')).toHaveLength(
        DEFAULT_HERO_IMAGES.length
      );
    });

    it('handles button interactions', async () => {
      const user = userEvent.setup();
      const onCollectionClick = jest.fn();
      const onShowroomClick = jest.fn();

      render(<Hero />);

      const buttons = screen.getAllByTestId('button');
      const collectionButton = buttons[0];
      const showroomButton = buttons[1];

      collectionButton.onclick = onCollectionClick;
      showroomButton.onclick = onShowroomClick;

      await user.click(collectionButton);
      expect(onCollectionClick).toHaveBeenCalledTimes(1);

      await user.click(showroomButton);
      expect(onShowroomClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Edge Cases', () => {
    it('renders without children', () => {
      render(<Hero />);

      expect(screen.getByText('HERO.EYEBROW')).toBeTruthy();
      expect(screen.getByText('hero.title')).toBeTruthy();
    });

    it('handles multiple className props', () => {
      render(<Hero className="class1 class2" />);

      const heroContainer = screen.getByTestId('hero-container');
      expect(heroContainer.className).toContain('class1');
      expect(heroContainer.className).toContain('class2');
    });
  });
});
