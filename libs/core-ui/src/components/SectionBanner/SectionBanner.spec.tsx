import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SectionBanner from './SectionBanner';
import { EyebrowProps, HeadingProps } from '../Typography';

// Mock Typography components
jest.mock('../Typography', () => ({
  Eyebrow: ({ children, ...props }: EyebrowProps) => (
    <div data-testid="eyebrow" {...props}>
      {children}
    </div>
  ),
  H1: ({ children, ...props }: HeadingProps) => <h1 {...props}>{children}</h1>,
}));

describe('SectionBanner', () => {
  const defaultProps = {
    image: 'test-image.jpg',
    eyebrow: 'Test Eyebrow',
    children: <div data-testid="banner-children">Banner Content</div>,
  };

  it('renders with default burntOrange-subtle background', () => {
    render(<SectionBanner {...defaultProps} />);
    const container = screen.getByTestId('section-banner').closest('div');
    expect(container).toHaveClass('bg-accent.burntOrange.subtle.hovered');
  });

  it('renders with forestGreen-subtlest background', () => {
    render(<SectionBanner {...defaultProps} color="forestGreen-subtlest" />);
    const container = screen.getByTestId('section-banner').closest('div');
    expect(container).toHaveClass('bg-accent.forestGreen.subtlest');
  });

  it('renders with forestGreen-subtle background', () => {
    render(<SectionBanner {...defaultProps} color="forestGreen-subtle" />);
    const container = screen.getByTestId('section-banner').closest('div');
    expect(container).toHaveClass('bg-accent.forestGreen.subtle.hovered');
  });

  it('renders the image as a background', () => {
    render(<SectionBanner {...defaultProps} />);
    const bgDiv = screen.getByRole('img');
    expect(bgDiv).toBeInTheDocument();
  });

  it('renders the eyebrow when provided', () => {
    render(<SectionBanner {...defaultProps} />);
    expect(screen.getByTestId('eyebrow')).toHaveTextContent('Test Eyebrow');
  });

  it('renders children', () => {
    render(<SectionBanner {...defaultProps} />);
    expect(screen.getByTestId('banner-children')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<SectionBanner {...defaultProps} className="custom-class" />);
    const container = screen.getByTestId('section-banner');
    expect(container).toHaveClass('custom-class');
  });

  it('spreads additional props to container', () => {
    render(<SectionBanner {...defaultProps} data-testid="section-banner" />);
    expect(screen.getByTestId('section-banner')).toBeInTheDocument();
  });
});

describe('SectionBanner.Content', () => {
  it('renders children and applies correct classes', () => {
    render(
      <SectionBanner.Content className="custom-content">
        <div data-testid="content-child">Content Child</div>
      </SectionBanner.Content>
    );
    const content = screen.getByTestId('section-banner-content');
    expect(content).toHaveClass(
      'flex',
      'flex-col',
      'gap-8',
      'px-14',
      'text-center',
      'sm:px-6',
      'md:px-9',
      'lg:px-20',
      'xl:px-40',
      'custom-content'
    );
  });
});

describe('SectionBanner.Header', () => {
  it('renders children in H1 and applies correct classes', () => {
    render(
      <SectionBanner.Header className="custom-header">
        Banner Header
      </SectionBanner.Header>
    );
    const header = screen.getByText('Banner Header');
    expect(header.tagName).toBe('H1');
    expect(header).toHaveClass(
      '!text-3xl',
      'md:!text-2xl',
      'lg:!text-3xl',
      'custom-header'
    );
  });
});
