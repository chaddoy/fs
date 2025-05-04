import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  pill?: boolean;
  outline?: boolean;
}

export default function Button({
  variant = 'primary',
  pill,
  outline,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded',
        pill && 'rounded-full',
        outline && variant === 'primary'
          ? 'text-blue-700 hover:text-white'
          : 'text-white',
        outline &&
          'bg-transparent hover:bg-blue-500 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
