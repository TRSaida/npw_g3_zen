import { Title } from '../../../components/ui/Title/Title.js';
import { Text } from '../../../components/ui/Text/Text.js';
import { Button } from '../../ui/Button/Button.js'

/**
 * @function SectionSecondary
 * @param {Data} data
 * @returns {string}
 */

export const SectionSecondary = (data) => {
  const SecondaryKeys = Object.keys(data);
  if (SecondaryKeys.length !== 4) return '';

  const { name, title, texts, button } = data;

  const parentClassName = name 
    ? name 
    : 'section-primary';

  return `
    <section class="${parentClassName }"> 
      ${title ? Title(title, parentClassName) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, parentClassName)).join('') : ''}
      ${button ? Button(button, parentClassName) : ''}
      
    </section>
  `;
};
