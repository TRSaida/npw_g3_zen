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

  const { name, menuList, langs } = data;
 
  const parentClassName = name 
    ? name 
    : 'Header';

  return `
    <header class="${parentClassName}">
      ${Logo(parentClassName)}
      ${menuList.length > 0 ? Navigation(menuList, parentClassName) : ''}
      ${langs.length > 0 ? Lang(langs, parentClassName) : ''}
      ${Burger(parentClassName)}
      ${Theme(parentClassName)}
    </header>
  `;  
};
