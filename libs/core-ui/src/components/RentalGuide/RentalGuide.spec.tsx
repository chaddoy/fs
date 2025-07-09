import { render, screen } from '@testing-library/react';
import RentalGuide from './RentalGuide';

describe('RentalGuide', () => {
  it('renders correctly', () => {
    render(<RentalGuide>Test content</RentalGuide>);
    expect(screen.getByText('Test content')).toBeDefined();
  });
});
