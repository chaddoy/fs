import { useIntl } from '@fs/intl';
import { Separator } from '@shadcn-ui';
import { CONFIG, MENU_ITEMS } from './constants';
import { HeaderProps } from './interface';
import DesktopMenuItem from './DesktopMenuItem';
import clsx from 'clsx';
import { H1, H4 } from '../Typography';

const DesktopHeader = ({ onHomeClick }: HeaderProps) => {
  const { t } = useIntl();

  return (
    <div className="h-20 px-8 flex items-center gap-8 border-b-2 border-bold">
      <div
        className="flex flex-col cursor-pointer w-max shrink-0 select-none group"
        onClick={onHomeClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onHomeClick?.();
          }
        }}
        aria-label="Home"
        aria-pressed={false}
        aria-expanded={false}
        aria-haspopup={false}
        aria-roledescription="Home"
        aria-describedby="Home"
        aria-labelledby="Home"
        aria-hidden={false}
      >
        <H1
          mobile
          className={clsx(
            'header-brand font-semibold',
            CONFIG.fontFamily.brand,
            CONFIG.desktop.color.text,
            'group-hover:text-forestGreen-900 group-active:text-forestGreen-800'
          )}
        >
          {t('brand').toUpperCase()}
        </H1>
        <H4
          className={clsx(
            'font-medium',
            'tracking-widest',
            CONFIG.fontFamily.tagline,
            CONFIG.desktop.color.text,
            'group-hover:text-forestGreen-900 group-active:text-forestGreen-800'
          )}
        >
          {t('tagline').toUpperCase()}
        </H4>
      </div>

      <div className="flex items-center gap-4 h-full">
        <Separator orientation="vertical" className="h-6 bg-brand.boldest" />

        <div className="flex items-center h-full gap-0">
          {MENU_ITEMS.map((item, index) => (
            <DesktopMenuItem key={`desktop-menu-item-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
