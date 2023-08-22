import { IconButton } from './IconButton.js'
import { FormaButton } from './FormaButton.js'

/**
 * @function Button
 * @param {string} button
 * @param {string} parentClassName
 * @returns {string} html or empty
 */

export const Button = (button, parentClassName) => {
  const currentClassName = parentClassName
    ? `${parentClassName}__button`
    : 'button';

  const buttonCare = '';

  if (button.type === 'icon') {
    buttonCare = IconButton(button, currentClassName);
  }
  else if (button.type === 'forma') {
    buttonCare = FormaButton(button, currentClassName);
  }

  return `
    <button class="${currentClassName}">
      ${buttonCare}
    </button>
  `;
};
