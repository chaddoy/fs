export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  color?: 'forestGreen' | 'jetBlack';
  onMenuClick?: () => void;
  onHomeClick?: () => void;
}

export interface MenuItemProps {
  label: string;
  href: string;
  children?: MenuItemProps[];
}
