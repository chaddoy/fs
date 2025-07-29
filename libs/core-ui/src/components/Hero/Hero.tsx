import clsx from 'clsx';
import { HeroProps } from './types';
import HeroContent from './HeroContent';
import HeroCarousel from './HeroCarousel';

export default function Hero({ className, ...props }: HeroProps) {
  return (
    <div
      data-testid="hero-container"
      className={clsx('flex flex-col md:flex-row-reverse', className)}
      {...props}
    >
      <HeroCarousel />
      <HeroContent />
    </div>
  );
}
