import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header>Test content</Header>);
    expect(screen.getByText('Test content')).toBeDefined();
  });
});
