import { SectionHeaderProps } from './types';
import clsx from 'clsx';
import { Eyebrow, H1, P } from '../Typography';

export default function SectionHeader({
  className,
  eyebrow,
  title,
  description,
  addOn,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center gap-1 text-center w-full',
        'sm:items-start',
        className
      )}
      {...props}
      data-testid="section-header"
    >
      {eyebrow && (
        <Eyebrow
          className="tracking-widest text-center sm:text-left"
          data-testid="eyebrow"
        >
          {eyebrow}
        </Eyebrow>
      )}

      <div
        className={clsx(
          'flex flex-col items-center gap-4 text-center sm:items-start w-full',
          addOn && !description && 'gap-6'
        )}
        data-testid="section-header-content"
      >
        <div className="flex flex-col gap-6 justify-between sm:flex-row sm:w-full sm:items-center">
          <H1 data-testid="title">{title}</H1>
          <div className="hidden sm:block">{addOn}</div>
        </div>
        {description && <P data-testid="description">{description}</P>}

        {addOn && <div className="block sm:hidden">{addOn}</div>}
      </div>
    </div>
  );
}
