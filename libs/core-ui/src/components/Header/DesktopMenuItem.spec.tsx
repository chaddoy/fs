import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@fs/intl';
import DesktopMenuItem from './DesktopMenuItem';
import { ComponentProps } from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuIndicator,
} from '@shadcn-ui';

jest.mock('@fs/intl', () => ({
  useIntl: () => ({
    t: (key: string) => key,
  }),
  IntlProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('@shadcn-ui', () => ({
  NavigationMenu: ({
    children,
    className,
  }: ComponentProps<typeof NavigationMenu>) => (
    <nav className={className} data-testid="navigation-menu">
      {children}
    </nav>
  ),
  NavigationMenuList: ({
    children,
    className,
  }: ComponentProps<typeof NavigationMenuList>) => (
    <ul className={className} data-testid="navigation-menu-list">
      {children}
    </ul>
  ),
  NavigationMenuItem: ({
    children,
    className,
  }: ComponentProps<typeof NavigationMenuItem>) => (
    <li className={className} data-testid="navigation-menu-item">
      {children}
    </li>
  ),
  NavigationMenuTrigger: ({
    children,
    className,
  }: ComponentProps<typeof NavigationMenuTrigger>) => (
    <button className={className} data-testid="navigation-menu-trigger">
      {children}
    </button>
  ),
  NavigationMenuContent: ({
    children,
    className,
  }: ComponentProps<typeof NavigationMenuContent>) => (
    <div className={className} data-testid="navigation-menu-content">
      {children}
    </div>
  ),
  NavigationMenuIndicator: ({
    className,
  }: ComponentProps<typeof NavigationMenuIndicator>) => (
    <div className={className} data-testid="navigation-menu-indicator" />
  ),
  navigationMenuTriggerStyle: ({ className }: { className?: string }) =>
    className || '',
}));

const renderWithIntl = (component: React.ReactElement) => {
  return render(<IntlProvider locale="en">{component}</IntlProvider>);
};

describe('DesktopMenuItem', () => {
  const mockProps = {
    label: 'Test Menu',
    href: '/test',
    children: [
      { label: 'Sub Item 1', href: '/sub1' },
      { label: 'Sub Item 2', href: '/sub2' },
    ],
  };

  it('renders menu item with label', () => {
    renderWithIntl(<DesktopMenuItem {...mockProps} />);
    expect(screen.getByText('Test Menu')).toBeTruthy();
  });

  it('renders submenu items correctly', () => {
    renderWithIntl(<DesktopMenuItem {...mockProps} />);

    expect(screen.getByText('Sub Item 1')).toBeTruthy();
    expect(screen.getByText('Sub Item 2')).toBeTruthy();
  });

  it('handles menu item without children', () => {
    renderWithIntl(<DesktopMenuItem label="Simple Menu" href="/simple" />);

    expect(screen.getByText('Simple Menu')).toBeTruthy();
    expect(screen.getByTestId('navigation-menu')).toBeTruthy();
  });

  it('renders navigation menu structure correctly', () => {
    renderWithIntl(<DesktopMenuItem {...mockProps} />);

    expect(screen.getByTestId('navigation-menu')).toBeTruthy();
    expect(screen.getByTestId('navigation-menu-list')).toBeTruthy();
    expect(screen.getByTestId('navigation-menu-item')).toBeTruthy();
    expect(screen.getByTestId('navigation-menu-trigger')).toBeTruthy();
    expect(screen.getByTestId('navigation-menu-content')).toBeTruthy();
  });

  it('applies correct styling classes', () => {
    renderWithIntl(<DesktopMenuItem {...mockProps} />);

    const navigationMenu = screen.getByTestId('navigation-menu');
    expect(navigationMenu.className).toContain('navigation-menu');
    expect(navigationMenu.className).toContain('h-full');
    expect(navigationMenu.className).toContain('flex');

    const trigger = screen.getByTestId('navigation-menu-trigger');
    expect(trigger.className).toContain('h-full');
    expect(trigger.className).toContain('flex');
    expect(trigger.className).toContain('items-center');
    expect(trigger.className).toContain('p-3');
    expect(trigger.className).toContain('cursor-pointer');
    expect(trigger.className).toContain('rounded-none');
  });

  it('renders submenu items in list structure', () => {
    renderWithIntl(<DesktopMenuItem {...mockProps} />);

    const submenuItems = screen.getAllByText(/Sub Item/);
    expect(submenuItems).toHaveLength(2);

    const lists = screen.getAllByRole('list');
    expect(lists.length).toBeGreaterThan(0);

    const navigationList = screen.getByTestId('navigation-menu-list');
    expect(navigationList).toBeTruthy();
  });

  it('handles empty children array', () => {
    renderWithIntl(
      <DesktopMenuItem label="Empty Menu" href="/empty" children={[]} />
    );

    expect(screen.getByText('Empty Menu')).toBeTruthy();
    expect(screen.getByTestId('navigation-menu')).toBeTruthy();
  });

  it('applies hover styles to submenu items', () => {
    renderWithIntl(<DesktopMenuItem {...mockProps} />);

    const submenuItems = screen.getAllByText(/Sub Item/);
    submenuItems.forEach((item) => {
      const listItem = item.closest('li');
      expect(listItem?.className).toContain('px-4');
      expect(listItem?.className).toContain('py-3');
      expect(listItem?.className).toContain('w-full');
      expect(listItem?.className).toContain(
        'hover:bg-accent.grey.subtlest-hovered'
      );
      expect(listItem?.className).toContain('cursor-pointer');
    });
  });
});
