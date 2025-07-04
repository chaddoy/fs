import { AnimatePresence, motion } from 'motion/react';
import { HeaderProps } from './interface';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const HEADER_ANIMATION = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
} as const;

export default function Header({
  className,
  color = 'forestGreen',
}: HeaderProps) {
  return (
    <div data-testid="header-container" className="relative">
      <AnimatePresence>
        <motion.div
          key="mobile-header"
          {...HEADER_ANIMATION}
          className="block md:hidden"
        >
          <MobileHeader className={className} color={color} />
        </motion.div>

        <motion.div
          key="desktop-header"
          {...HEADER_ANIMATION}
          className="hidden md:block"
        >
          <DesktopHeader />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
