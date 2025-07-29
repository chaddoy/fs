import {
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
} from '@shadcn-ui/components/ui/navigation-menu';
import { MenuItemProps } from './types';
import { useIntl } from '@fs/intl';
import clsx from 'clsx';
import styles from './DesktopMenuItem.module.css';
import { P } from '../Typography';

const DesktopMenuItem = ({ label, children = [] }: MenuItemProps) => {
  const { t } = useIntl();

  return (
    <NavigationMenu
      className={clsx(styles.root, 'h-full flex', [
        '[&_[data-state="open"]]:rounded-none',
        '[&_[data-state="open"]]:rounded-bl-[3px]',
        '[&_[data-state="open"]]:rounded-br-[3px]',
        '[&_[data-state="open"]]:mt-0',
        '[&_[data-state="open"]]:border-bold',
        '[&_[data-state="open"]]:border-t-extras-heavyForestGreen',
        '[&_button]:hover:bg-extras-lightestForestGreen',
        '[&_button[data-state="open"]]:rounded-none',
        '[&_button[data-state="open"]]:hover:bg-extras-lightestForestGreen',
        '[&_button[data-state="open"]]:border-b-2',
        '[&_button[data-state="open"]]:border-b-extras-heavyForestGreen',
      ])}
    >
      <NavigationMenuList className="h-full">
        <NavigationMenuItem
          className={clsx([
            'h-full',
            `[&_svg]:${children.length > 0 ? 'block' : 'hidden'}`,
          ])}
        >
          <NavigationMenuTrigger
            className={navigationMenuTriggerStyle({
              className: clsx([
                'h-full flex items-center p-3 cursor-pointer rounded-none hover:border-b-2 border-forestGreen-900 box-border',
                styles.trigger,
                children.length > 0 && styles.withChildren,
              ]),
            })}
          >
            <P size="2xs" font="navigation">
              {t(label)}
            </P>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="flex flex-col w-max rounded-none">
              {children.map(({ label }, index) => (
                <li
                  key={`desktop-child-${index}`}
                  className="px-6 py-4 pr-14 w-full hover:bg-extras-lightestForestGreen active:bg-extras-lighterForestGreen cursor-pointer"
                >
                  <P size="2xs" font="navigation">
                    {t(label)}
                  </P>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuIndicator className="hidden" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenuItem;
