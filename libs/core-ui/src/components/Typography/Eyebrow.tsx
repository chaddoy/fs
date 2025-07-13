import { EyebrowProps } from './interface';

import clsx from 'clsx';

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <h6
      className={clsx(
        'text-accent.amberGold font-eyebrow tracking-widest text-base uppercase',
        className
      )}
    >
      {children}
    </h6>
  );
}
