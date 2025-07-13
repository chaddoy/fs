import { HeadingProps } from './interface';
import clsx from 'clsx';

export const DEFAULT_CLASSNAMES = 'font-medium font-headings text-default';

export function H1({ mobile, className, children, ...props }: HeadingProps) {
  return (
    <h1
      className={clsx(
        DEFAULT_CLASSNAMES,
        'text-2xl',
        `md:${mobile ? 'text-2xl' : 'text-[32px]'}`,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ mobile, className, children, ...props }: HeadingProps) {
  return (
    <h2
      className={clsx(
        DEFAULT_CLASSNAMES,
        'text-lg',
        `md:${mobile ? 'text-lg' : 'text-xl'}`,
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ mobile, className, children, ...props }: HeadingProps) {
  return (
    <h3 className={clsx(DEFAULT_CLASSNAMES, 'text-lg', className)} {...props}>
      {children}
    </h3>
  );
}

export function H4({ mobile, className, children, ...props }: HeadingProps) {
  return (
    <h4 className={clsx(DEFAULT_CLASSNAMES, 'text-base', className)} {...props}>
      {children}
    </h4>
  );
}

export function H5({ mobile, className, children, ...props }: HeadingProps) {
  return (
    <h5 className={clsx(DEFAULT_CLASSNAMES, 'text-sm', className)} {...props}>
      {children}
    </h5>
  );
}
