import { Loader2 } from 'lucide-react';
import { Button as ShadcnButton } from '@shadcn-ui';
import clsx from 'clsx';
import { ButtonProps } from './interface';
import { isShadcnVariant } from './utils';

export default function Button({
  variant = 'default',
  children,
  loading,
  loadingText = 'Please wait',
  className,
  ...props
}: ButtonProps) {
  const shadcnVariant = isShadcnVariant(variant) ? variant : 'default';

  return (
    <ShadcnButton
      {...props}
      variant={shadcnVariant}
      className={clsx(
        className,
        (variant.includes('default') || variant === 'icon') && [
          'bg-brand.bold',
          'hover:bg-brand.bold.hovered',
          'active:bg-brand.bold.pressed',
          'focus-visible:ring-forestGreen-400 focus-visible:ring-2',
        ],
        variant.includes('secondary') && [
          'bg-accent.forestGreen.subtlest text-default',
          'hover:bg-accent.forestGreen.subtlest.hovered',
          'active:bg-accent.forestGreen.subtlest.pressed',
          'focus-visible:ring-forestGreen-400 focus-visible:ring-2',
        ],
        variant.includes('outline') && [
          'bg-transparent border border-brand text-brand',
          'hover:bg-accent.forestGreen.subtlest',
          'active:bg-accent.forestGreen.subtlest.hovered',
          'focus-visible:ring-forestGreen-400 focus-visible:ring-2',
        ],
        variant.includes('ghost') && [
          'bg-transparent border-0 text-default shadow-none',
          'hover:bg-accent.forestGreen.subtlest',
          'active:bg-accent.forestGreen.subtlest.hovered',
          'focus-visible:ring-forestGreen-400 focus-visible:ring-2',
        ],
        variant.includes('link') && [
          'bg-transparent border-0 text-default shadow-none rounded-none border-brand',
          'hover:bg-transparent',
          'focus-visible:underline focus-visible:ring-0',
        ],
        variant.includes('danger') && [
          'bg-danger.bold',
          'hover:bg-danger.bold.hovered',
          'active:bg-danger.bold.pressed',
          'focus-visible:ring-crimsonRed-500 focus-visible:ring-2',
        ],
        variant.includes('warning') && [
          'bg-warning.bold text-default',
          'hover:bg-warning.bold.hovered',
          'active:bg-warning.bold.pressed',
          'focus-visible:ring-orangePeel-500 focus-visible:ring-2',
        ],
        variant.includes('discovery') && [
          'bg-discovery.bold text-inverse',
          'hover:bg-discovery.bold.hovered',
          'active:bg-discovery.bold.pressed',
          'focus-visible:ring-royalPurple-300 focus-visible:ring-2',
        ],
        variant.includes('information') && [
          'bg-information.bold text-inverse',
          'hover:bg-information.bold.hovered',
          'active:bg-information.bold.pressed',
          'focus-visible:ring-royalPurple-300 focus-visible:ring-2',
        ],
        variant.includes('success') && [
          'bg-success.bold text-inverse',
          'hover:bg-success.bold.hovered',
          'active:bg-success.bold.pressed',
          'focus-visible:ring-mossGreen-300 focus-visible:ring-2',
        ]
      )}
      disabled={loading || props.disabled}
    >
      {loading && <Loader2 className="animate-spin" />}
      {loading ? loadingText : children}
    </ShadcnButton>
  );
}
