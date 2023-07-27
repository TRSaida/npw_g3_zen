import { Brandlink } from './Brandlink.js';

describe('Brandlink', () => {
  it('should return empty string if link is not provided', () => {
    const link = null;
    const className = 'test-class';
    
    const result = Brandlink(link, className);
    
    expect(result).toEqual('');
  });
  
  it('should return correct html if link is provided', () => {
    const link = {
      url: 'https://example.com',
      type: 'apple'
    };
    const className = 'test-class';
    
    const result = Brandlink(link, className);
    
    expect(result).toEqual(`
      <a
        href="${link.url}"
        class="${className}"
        alt="${image.description}"
      >
       ${IconApple()}
       </a>
     `);
  });
});