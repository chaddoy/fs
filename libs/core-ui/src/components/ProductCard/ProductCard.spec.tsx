import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';
import { ParagraphProps } from '../Typography';

// Mock the Typography component
jest.mock('../Typography', () => ({
  P: ({ children, bold: _, ...props }: ParagraphProps) => (
    <p {...props}>{children}</p>
  ),
}));

describe('ProductCard', () => {
  const defaultProps = {
    image: 'test-image.jpg',
    name: 'Test Product',
    description: 'A great product',
    onClick: jest.fn(),
  };

  it('renders the image with correct src and alt', () => {
    render(<ProductCard {...defaultProps} />);
    const img = screen.getByTestId('product-card-image');
    expect(img).toHaveAttribute('src', defaultProps.image);
    expect(img).toHaveAttribute('alt', defaultProps.name);
  });

  it('renders the product name and description', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<ProductCard {...defaultProps} className="custom-class" />);
    const card = screen.getByRole('button');
    expect(card).toHaveClass('custom-class');
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<ProductCard {...defaultProps} onClick={onClick} />);
    const card = screen.getByRole('button');
    fireEvent.click(card);
    expect(onClick).toHaveBeenCalled();
  });

  it('calls onClick when Enter key is pressed', () => {
    const onClick = jest.fn();
    render(<ProductCard {...defaultProps} onClick={onClick} />);
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter', code: 'Enter' });
    expect(onClick).toHaveBeenCalled();
  });

  it('has correct accessibility attributes', () => {
    render(<ProductCard {...defaultProps} />);
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
    expect(card).toHaveAttribute(
      'aria-label',
      `View details for ${defaultProps.name}`
    );
  });

  it('renders empty alt if name is not a string', () => {
    render(<ProductCard {...defaultProps} name={null} />);
    const img = screen.getByTestId('product-card-image');
    expect(img).toHaveAttribute('alt', '');
  });
});
