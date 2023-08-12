import { MenuItem } from './MenuItem/MenuItem.js'

/** @typedef {import('../types').MenuItem} MenuItem */

/**
 * @function Menu
 * @param {MenuItem[]} menuList
 * @param {string} parentClassName
 * @return {string}
 */

export const Menu = (menuList, parentClassName) => {
  if (!menuList.length) return '';

  const currentClassName = parentClassName
    ? `${parentClassName}__menu`
    : 'menu';
  
  return`
    <ul class="${currentClassName}">
      ${menuList.map((menuItem) => MenuItem(menuItem, parentClassName)).join('')}
    </ul>
  `;
};
