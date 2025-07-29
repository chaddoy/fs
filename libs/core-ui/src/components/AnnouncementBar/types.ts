import { HTMLAttributes } from 'react';

export interface AnnouncementBarProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}
