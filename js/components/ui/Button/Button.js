import { IconButton } from './IconButton.js'

/**
 * @function Button
 * @param {string} button
 * @param {string} parentClassName
 * @returns {string} html or empty
 */

export const Image = (button, parentClassName) => {
  const currentClassName = parentClassName
    ? `${parentClassName}__button`
    : 'button';

  return `
    <button class="${parentClassName}">
    ${IconButton()}
    </button>
  `;
};