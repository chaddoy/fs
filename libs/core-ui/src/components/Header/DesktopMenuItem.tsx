import {
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
} from '@shadcn-ui';
import Text from '../Text';
import { MenuItemProps } from './interface';
import { useIntl } from '@fs/intl';

const DesktopMenuItem = ({ label, children = [] }: MenuItemProps) => {
  const { t } = useIntl();

  return (
    <NavigationMenu className="navigation-menu h-full flex">
      <NavigationMenuList className="h-full">
        <NavigationMenuItem className="h-full">
          <NavigationMenuTrigger
            className={navigationMenuTriggerStyle({
              className:
                'h-full flex items-center p-3 cursor-pointer rounded-none hover:border-b-2 border-forestGreen-600',
            })}
          >
            <Text size="sm" weight="normal">
              {t(label)}
            </Text>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="flex flex-col w-max">
              {children.map(({ label }, index) => (
                <li
                  key={`desktop-child-${index}`}
                  className="px-4 py-3 w-full hover:bg-accent.grey.subtlest-hovered cursor-pointer"
                >
                  <Text size="sm">{t(label)}</Text>
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
