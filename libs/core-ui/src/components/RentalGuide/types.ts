import { LucideIcon } from 'lucide-react';

export interface RentalGuideProps {
  children?: React.ReactNode;
  className?: string;
  items: RentalGuideItem[];
}

export interface RentalGuideItem {
  icon: LucideIcon;
  title: string;
  description: string;
}
