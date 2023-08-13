import { Title } from '../../../components/ui/Title/Title.js';
import { Text } from '../../../components/ui/Text/Text.js';
import { Image } from '../../../components/ui/Image/Image.js';
import { BrandLink } from '../../../components/ui/Brandlink/Brandlink.js';

/** @typedef {import ('../../../schema/types.js').SectionPrimary} Data */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {
  const dataKeys = Object.keys(data);
  if (/*dataKeys.length !== 4 && */dataKeys.length !== 5) return '';

  const { name, title, text, image, link } = data;

  const { apple, google } =link;
  
  const className = name 
    ? name 
    : 'section-primary';

  return `
    <section class="${className }"> 
      ${title ? Title(title, className) : ''}
      ${text.length > 0 ? text.map((text) => Text(text, className)).join('') : ''}
      ${image ? Image(image, className) : ''}
      ${apple ? BrandLink(apple, 'apple', className) : ''}
      ${google ? BrandLink(google, 'google', className) : ''}
    </section>
  `;
};
