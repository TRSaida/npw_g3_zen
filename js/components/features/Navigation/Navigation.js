import { Menu } from './ui/Menu.js'

/** @typedef {import ('./types').MenuItem} MenuItem */

/**
 * @function Navigation
 * @param {MenuItem[]} menuList
 * @param {string} parentClassName
 * @return {string}
 */

export const Navigation = (menuList, parentClassName) => {
  if (!menuList.length) return '';

  const currentClassName =parentClassName 
    ? `${parentClassName}__nav` 
    :'nav';

  return `
    <nav class="${currentClassName}">
      ${Menu(menuList, parentClassName)}
    </nav>
  `;
};
