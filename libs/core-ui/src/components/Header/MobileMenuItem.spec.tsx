import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from '@fs/intl';
import MobileMenuItem from './MobileMenuItem';

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

describe('MobileMenuItem', () => {
  const mockProps = {
    label: 'Test Menu',
    href: '/test',
    children: [
      { label: 'Sub Item 1', href: '/sub1' },
      { label: 'Sub Item 2', href: '/sub2' },
    ],
  };

  it('renders menu item with label', () => {
    renderWithIntl(<MobileMenuItem {...mockProps} />);
    expect(screen.getByText('Test Menu')).toBeTruthy();
  });

  it('toggles submenu when clicked', () => {
    renderWithIntl(<MobileMenuItem {...mockProps} />);

    const menuItem = screen.getByText('Test Menu');

    expect(screen.queryByText('Sub Item 1')).not.toBeTruthy();

    fireEvent.click(menuItem);
    expect(screen.getByText('Sub Item 1')).toBeTruthy();
    expect(screen.getByText('Sub Item 2')).toBeTruthy();

    fireEvent.click(menuItem);
    expect(screen.queryByText('Sub Item 1')).not.toBeTruthy();
  });

  it('renders submenu items correctly', () => {
    renderWithIntl(<MobileMenuItem {...mockProps} />);

    const menuItem = screen.getByText('Test Menu');
    fireEvent.click(menuItem);

    expect(screen.getByText('Sub Item 1')).toBeTruthy();
    expect(screen.getByText('Sub Item 2')).toBeTruthy();
  });

  it('handles menu item without children', () => {
    renderWithIntl(<MobileMenuItem label="Simple Menu" href="/simple" />);

    expect(screen.getByText('Simple Menu')).toBeTruthy();
    expect(screen.queryByRole('button')).not.toBeTruthy();
  });

  it('shows chevron down icon when closed', () => {
    renderWithIntl(<MobileMenuItem {...mockProps} />);

    const chevronDownIcon =
      screen.getByTestId('chevron-down-icon') ||
      screen.getByText('Test Menu').nextElementSibling;
    expect(chevronDownIcon).toBeTruthy();
  });

  it('applies correct styling classes', () => {
    renderWithIntl(<MobileMenuItem {...mockProps} />);

    const menuItem = screen.getByText('Test Menu').closest('div');
    expect(menuItem?.className).toContain(
      'flex justify-between items-center px-4 py-4 hover:bg-extras-lighterForestGreen active:bg-extras-lightForestGreen'
    );
  });

  it('handles empty children array', () => {
    renderWithIntl(
      <MobileMenuItem label="Empty Menu" href="/empty" children={[]} />
    );

    expect(screen.getByText('Empty Menu')).toBeTruthy();
    expect(screen.queryByTestId('plus-icon')).not.toBeTruthy();
    expect(screen.queryByTestId('minus-icon')).not.toBeTruthy();
  });
});
