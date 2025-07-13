import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from '@fs/intl';
import DesktopHeader from './DesktopHeader';

jest.mock('clsx', () => {
  const clsx = (...args: unknown[]) => args.filter(Boolean).join(' ');
  clsx.default = clsx;
  return clsx;
});

jest.mock('@shadcn-ui', () => ({
  Separator: ({
    className,
    ...props
  }: {
    className?: string;
    [key: string]: unknown;
  }) => <div className={className} {...props} role="separator" />,
  NavigationMenu: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <nav className={className} data-testid="navigation-menu">
      {children}
    </nav>
  ),
  NavigationMenuList: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <ul className={className} data-testid="navigation-menu-list">
      {children}
    </ul>
  ),
  NavigationMenuItem: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <li className={className} data-testid="navigation-menu-item">
      {children}
    </li>
  ),
  NavigationMenuTrigger: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <button className={className} data-testid="navigation-menu-trigger">
      {children}
    </button>
  ),
  NavigationMenuContent: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={className} data-testid="navigation-menu-content">
      {children}
    </div>
  ),
  NavigationMenuIndicator: ({ className }: { className?: string }) => (
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

const renderWithIntl = (component: React.ReactElement) => {
  return render(<IntlProvider locale="en">{component}</IntlProvider>);
};

describe('DesktopHeader', () => {
  it('renders correctly with default props', () => {
    renderWithIntl(<DesktopHeader />);
    expect(document.body).toBeTruthy();
  });

  it('calls onHomeClick when home section is clicked', () => {
    const mockOnHomeClick = jest.fn();
    renderWithIntl(<DesktopHeader onHomeClick={mockOnHomeClick} />);

    const homeButton = screen.getByRole('button', { name: /home/i });
    fireEvent.click(homeButton);

    expect(mockOnHomeClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard navigation for home button', () => {
    const mockOnHomeClick = jest.fn();
    renderWithIntl(<DesktopHeader onHomeClick={mockOnHomeClick} />);

    const homeButton = screen.getByRole('button', { name: /home/i });

    fireEvent.keyDown(homeButton, { key: 'Enter' });
    expect(mockOnHomeClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(homeButton, { key: ' ' });
    expect(mockOnHomeClick).toHaveBeenCalledTimes(2);
  });

  it('renders menu items correctly', () => {
    renderWithIntl(<DesktopHeader />);

    expect(screen.getByText('header.menu.1')).toBeTruthy();
    expect(screen.getByText('header.menu.2')).toBeTruthy();
    expect(screen.getByText('header.menu.3')).toBeTruthy();
    expect(screen.getByText('header.menu.4')).toBeTruthy();
  });

  it('applies correct accessibility attributes', () => {
    renderWithIntl(<DesktopHeader />);

    const homeButton = screen.getByRole('button', { name: /home/i });
    expect(homeButton.getAttribute('aria-label')).toBe('Home');
  });

  it('renders with correct styling classes', () => {
    renderWithIntl(<DesktopHeader />);

    const header = document.querySelector('.h-20.px-8.flex.items-center.gap-8');
    expect(header).toBeTruthy();
  });

  it('renders separator between brand and menu', () => {
    renderWithIntl(<DesktopHeader />);

    const separator = screen.getByRole('separator');
    expect(separator).toBeTruthy();
  });
});
