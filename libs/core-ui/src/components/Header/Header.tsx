import { AnimatePresence, motion, Transition } from 'motion/react';
import { HeaderProps } from './interface';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function Header({
  className,
  color = 'forestGreen',
}: HeaderProps) {
  return (
    <div className="relative">
      <AnimatePresence>
        <motion.div
          key="mobile-header"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] } as Transition}
          className="block md:hidden"
        >
          <MobileHeader className={className} color={color} />
        </motion.div>

        <motion.div
          key="desktop-header"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] } as Transition}
          className="hidden md:block"
        >
          <DesktopHeader />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
