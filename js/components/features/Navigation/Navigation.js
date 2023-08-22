import { Menu } from './ui/Menu.js'

/** @typedef {import ('./types').MenuItem} MenuItem */

/**
 * @function Navigation
 * @param {MenuItem[]} menuItems
 * @param {string} parentClassName
 * @return {string}
 */

export const Navigation = (menuItems, parentClassName) => {
  console.log({Navigation});
  if (!menuItems.length) return '';

  const currentClassName = parentClassName 
    ? `${parentClassName}__nav` 
    : 'nav';

  return `
    <nav class="${currentClassName}">
      ${Menu(menuItems, parentClassName)}
    </nav>
  `;
};
