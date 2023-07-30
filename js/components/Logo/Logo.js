import { IconLogo } from './ui/Icon_logo.js';

/**
 * @function Logo
 * @param {string} parentClassName 
 * @param {string} logo 
 * @returns {string}
 */

export const Logo = (parentClassName, logo) => {
  const currentClassname = parentClassName
    ? `${parentClassName}__logo`
    : 'logo';

  return `
     <button class="${currrentClassName}" id="logo">
       ${logo === 'logo' ? IconLogo() : ''}
     </button>
  `;
};
