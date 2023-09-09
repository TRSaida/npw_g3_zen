import { Logo,
  Navigation,
  Lang,
  Burger,
  Theme 
} from './index.js'

/** @typedef {import ('./types').Header} Data */

/**
 * @function Header
 * @param {Data} data
 * @return {string}
 */

export const Header = (data) => {
  const dataHeader = Object.keys(data);
  if (dataHeader.length !== 3) return '';

  const { name, menuItems, langs } = data;
 
  const parentClassName = name 
    ? name 
    : 'Header';

     return `
    <header class="${parentClassName}">
      ${Logo(parentClassName)}
      ${menuItems.length > 0 ? Navigation(menuItems, parentClassName) : '' }
      ${langs.length > 0 ? Lang(langs, parentClassName) : ''}
      ${Burger(parentClassName)}
      ${Theme(parentClassName)}
    </header>
  `;  
};

