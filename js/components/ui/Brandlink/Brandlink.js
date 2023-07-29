/**
 * @typedef {object} Link - контент для ссылки
 * @property {string} url
 */

/**
 * Компонент для создания ссылки
 * @function Brandlink
 * @param {Link} link
 * @param {'apple' | 'google'} type
 * @param {string} className
 * @returns {string} html or empty
 */

export const BrandLink = (link, type, className) => {
  if (!link) return '';
  const { url } = link;
  return `
    <a
      href="${url}"
    >
     ${type === 'apple' && 'IconApple'}
     ${type === 'google' && 'IconGoogle'}
     or
     ${type === 'apple' ? 'IconApple' :
      'IconGoogle'}
     </a>
   `; 
 };