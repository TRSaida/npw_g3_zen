import { Logo } from '../../features/Logo/Logo.js'
import { Navigation } from '../../features/Navigation/Navigation.js'
import { Lang } from '../../features/Lang/Lang.js'
import { Burger } from '../../features/Burger/Burger.js'
import { Theme } from '../../features/Theme/Theme.js'

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

