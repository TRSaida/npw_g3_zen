import { Image } from './Image';

describe('Image', () => {
it('should return an HTML img tag', () => {
   const image = {
     source: 'example.jpg',
     description: 'Example image',
};
   const className = 'example-class';
   const result = Image(image, className);
expect(typeof result).toBe('string');
expect(result).toContain('<img src="example.jpg" class="example-class" alt="Example image">');
});
it('should return an empty string if no image is passed', () => {
  const result = Image(undefined, 'example-class');
expect(result).toBe('');
 });
});
