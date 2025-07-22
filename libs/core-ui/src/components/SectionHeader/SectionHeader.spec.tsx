import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SectionHeader from './SectionHeader';
import { EyebrowProps, HeadingProps, ParagraphProps } from '../Typography';

// Mock the Typography components
jest.mock('../Typography', () => ({
  Eyebrow: ({ children, ...props }: EyebrowProps) => (
    <div data-testid="eyebrow" {...props}>
      {children}
    </div>
  ),
  H1: ({ children, ...props }: HeadingProps) => <h1 {...props}>{children}</h1>,
  P: ({ children, ...props }: ParagraphProps) => <p {...props}>{children}</p>,
}));

describe('SectionHeader', () => {
  const defaultProps = {
    title: 'Section Title',
  };

  it('renders the component with correct classes', () => {
    render(<SectionHeader {...defaultProps} />);
    const container = screen.getByTestId('section-header');
    expect(container).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'gap-1',
      'text-center',
      'sm:items-start'
    );
  });

  it('renders title correctly', () => {
    render(<SectionHeader {...defaultProps} />);
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });

  it('renders eyebrow when provided', () => {
    render(<SectionHeader {...defaultProps} eyebrow="Eyebrow Text" />);
    expect(screen.getByText('Eyebrow Text')).toBeInTheDocument();
    expect(screen.getByTestId('eyebrow')).toBeInTheDocument();
  });

  it('does not render eyebrow when not provided', () => {
    render(<SectionHeader {...defaultProps} />);
    expect(screen.queryByTestId('eyebrow')).not.toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <SectionHeader {...defaultProps} description="Section description" />
    );
    expect(screen.getByText('Section description')).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    render(<SectionHeader {...defaultProps} />);
    expect(screen.queryByText('Section description')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<SectionHeader {...defaultProps} className="custom-class" />);
    const container = screen.getByTestId('section-header');
    expect(container).toHaveClass('custom-class');
  });

  it('renders all elements when all props are provided', () => {
    render(
      <SectionHeader
        eyebrow="Eyebrow Text"
        title="Section Title"
        description="Section description"
      />
    );

    expect(screen.getByText('Eyebrow Text')).toBeInTheDocument();
    expect(screen.getByText('Section Title')).toBeInTheDocument();
    expect(screen.getByText('Section description')).toBeInTheDocument();
  });

  it('applies correct classes to eyebrow', () => {
    render(<SectionHeader {...defaultProps} eyebrow="Eyebrow Text" />);
    const eyebrow = screen.getByTestId('eyebrow');
    expect(eyebrow).toHaveClass(
      'tracking-widest',
      'text-center',
      'sm:text-left'
    );
  });

  it('applies correct classes to title container', () => {
    render(<SectionHeader {...defaultProps} />);
    const titleContainer = screen.getByTestId('section-header-content');
    expect(titleContainer).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'gap-4',
      'text-center',
      'sm:items-start'
    );
  });

  it('spreads additional props to container', () => {
    render(<SectionHeader {...defaultProps} data-testid="section-header" />);
    expect(screen.getByTestId('section-header')).toBeInTheDocument();
  });

  it('does not render eyebrow when empty', () => {
    render(<SectionHeader eyebrow="" title="" description="" />);

    const container = screen.getByTestId('title').closest('h6');
    expect(container).not.toBeInTheDocument();
  });

  it('does not render description when empty', () => {
    render(<SectionHeader title="" description="" />);

    const container = screen.getByTestId('title').closest('p');
    expect(container).not.toBeInTheDocument();
  });
});
