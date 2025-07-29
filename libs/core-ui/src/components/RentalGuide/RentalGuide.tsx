import { RentalGuideProps } from './types';
import clsx from 'clsx';
import { Fragment } from 'react';
import { useIntl } from '@fs/intl';
import { H3, P } from '../Typography';
import { Separator } from '@shadcn-ui';

const SEPARATOR_WIDTH = 'w-24';
const ICON_SIZE = 'w-10 h-10';
const ITEM_MAX_WIDTH = 'max-w-56';

export default function RentalGuide({
  children,
  className,
  items = [],
  ...props
}: RentalGuideProps) {
  const { t } = useIntl();
  return (
    <div
      className={clsx(
        'flex flex-row justify-evenly px-12 py-16 bg-extras-offWhite overflow-x-auto snap-x snap-mandatory',
        className
      )}
      role="list"
      aria-label="Rental guide steps"
      {...props}
    >
      {items.map((item, index) => (
        <Fragment key={item.title}>
          {index > 0 && (
            <div
              className={clsx(
                'shrink-0 grow-1 self-center flex justify-center items-center',
                SEPARATOR_WIDTH
              )}
            >
              <Separator
                orientation="vertical"
                className={clsx(
                  'h-14 bg-accent.grey.bolder self-center shrink-0'
                )}
              />
            </div>
          )}

          <div
            className={clsx(
              'flex flex-col justify-center items-center gap-4 shrink-0 snap-center',
              ITEM_MAX_WIDTH
            )}
            dir="ltr"
          >
            <div
              className={clsx(
                'flex items-center justify-center rounded-full bg-extras-heavyForestGreen text-inverse',
                ICON_SIZE
              )}
            >
              <item.icon data-testid={`icon-${index}`} />
            </div>

            <div className="flex flex-col gap-4">
              <H3 className="text-center">{t(item.title)}</H3>
              <P size="2xs" className="text-center">
                {t(item.description)}
              </P>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
