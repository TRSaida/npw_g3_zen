import {Title} from "./Title.js";

describe('Title', () => {
  test('Unit test 1', () => {
    const data = {content: 'Test Content' };
    const className = 'test-class';

    const result = Title(data, className);

    expect(result).toBe('<h1 class="test-class">Test Content</h1>');
  });

  test('should return h2 tag when priority is 2', () => {
    const data = { priority: 2, content: 'Test Content' };
    const className = 'test-class';

    const result = Title(data, className);

    expect(result).toBe('<h2 class="test-class">Test Content</h2>');
  });
  
  test('should return empty string when data is not provided', () => {
    const result = Title();

    expect(result).toBe('');
  });
});
