import { useIntl } from '@fs/intl';
import Text from '../Text';
import { Separator } from '@shadcn-ui';
import { CONFIG, MENU_ITEMS } from './constants';
import { HeaderProps } from './interface';
import DesktopMenuItem from './DesktopMenuItem';
import clsx from 'clsx';

const DesktopHeader = ({ onHomeClick }: HeaderProps) => {
  const { t } = useIntl();

  return (
    <div className="h-20 px-8 flex items-center gap-8 border-b-2 border-bold">
      <div
        className={clsx([
          'flex flex-col cursor-pointer w-max shrink-0',
          CONFIG.desktop.color.text,
          'hover:text-forestGreen-900 active:text-forestGreen-800 select-none',
        ])}
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
        <Text
          size="2xl"
          weight="semibold"
          className={clsx(CONFIG.fontFamily.brand)}
        >
          {t('brand').toUpperCase()}
        </Text>
        <Text
          size="base"
          weight="medium"
          className={clsx('tracking-widest', CONFIG.fontFamily.tagline)}
        >
          {t('tagline').toUpperCase()}
        </Text>
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
