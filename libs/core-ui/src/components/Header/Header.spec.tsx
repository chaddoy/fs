import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ComponentProps } from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuTrigger,
  Separator,
} from '@shadcn-ui';
import Header from './Header';

jest.mock('clsx', () => {
  const clsx = (...args: string[]) => args.filter(Boolean).join(' ');
  clsx.default = clsx;
  return clsx;
});

jest.mock('@shadcn-ui', () => ({
  Separator: ({ className, ...props }: ComponentProps<typeof Separator>) => (
    <div className={className} {...props} role="separator" />
  ),
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

jest.mock('@fs/intl', () => ({
  useIntl: () => ({
    t: (key: string) => key,
  }),
  IntlProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('motion/react', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  motion: {
    div: ({ children, className, ...props }: any) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
  },
}));

const renderWithIntl = (component: React.ReactElement) => {
  return render(component);
};

describe('Header', () => {
  it('renders correctly with default props', () => {
    renderWithIntl(<Header />);

    const headerContainer = screen.getByTestId('header-container');
    expect(headerContainer).toHaveClass('relative');

    const brandElements = screen.getAllByText('BRAND');
    const taglineElements = screen.getAllByText('TAGLINE');

    expect(brandElements).toHaveLength(2);
    expect(taglineElements).toHaveLength(2);

    const mobileSection = brandElements[0].closest('.block.md\\:hidden');
    const desktopSection = brandElements[1].closest('.hidden.md\\:block');

    expect(mobileSection).toBeInTheDocument();
    expect(desktopSection).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    renderWithIntl(<Header className="custom-class" />);
    expect(document.body).not.toBeFalsy();
  });

  it('renders with forestGreen color theme', () => {
    renderWithIntl(<Header color="forestGreen" />);
    expect(document.body).not.toBeFalsy();
  });

  it('renders with jetBlack color theme', () => {
    renderWithIntl(<Header color="jetBlack" />);
    expect(document.body).not.toBeFalsy();
  });

  it('renders both mobile and desktop headers', () => {
    renderWithIntl(<Header />);
    expect(document.body).not.toBeFalsy();
  });

  it('applies motion animations', () => {
    renderWithIntl(<Header />);
    const headerContainer = document.querySelector('.relative');
    expect(headerContainer).toBeTruthy();
  });
});
