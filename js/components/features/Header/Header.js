import { Logo } from '../Logo/Logo.js'
import { Navigation } from '../Navigation/Navigation.js'
import { Lang } from '../Lang/Lang.js'
import { Burger } from '../Burger/Burger.js'
import { Theme } from '../Theme/Theme.js'

/** @typedef {import ('../Header/types').Header} Data */

/**
 * @function Header
 * @param {Data} data
 * @return {string}
 */

export const Header = (data) => {
  const dataHeader = Object.keys(data);
  if (dataHeader.length !== 5) return '';

  const { name, logo, menuItem, lang, burger, theme } = data;

  const parentClassName = name 
    ? name 
    : 'Header';

  return `
    <header class="${parentClassName}">
      ${logo ? Logo(parentClassName) : ''}
      ${menuItem ? Navigation(menuList, parentClassName) : ''}
      ${lang ? Lang(parentClassName) : ''}
      ${burger ? Burger(parentClassName) : ''}
      ${theme ? Theme(theme, parentClassName) : ''}
    </header>
  `;  
};
