import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  it('renders correctly with default props', () => {
    render(<Text>Test content</Text>);
    expect(screen.getByText('Test content')).toBeDefined();
  });

  it('renders with different element types', () => {
    const { rerender } = render(<Text as="h1">Heading</Text>);
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();

    rerender(<Text as="h2">Subheading</Text>);
    expect(screen.getByRole('heading', { level: 2 })).toBeDefined();

    rerender(<Text as="p">Paragraph</Text>);
    expect(screen.getByText('Paragraph')).toBeDefined();

    rerender(<Text as="span">Span text</Text>);
    expect(screen.getByText('Span text')).toBeDefined();
  });

  it('applies custom className', () => {
    render(<Text className="custom-class">Test</Text>);
    const element = screen.getByText('Test');
    expect(element.getAttribute('class')).toContain('custom-class');
  });

  it('applies text alignment classes', () => {
    const { rerender } = render(<Text align="center">Centered</Text>);
    expect(screen.getByText('Centered').getAttribute('class')).toContain(
      'text-center'
    );

    rerender(<Text align="right">Right aligned</Text>);
    expect(screen.getByText('Right aligned').getAttribute('class')).toContain(
      'text-right'
    );
  });

  it('applies font family classes', () => {
    const { rerender } = render(<Text font="serif">Serif text</Text>);
    expect(screen.getByText('Serif text').getAttribute('class')).toContain(
      'font-serif'
    );

    rerender(<Text font="mono">Monospace text</Text>);
    expect(screen.getByText('Monospace text').getAttribute('class')).toContain(
      'font-mono'
    );
  });

  it('applies text size classes', () => {
    const { rerender } = render(<Text size="lg">Large text</Text>);
    expect(screen.getByText('Large text').getAttribute('class')).toContain(
      'text-lg'
    );

    rerender(<Text size="xl">Extra large text</Text>);
    expect(
      screen.getByText('Extra large text').getAttribute('class')
    ).toContain('text-xl');
  });

  it('applies font weight classes', () => {
    const { rerender } = render(<Text weight="bold">Bold text</Text>);
    expect(screen.getByText('Bold text').getAttribute('class')).toContain(
      'font-bold'
    );

    rerender(<Text weight="semibold">Semibold text</Text>);
    expect(screen.getByText('Semibold text').getAttribute('class')).toContain(
      'font-semibold'
    );
  });

  it('applies text decoration classes', () => {
    const { rerender } = render(<Text italic>Italic text</Text>);
    expect(screen.getByText('Italic text').getAttribute('class')).toContain(
      'italic'
    );

    rerender(<Text underline>Underlined text</Text>);
    expect(screen.getByText('Underlined text').getAttribute('class')).toContain(
      'underline'
    );

    rerender(<Text strikethrough>Strikethrough text</Text>);
    expect(
      screen.getByText('Strikethrough text').getAttribute('class')
    ).toContain('line-through');
  });

  it('applies block display', () => {
    render(<Text block>Block text</Text>);
    expect(screen.getByText('Block text').getAttribute('class')).toContain(
      'block'
    );
  });

  it('applies truncate class', () => {
    render(<Text truncate>Truncated text</Text>);
    expect(screen.getByText('Truncated text').getAttribute('class')).toContain(
      'truncate'
    );
  });

  it('applies wrap class', () => {
    render(<Text wrap>Wrapped text</Text>);
    expect(screen.getByText('Wrapped text').getAttribute('class')).toContain(
      'whitespace-pre-wrap'
    );
  });

  it('passes through accessibility props', () => {
    render(
      <Text
        aria-label="Accessible label"
        aria-describedby="description"
        role="button"
      >
        Accessible text
      </Text>
    );

    const element = screen.getByText('Accessible text');
    expect(element.getAttribute('aria-label')).toBe('Accessible label');
    expect(element.getAttribute('aria-describedby')).toBe('description');
    expect(element.getAttribute('role')).toBe('button');
  });

  it('passes through additional HTML attributes', () => {
    render(
      <Text id="test-id" data-testid="test-element" title="Tooltip text">
        Test content
      </Text>
    );

    const element = screen.getByText('Test content');
    expect(element.getAttribute('id')).toBe('test-id');
    expect(element.getAttribute('data-testid')).toBe('test-element');
    expect(element.getAttribute('title')).toBe('Tooltip text');
  });

  it('renders with ref', () => {
    const ref = { current: null };
    render(<Text ref={ref}>Ref test</Text>);
    expect(ref.current).toBeDefined();
  });

  it('renders empty without children', () => {
    render(<Text />);
    const element = screen.getByRole('generic');
    expect(element).toBeDefined();
  });

  it('applies language and direction attributes', () => {
    render(
      <Text lang="es" dir="rtl">
        Spanish text
      </Text>
    );

    const element = screen.getByText('Spanish text');
    expect(element.getAttribute('lang')).toBe('es');
    expect(element.getAttribute('dir')).toBe('rtl');
  });

  it('handles tabIndex', () => {
    render(<Text tabIndex={0}>Focusable text</Text>);
    expect(screen.getByText('Focusable text').getAttribute('tabindex')).toBe(
      '0'
    );
  });
});
