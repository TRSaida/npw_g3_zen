import { IconLang } from "./ui/IconLang";

/**
 * @function Lang
 * @param {string} parentClassName 
 * @param {'en' | 'ru'} lang 
 * @returns 
*/

export const Lang = (parentClassName, lang = 'en') => {
  const currentClassname = parentClassName
    ? `${parentClassName}__lang`
    : 'lang';

  return `
    <button class="${currentClassname}" lang="en" id="lang">
      ${lang === 'en' ? EN() : RU()}
    </button>
  `;
};
