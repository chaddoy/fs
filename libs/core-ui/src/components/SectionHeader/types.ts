import { ReactNode } from 'react';

export interface SectionHeaderProps {
  className?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  addOn?: ReactNode;
}
