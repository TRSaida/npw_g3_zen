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

  switch (button.type) {
    case 'icon':
      buttonCare =IconButton(button, currentClassName);
      break;
    case  'forma':
      buttonCare =FormaButton(button, currentClassName);
      break;
    default:
      break;
  };

  return `
    <button class="${currentClassName}">
      ${buttonCare}
    </button>
  `;
};