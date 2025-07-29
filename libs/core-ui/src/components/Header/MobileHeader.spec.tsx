import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from '@fs/intl';
import MobileHeader from './MobileHeader';

// Mock clsx (which cn uses internally)
jest.mock('clsx', () => {
  const clsx = (...args: unknown[]) => args.filter(Boolean).join(' ');
  clsx.default = clsx;
  return clsx;
});

// Mock shadcn-ui components
jest.mock('@shadcn-ui', () => ({
  Separator: ({
    className,
    ...props
  }: {
    className?: string;
    [key: string]: unknown;
  }) => <div className={className} {...props} role="separator" />,
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
  return render(<IntlProvider locale="en">{component}</IntlProvider>);
};

describe('MobileHeader', () => {
  it('renders correctly with default props', () => {
    renderWithIntl(<MobileHeader />);
    // Just verify the component renders
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it('renders with forestGreen color theme', () => {
    renderWithIntl(<MobileHeader color="forestGreen" />);
    // Check for the color class directly
    const header = document.querySelector('.bg-extras-heavyForestGreen');
    expect(header).toBeTruthy();
  });

  it('renders with jetBlack color theme', () => {
    renderWithIntl(<MobileHeader color="jetBlack" />);
    // Check for the color class directly
    const header = document.querySelector('.bg-jetBlack-900');
    expect(header).toBeTruthy();
  });

  it('calls onMenuClick when menu button is clicked', () => {
    const mockOnMenuClick = jest.fn();
    renderWithIntl(<MobileHeader onMenuClick={mockOnMenuClick} />);

    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);

    expect(mockOnMenuClick).toHaveBeenCalledTimes(1);
  });

  it('calls onHomeClick when home section is clicked', () => {
    const mockOnHomeClick = jest.fn();
    renderWithIntl(<MobileHeader onHomeClick={mockOnHomeClick} />);

    const homeButton = screen.getByRole('button', { name: /home/i });
    fireEvent.click(homeButton);

    expect(mockOnHomeClick).toHaveBeenCalledTimes(1);
  });

  it('toggles mobile menu when menu button is clicked', () => {
    renderWithIntl(<MobileHeader />);

    const menuButton = screen.getByRole('button', { name: /menu/i });

    expect(screen.queryByText('header.menu.0.title')).not.toBeTruthy();

    fireEvent.click(menuButton);
    expect(screen.getByText('header.menu.1.title')).toBeTruthy();

    fireEvent.click(menuButton);
    expect(screen.queryByText('header.menu.2.title')).not.toBeTruthy();
  });

  it('closes mobile menu when home is clicked', () => {
    renderWithIntl(<MobileHeader />);

    const menuButton = screen.getByRole('button', { name: /menu/i });
    const homeButton = screen.getByRole('button', { name: /home/i });

    fireEvent.click(menuButton);
    expect(screen.getByText('header.menu.0.title')).toBeTruthy();

    fireEvent.click(homeButton);
    expect(screen.queryByText('header.menu.0.title')).not.toBeTruthy();
  });

  it('handles keyboard navigation for menu button', () => {
    const mockOnMenuClick = jest.fn();
    renderWithIntl(<MobileHeader onMenuClick={mockOnMenuClick} />);

    const menuButton = screen.getByRole('button', { name: /menu/i });

    fireEvent.keyDown(menuButton, { key: 'Enter' });
    expect(mockOnMenuClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(menuButton, { key: ' ' });
    expect(mockOnMenuClick).toHaveBeenCalledTimes(2);
  });

  it('handles keyboard navigation for home button', () => {
    const mockOnHomeClick = jest.fn();
    renderWithIntl(<MobileHeader onHomeClick={mockOnHomeClick} />);

    const homeButton = screen.getByRole('button', { name: /home/i });

    fireEvent.keyDown(homeButton, { key: 'Enter' });
    expect(mockOnHomeClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(homeButton, { key: ' ' });
    expect(mockOnHomeClick).toHaveBeenCalledTimes(2);
  });

  it('renders menu items correctly in mobile view', () => {
    renderWithIntl(<MobileHeader />);

    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);

    expect(screen.getByText('header.menu.0.title')).toBeTruthy();
    expect(screen.getByText('header.menu.1.title')).toBeTruthy();
    expect(screen.getByText('header.menu.2.title')).toBeTruthy();
    expect(screen.getByText('header.menu.3.title')).toBeTruthy();
  });

  it('applies correct accessibility attributes', () => {
    renderWithIntl(<MobileHeader />);

    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton.getAttribute('aria-label')).toBe('Menu');

    const homeButton = screen.getByRole('button', { name: /home/i });
    expect(homeButton.getAttribute('aria-label')).toBe('Home');
  });
});
