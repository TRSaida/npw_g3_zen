/**
 * @typedef {object} Link - контент для ссылки
 * @property {string} url
 * @property {string} type
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
  const { url, description } = link;
  return `
    <a
      href="${url}"
    >
     ${type === 'apple' && IconApple()}
     ${type === 'google' && IconGoogle()}
     or
     ${type === 'apple' ? IconApple() :
      IconGoogle()}
     </a>
   `; 
 };