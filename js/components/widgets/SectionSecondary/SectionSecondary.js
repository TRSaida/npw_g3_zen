import { 
  Title,
  Text,
  Button, 
} from './index.js';

/** @typedef {import ('./types').SectionSecondary} Data */

/**
 * @function SectionSecondary
 * @param {Data} data
 * @returns {string}
 */

export const SectionSecondary = (data) => {
  const dataKeys = Object.keys(data);
  if (dataKeys.length !== 4) return '';
  
  const { name, title, texts, button } = data;
  
  const parentClassName = name 
    ? name 
    : 'section-secondary';

  return `
    <section class="${parentClassName }"> 
      ${title ? Title(title, parentClassName) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, parentClassName)).join('') : ''}
      ${button ? Button(button, parentClassName) : ''}
    </section>
  `;
 };
