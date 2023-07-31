import { IconLogo } from './ui/IconLogo.js';

/**
 * @function Logo
 * @param {string} parentClassName 
 * @returns {string}
 */

export const Logo = (parentClassName) => {
  const currentClassname = parentClassName
    ? `${parentClassName}__logo`
    : 'logo';

  return `
    <button class="${currrentClassName}" id="logo">
     ${IconLogo()}
    </button>
  `;
};
