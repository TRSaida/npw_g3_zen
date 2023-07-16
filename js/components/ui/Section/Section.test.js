import { Section } from './Section.js';

describe('Section function', () => {
  test('returns empty string if no data is provided', () => {
    const result = Section(null, 'test-class');
    expect(result).toBe('');
  });

  test('returns section HTML with title, texts, and image', () => {
    const data = {
      title: { priority: 1, content: 'Test Title' },
      texts: ['Test Text 1', 'Test Text 2'],
      image: { source: 'test.jpg', description: 'Test Image' },
    };

    const result = Section(data, 'test-class');
    expect(result).toBe(`
      <section class="test-class">
        <h1 priority="1">Test Title</h1>
        <p>Test Text 1</p>
        <p>Test Text 2</p>
        <img src="test.jpg" alt="Test Image">
      </section>
    `);
  });

  test('returns section HTML without title if title property is not provided', () => {
    const data = {
      texts: ['Test Text 1', 'Test Text 2'],
      image: { source: 'test.jpg', description: 'Test Image' },
    };

    const result = Section(data, 'test-class');
    expect(result).toBe(`
      <section class="test-class">
        <p>Test Text 1</p>
        <p>Test Text 2</p>
        <img src="test.jpg" alt="Test Image">
      </section>
    `);
  });

  test('returns section HTML without texts if texts property is an empty array', () => {
    const data = {
      title: { priority: 1, content: 'Test Title' },
      texts: [],
      image: { source: 'test.jpg', description: 'Test Image' },
    };

    const result = Section(data, 'test-class');
    expect(result).toBe(`
      <section class="test-class">
        <h1 priority="1">Test Title</h1>
        <img src="test.jpg" alt="Test Image">
      </section>
    `);
  });

  test('returns section HTML without image if image property is not provided', () => {
    const data = {
      title: { priority: 1, content: 'Test Title' },
      texts: ['Test Text 1', 'Test Text 2'],
    };

    const result = Section(data, 'test-class');
    expect(result).toBe(`
      <section class="test-class">
        <h1 priority="1">Test Title</h1>
        <p>Test Text 1</p>
        <p>Test Text 2</p>
      </section>
    `);
  });
});
