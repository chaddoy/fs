import { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroContent from './HeroContent';
import { Button } from '@shadcn-ui';

jest.mock('@fs/intl', () => ({
  useIntl: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'hero.eyebrow': 'Eyebrow Text',
        'hero.title': 'Main Title\nSubtitle Line',
        'hero.subtitle': 'This is the subtitle.',
        'hero.button.0': 'Collection',
        'hero.button.1': 'Showroom',
      };
      return translations[key] || key;
    },
  }),
}));

jest.mock('../Button', () => ({
  __esModule: true,
  default: (props: ComponentProps<typeof Button>) => <button {...props} />,
}));

describe('HeroContent', () => {
  it('renders the main container', () => {
    render(<HeroContent />);
    expect(screen.getByText('Eyebrow Text')).toBeInTheDocument();
  });

  it('renders the title split into lines', () => {
    render(<HeroContent />);
    expect(screen.getByText('Main Title')).toBeInTheDocument();
    expect(screen.getByText('Subtitle Line')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<HeroContent />);
    expect(screen.getByText('This is the subtitle.')).toBeInTheDocument();
  });

  it('renders both buttons with correct text', () => {
    render(<HeroContent />);
    expect(
      screen.getByRole('button', { name: 'Collection' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Showroom' })
    ).toBeInTheDocument();
  });
});
