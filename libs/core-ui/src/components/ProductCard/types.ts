import { ReactNode } from 'react';

export interface ProductCardProps {
  className?: string;
  image: string;
  name: ReactNode;
  description: ReactNode;
  onClick?: () => void;
}
