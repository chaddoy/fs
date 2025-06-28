import { TextProps } from './interface';
import clsx from 'clsx';
import { getElementClassNames } from './utils';

export default function Text({
  as,
  align = 'left',
  block,
  font,
  italic,
  size,
  strikethrough,
  truncate,
  underline,
  weight,
  wrap,
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}: TextProps) {
  const Component = as || 'p';
  const defaultClassNames = getElementClassNames(as);

  return (
    <Component
      ref={ref}
      className={clsx(
        defaultClassNames,
        `!text-${align}`,
        block && 'block',
        font && `font-${font}`,
        italic && 'italic',
        size && `text-${size}`,
        strikethrough && 'line-through',
        truncate && 'truncate',
        underline && 'underline',
        weight && `font-${weight}`,
        wrap && 'whitespace-pre-wrap',
        className
      )}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {children}
    </Component>
  );
}
