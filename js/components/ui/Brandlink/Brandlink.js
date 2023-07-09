/**
 * @typedef {object} Link - контент для ссылки
 * @property {string} url
 * @property {string}type
 */
/**
 * Компонент для создания ссылки
 * @function Brandlink
 * @param {Link} link
 * @param {string} className
 * @returns {string} html or empty
 */

export const Brandlink = (link, className) => {
  if (!link) return '';
  return`
    <a
      href="${link.url}"
      class="${className}"
      alt="${image.description}"
    >
     ${link.type === 'apple' && IconApple()}
     ${link.type === 'google' && IconGoogle()}
     </a>
   `; 
 };