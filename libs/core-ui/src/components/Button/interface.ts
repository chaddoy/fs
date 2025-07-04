import { ButtonProps as ShadcnButtonProps } from '@shadcn-ui';

export type IconButtonVariant =
  | 'icon'
  | 'icon-secondary'
  | 'icon-outline'
  | 'icon-ghost'
  | 'icon-link'
  | 'icon-danger'
  | 'icon-warning'
  | 'icon-discovery'
  | 'icon-information'
  | 'icon-success';

export type ButtonVariant =
  | 'default'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'danger'
  | 'warning'
  | 'discovery'
  | 'information'
  | 'success';

export interface ButtonProps extends Omit<ShadcnButtonProps, 'variant'> {
  variant?: ButtonVariant | IconButtonVariant;
  loading?: boolean;
  loadingText?: string;
}
