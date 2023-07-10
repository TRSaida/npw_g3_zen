/**
 * @typedef {object} Image - контент для изображения
 * @property {string} source
 * @property {string} description
 */

/**
 * Компонент для создания изображения
 * @function Image
 * @param {Image} image
 * @param {string} className
 * @returns {string} html or empty
 */

export const Image = (image, className) => {
  if (!image) return '';
  return `
    <img
      src="${image.source}"
      class="${className}"
      alt="${image.description}"
    />
  `;
};