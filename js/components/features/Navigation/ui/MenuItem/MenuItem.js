/** @typedef {import('../../types').MenuItem} MenuItem */

/**
 * @function Menu
 * @param {MenuItem} menuItem
 * @param {string} parentClassName
 * @return {string}
 */

export const MenuItem = (menuItem, parentClassName) => {
  if (!Object.keys(menuItem).length === 4) return '';
  
  const {target, content} = menuItem;

  const currentClassName = parentClassName
    ? `${parentClassName}__item`
    : 'menu-item';

  return`
    <li class="${currentClassName}">
      <a href="${target}">${content}</a>
    </li>
  `;
};
