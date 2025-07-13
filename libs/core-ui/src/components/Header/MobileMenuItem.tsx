import { ChevronDown } from 'lucide-react';
import Text from '../Text';
import { MenuItemProps } from './interface';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useIntl } from '@fs/intl';
import { CONFIG } from './constants';

const MobileMenuItem = ({ label, href, children = [] }: MenuItemProps) => {
  const { t } = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center border-b border-accent.grey cursor-pointer">
      <div
        className="flex justify-between items-center px-4 py-4 hover:bg-extras-lighterForestGreen active:bg-extras-lightForestGreen"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text size="base" weight="medium" className={CONFIG.fontFamily.menu}>
          {t(label)}
        </Text>

        {children.length > 0 && (
          <motion.div animate={{ rotate: isOpen ? -180 : 0 }}>
            <ChevronDown
              className="size-5 text-default"
              data-testid="chevron-down-icon"
            />
          </motion.div>
        )}
      </div>

      {children.length > 0 && (
        <AnimatePresence>
          {isOpen &&
            children.map((child, index) => (
              <motion.div
                key={`mobile-child-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center px-8 py-3 hover:bg-extras-lightestForestGreen active:bg-extras-lighterForestGreen"
              >
                <Text
                  size="sm"
                  weight="medium"
                  className={CONFIG.fontFamily.menu}
                >
                  {t(child.label)}
                </Text>
              </motion.div>
            ))}
        </AnimatePresence>
      )}
    </div>
  );
};

export default MobileMenuItem;
