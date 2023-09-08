import { FormaButton } from './FormaButton.js'

/**
 * @function Button
 * @param {string} button
 * @param {string} parentClassName
 * @returns {string} html or empty
 */

export const Button = (button, parentClassName) => {
  if (!button) return '';
 
  const currentClassName = parentClassName
    ? `${parentClassName}__button`
    : 'button';

   return `
    <button class="${currentClassName}">
      ${FormaButton()}
    </button>
  `;
};
