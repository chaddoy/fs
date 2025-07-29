import { ReactNode } from 'react';

export type SectionBannerColor =
  | 'forestGreen-subtlest'
  | 'forestGreen-subtle'
  | 'burntOrange-subtle';

export interface SectionBannerProps {
  className?: string;
  color?: SectionBannerColor;
  image: string;
  eyebrow?: ReactNode;
  children?: ReactNode;
}

export interface SectionBannerContentProps {
  className?: string;
  children: ReactNode;
}

export interface SectionBannerHeaderProps {
  className?: string;
  children: ReactNode;
}
