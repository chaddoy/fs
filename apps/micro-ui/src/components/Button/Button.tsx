import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'simple' | 'pill';
}

export default function Button({
  variant = 'simple',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        variant === 'pill' && 'rounded-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
