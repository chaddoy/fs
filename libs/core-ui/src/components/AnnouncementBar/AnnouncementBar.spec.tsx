import { render, screen } from '@testing-library/react';
import AnnouncementBar from './AnnouncementBar';

describe('AnnouncementBar', () => {
  it('renders correctly with default props', () => {
    render(<AnnouncementBar>Test content</AnnouncementBar>);
    expect(screen.getByText('Test content')).toBeDefined();
  });

  it('renders with custom className', () => {
    render(<AnnouncementBar className="custom-class">Test</AnnouncementBar>);
    const container = document.querySelector('.custom-class');
    expect(container).toBeDefined();
  });

  it('applies default styling classes', () => {
    render(<AnnouncementBar>Test</AnnouncementBar>);
    const container = document.querySelector('[class*="bg-discovery"]');
    const classList = container?.getAttribute('class') || '';

    expect(classList).toContain('bg-discovery.bold');
    expect(classList).toContain('text-inverse');
    expect(classList).toContain('h-10');
    expect(classList).toContain('flex');
    expect(classList).toContain('justify-center');
    expect(classList).toContain('items-center');
  });

  it('renders Text component with correct props', () => {
    render(<AnnouncementBar>Test content</AnnouncementBar>);
    const textElement = screen.getByText('Test content');
    expect(textElement).toBeDefined();

    const textParent = textElement.closest('p');
    const classList = textParent?.getAttribute('class') || '';

    expect(classList).toContain(
      'text-default font-body font-semibold text-sm text-inverse truncate'
    );
  });

  it('passes through accessibility props', () => {
    render(
      <AnnouncementBar aria-label="Announcement" aria-describedby="description">
        Test content
      </AnnouncementBar>
    );

    const container = document.querySelector('[class*="bg-discovery"]');
    expect(container?.getAttribute('aria-label')).toBe('Announcement');
    expect(container?.getAttribute('aria-describedby')).toBe('description');
  });

  it('passes through additional HTML attributes', () => {
    render(
      <AnnouncementBar
        id="test-id"
        data-testid="announcement-bar"
        title="Test announcement"
      >
        Test content
      </AnnouncementBar>
    );

    const container = document.querySelector('[class*="bg-discovery"]');
    expect(container?.getAttribute('id')).toBe('test-id');
    expect(container?.getAttribute('data-testid')).toBe('announcement-bar');
    expect(container?.getAttribute('title')).toBe('Test announcement');
  });

  it('renders empty without children', () => {
    render(<AnnouncementBar />);
    const container = document.querySelector('[class*="bg-discovery"]');
    expect(container).toBeDefined();
  });

  it('renders with complex children', () => {
    render(
      <AnnouncementBar>
        <span>Complex</span> content with <strong>markup</strong>
      </AnnouncementBar>
    );

    expect(screen.getByText('Complex')).toBeDefined();
    expect(screen.getByText('content with')).toBeDefined();
    expect(screen.getByText('markup')).toBeDefined();
  });

  it('combines custom className with default classes', () => {
    render(<AnnouncementBar className="my-custom-class">Test</AnnouncementBar>);
    const container = document.querySelector('[class*="bg-discovery"]');
    const classList = container?.getAttribute('class') || '';

    expect(classList).toContain('bg-discovery.bold');
    expect(classList).toContain('text-inverse');
    expect(classList).toContain('h-10');
    expect(classList).toContain('my-custom-class');
  });

  it('renders with long content', () => {
    const longContent =
      'This is a very long announcement message that should still be displayed properly within the announcement bar component';
    render(<AnnouncementBar>{longContent}</AnnouncementBar>);
    expect(screen.getByText(longContent)).toBeDefined();
  });

  it('renders with special characters', () => {
    render(
      <AnnouncementBar>
        Special chars: &lt; &gt; &amp; &quot; &#39;
      </AnnouncementBar>
    );
    expect(screen.getByText('Special chars: < > & " \'')).toBeDefined();
  });

  it('renders with multiple instances', () => {
    render(
      <div>
        <AnnouncementBar>First announcement</AnnouncementBar>
        <AnnouncementBar>Second announcement</AnnouncementBar>
      </div>
    );

    expect(screen.getByText('First announcement')).toBeDefined();
    expect(screen.getByText('Second announcement')).toBeDefined();

    const containers = document.querySelectorAll('[class*="bg-discovery"]');
    expect(containers).toHaveLength(2);
  });
});
