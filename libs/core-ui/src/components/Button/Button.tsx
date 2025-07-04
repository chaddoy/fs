import { Loader2 } from 'lucide-react';
import { Button as ShadcnButton } from '@shadcn-ui';
import clsx from 'clsx';
import { ButtonProps } from './interface';
import { isShadcnVariant } from './utils';
import { ALL_VARIANT_STYLES } from './constants';

export default function Button({
  variant = 'default',
  children,
  loading,
  loadingText = 'Please wait',
  className,
  ...props
}: ButtonProps) {
  const shadcnVariant = isShadcnVariant(variant) ? variant : 'default';
  const variantStyles =
    ALL_VARIANT_STYLES[variant as keyof typeof ALL_VARIANT_STYLES] ||
    ALL_VARIANT_STYLES.default;

  return (
    <ShadcnButton
      {...props}
      variant={shadcnVariant}
      className={clsx('font-inter', variantStyles, className)}
      disabled={loading || props.disabled}
    >
      {loading && <Loader2 className="animate-spin" />}
      {loading ? loadingText : children}
    </ShadcnButton>
  );
}
