import { IconBurger } from './ui/IconBurger.js';

/**
 * @function Burger
 * @param {string} parentClassName
 * @returns {string}
 */

export const Burger = (parentClassName) => {

  const currentClassname = parentClassName
    ? `${parentClassName}__burger`
    : 'burger';

  return `
    <button id="burger" class="${currentClassname}">
      ${IconBurger()}
    </button>
  `;
};