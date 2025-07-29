import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import '@testing-library/jest-dom';
import RentalGuide from './RentalGuide';
import { Calendar } from 'lucide-react';
import { ParagraphProps, HeadingProps } from '../Typography/types';
import { Separator } from '@shadcn-ui';

// Mock the useIntl hook
jest.mock('@fs/intl', () => ({
  useIntl: () => ({
    t: (key: string) => key, // Return the key as-is for testing
  }),
}));

// Mock the Typography components
jest.mock('../Typography', () => ({
  H3: ({ children, ...props }: HeadingProps) => <h3 {...props}>{children}</h3>,
  P: ({ children, ...props }: ParagraphProps) => <p {...props}>{children}</p>,
}));

// Mock the Separator component
jest.mock('@shadcn-ui', () => ({
  Separator: ({ ...props }: ComponentProps<typeof Separator>) => (
    <div data-testid="separator" {...props} />
  ),
}));

// Sample test data
const mockItems = [
  {
    title: 'step.1.title',
    description: 'step.1.description',
    icon: Calendar,
  },
  {
    title: 'step.2.title',
    description: 'step.2.description',
    icon: Calendar,
  },
  {
    title: 'step.3.title',
    description: 'step.3.description',
    icon: Calendar,
  },
];

describe('RentalGuide', () => {
  it('renders the component with correct classes', () => {
    render(<RentalGuide items={mockItems} />);
    const container = screen.getByRole('list');
    expect(container).toHaveClass(
      'flex',
      'flex-row',
      'justify-evenly',
      'px-12',
      'py-16',
      'bg-extras-offWhite',
      'overflow-x-auto',
      'snap-x',
      'snap-mandatory'
    );
  });

  it('renders all items with correct content', () => {
    render(<RentalGuide items={mockItems} />);

    // Check that all titles are rendered
    expect(screen.getByText('step.1.title')).toBeInTheDocument();
    expect(screen.getByText('step.2.title')).toBeInTheDocument();
    expect(screen.getByText('step.3.title')).toBeInTheDocument();

    // Check that all descriptions are rendered
    expect(screen.getByText('step.1.description')).toBeInTheDocument();
    expect(screen.getByText('step.2.description')).toBeInTheDocument();
    expect(screen.getByText('step.3.description')).toBeInTheDocument();
  });

  it('renders icons for all items', () => {
    render(<RentalGuide items={mockItems} />);

    expect(screen.getByTestId('icon-0')).toBeInTheDocument();
    expect(screen.getByTestId('icon-1')).toBeInTheDocument();
    expect(screen.getByTestId('icon-2')).toBeInTheDocument();
  });

  it('renders separators between items (not before first item)', () => {
    render(<RentalGuide items={mockItems} />);

    const separators = screen.getAllByTestId('separator');
    // Should have 2 separators for 3 items (between items 1-2 and 2-3)
    expect(separators).toHaveLength(2);
  });

  it('applies custom className', () => {
    render(<RentalGuide items={mockItems} className="custom-class" />);
    const container = screen.getByRole('list');
    expect(container).toHaveClass('custom-class');
  });

  it('renders with empty items array', () => {
    render(<RentalGuide items={[]} />);
    const container = screen.getByRole('list');
    expect(container).toBeInTheDocument();
    expect(screen.queryByTestId('separator')).not.toBeInTheDocument();
  });

  it('renders single item without separator', () => {
    const singleItem = [mockItems[0]];
    render(<RentalGuide items={singleItem} />);

    expect(screen.getByText('step.1.title')).toBeInTheDocument();
    expect(screen.queryByTestId('separator')).not.toBeInTheDocument();
  });

  it('applies correct classes to item containers', () => {
    render(<RentalGuide items={mockItems} />);

    const itemContainers = screen.getAllByText(/step\.\d+\.title/);
    itemContainers.forEach((container) => {
      expect(container.closest('div')).toHaveClass('flex flex-col gap-4');
    });
  });

  it('applies correct classes to icon containers', () => {
    render(<RentalGuide items={mockItems} />);

    const iconContainers = screen.getAllByTestId(/icon-\d+/);
    iconContainers.forEach((icon) => {
      const container = icon.closest('div');
      expect(container).toHaveClass(
        'flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'bg-extras-heavyForestGreen',
        'text-inverse',
        'w-10',
        'h-10'
      );
    });
  });

  it('spreads additional props to container', () => {
    render(<RentalGuide items={mockItems} data-testid="rental-guide" />);
    expect(screen.getByTestId('rental-guide')).toBeInTheDocument();
  });
});
