import { AnimatePresence, motion, Transition } from 'motion/react';
import { CONFIG, MENU_ITEMS } from './constants';
import MobileMenuItem from './MobileMenuItem';
import { Separator } from '@shadcn-ui';
import Text from '../Text';
import { Menu } from 'lucide-react';
import clsx from 'clsx';
import { HeaderProps } from './interface';
import { useState } from 'react';
import { useIntl } from '@fs/intl';

const MobileHeader = ({
  className,
  color = 'forestGreen',
  onMenuClick,
  onHomeClick,
  ...props
}: HeaderProps) => {
  const { t } = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    onMenuClick?.();
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    onHomeClick?.();
  };

  return (
    <>
      <div
        className={clsx(
          'h-[58px] flex items-center gap-4 p-4',
          CONFIG.mobile.color.text,
          color === 'forestGreen' && CONFIG.mobile.color.background,
          color === 'jetBlack' && 'bg-jetBlack-900',
          className
        )}
        {...props}
      >
        <Menu
          className="cursor-pointer size-6"
          onClick={handleMenuClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleMenuClick();
            }
          }}
          aria-hidden={false}
          aria-expanded={false}
          aria-haspopup={false}
          aria-roledescription="Menu"
          aria-describedby="Menu"
          aria-labelledby="Menu"
          aria-label="Menu"
          aria-pressed={false}
          aria-disabled={false}
        />

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleHomeClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleHomeClick();
            }
          }}
          aria-label="Home"
          aria-pressed={false}
          aria-disabled={false}
          aria-expanded={false}
          aria-haspopup={false}
          aria-roledescription="Home"
          aria-describedby="Home"
          aria-labelledby="Home"
          aria-hidden={false}
        >
          <Text
            as="h2"
            size="xl"
            weight="medium"
            className={clsx(
              '!pb-0',
              CONFIG.fontFamily.brand,
              CONFIG.mobile.color.text
            )}
          >
            {t('brand').toUpperCase()}
          </Text>
          <Separator orientation="vertical" className="h-3" />
          <Text
            size="sm"
            weight="normal"
            className={clsx(
              '!pb-0',
              CONFIG.fontFamily.tagline,
              CONFIG.mobile.color.text,
              'tracking-widest'
            )}
          >
            {t('tagline').toUpperCase()}
          </Text>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={
              {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              } as Transition
            }
            className="absolute w-full h-[calc(100vh-58px)] bg-extras-lightestForestGreen"
          >
            {MENU_ITEMS.map((item, index) => (
              <motion.div
                key={`mobile-menu-item-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={
                  {
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  } as Transition
                }
              >
                <MobileMenuItem
                  label={item.label}
                  href={item.href}
                  children={item.children}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
