import { Title } from './Title.js';
import { Text } from './Text.js';
import { Image } from './Image.js';

/**
 * @typedef {Object} Image
 * @property {string} source
 * @property {string} description
 */

/**
 * @typedef {Object} Title
 * @property {number} priority
 * @property {string} content
 */

/**
 * @typedef {Object} Data
 * @property {string} name
 * @property {Title} title
 * @property {string[]} texts
 * @property {Image} image
 */

/**
 * @function Section
 * @param {Data} data 
 * @param {string} className  
 * @returns {string} html or empty
 */

export const Section = (data, className) => {
  if (!data) return '';

  const { title, texts, image } = data;

  return `
    <section class="${className}">
      ${title ? Title(title) : ''}
      ${texts.length ? texts.map((text) => Text(text)).join('') : ''}
      ${image ? Image(image) : ''}
    </section>
  `;
};
