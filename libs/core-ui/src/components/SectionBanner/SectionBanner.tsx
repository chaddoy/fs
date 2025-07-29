import {
  SectionBannerContentProps,
  SectionBannerHeaderProps,
  SectionBannerProps,
} from './types';
import clsx from 'clsx';
import { Eyebrow, H1 } from '../Typography';

export default function SectionBanner({
  className,
  color = 'burntOrange-subtle',
  image,
  eyebrow,
  children,
  ...props
}: SectionBannerProps) {
  const bg = {
    'forestGreen-subtlest': 'bg-accent.forestGreen.subtlest',
    'forestGreen-subtle': 'bg-accent.forestGreen.subtle.hovered',
    'burntOrange-subtle': 'bg-accent.burntOrange.subtle.hovered',
  };

  return (
    <div
      className={clsx(
        'p-2 pb-16 flex flex-col gap-14',
        'sm:flex-row sm:p-2 sm:gap-4',
        'md:p-4',
        'lg:p-4',
        bg[color],
        className
      )}
      {...props}
      data-testid="section-banner"
    >
      <div
        className="h-72 w-full bg-cover bg-center sm:order-1 sm:w-1/2 lg:h-[568px] border border-black"
        style={{
          backgroundImage: `url(${image})`,
        }}
        role="img"
      />

      <div className="flex flex-col gap-2 justify-center items-center sm:w-1/2">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

        {children}
      </div>
    </div>
  );
}

const Content = ({ className, children }: SectionBannerContentProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-8 px-14 text-center',
        'sm:px-6',
        'md:px-9',
        'lg:px-20',
        'xl:px-40',
        className
      )}
      data-testid="section-banner-content"
    >
      {children}
    </div>
  );
};

const Header = ({ className, children }: SectionBannerHeaderProps) => {
  return (
    <H1
      className={clsx('!text-3xl md:!text-2xl lg:!text-3xl', className)}
      data-testid="section-banner-header"
    >
      {children}
    </H1>
  );
};

SectionBanner.Content = Content;
SectionBanner.Header = Header;
