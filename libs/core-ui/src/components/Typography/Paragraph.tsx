import clsx from 'clsx';
import { ParagraphProps } from './interface';

export function P({
  children,
  className,
  size = 'xs',
  bold = false,
  font = 'body',
  ...props
}: ParagraphProps) {
  return (
    <p
      className={clsx(
        'text-default',
        `font-${font}`,
        !bold && 'font-normal',
        bold && 'font-medium',
        size === '3xs' && 'text-xs',
        size === '2xs' && 'text-sm',
        size === 'xs' && 'text-base',
        size === 'sm' && 'text-lg',
        size === 'md' && 'text-xl',
        size === 'lg' && 'text-2xl',
        size === 'xl' && 'text-[32px]',
        size === '2xl' && 'text-4xl',
        size === '3xl' && 'text-5xl',
        size === '4xl' && 'text-6xl',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
