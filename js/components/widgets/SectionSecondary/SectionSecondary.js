import { Title } from '../../../components/ui/Title/Title.js';
import { Text } from '../../../components/ui/Text/Text.js';
import { Button } from '../../ui/Button/Button.js'

/** @typedef {import ('../../../schema/types.js').SectionSecondary} Data */

/**
 * @function SectionSecondary
 * @param {Data} data
 * @returns {string}
 */

export const SectionSecondary = (data) => {
  const secondaryKeys = Object.keys(data);
  if (secondaryKeys.length !== 4) return '';

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
