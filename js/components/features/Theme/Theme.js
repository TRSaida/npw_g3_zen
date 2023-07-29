import { Moon } from './ui/Moon.js';
import { Sun } from './ui/Sun.js';

/**
 * @function Theme
 * @param {string} parentClassName
 * @param {'light' | 'dark'} theme
 * @returns {string}
 */

export const Theme = ( parentClassName, theme = 'light') => {

  const currentClassname = parentClassName
    ? `${parentClassName}__theme`
    : 'theme';

return `
<button 
class="${currentClassname}"
data-theme="light"
id="theme"
>
 ${theme === 'light' ? Moon() : Sun()}
</button>
`;
}
