import { ButtonProps as ShadcnButtonProps } from '@shadcn-ui';

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
  | 'success'
  | 'icon';

export type IconButtonVariant = `icon-${Exclude<
  ButtonVariant,
  'default' | 'icon'
>}`;

export interface ButtonProps extends Omit<ShadcnButtonProps, 'variant'> {
  variant?: ButtonVariant | IconButtonVariant;
  loading?: boolean;
  loadingText?: string;
}
