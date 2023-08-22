/**
 * @function Lang
 * @param {string} parentClassName 
 * @param {'en' | 'ru'} langs 
 * @returns 
*/
 

export const Lang = (parentClassName, langs = 'en') => {
  const currentClassname = parentClassName
    ? `${parentClassName}__lang`
    : 'lang';

  return `
    <select id="lang" class="${currentClassname}">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  `;
};
