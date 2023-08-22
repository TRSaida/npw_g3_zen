import { Title } from '../../../components/ui/Title/Title.js';
import { Text } from '../../../components/ui/Text/Text.js';
import { Image } from '../../../components/ui/Image/Image.js';
import { BrandLink } from '../../../components/ui/Brandlink/Brandlink.js';

/** @typedef {import ('../../../schema/types').SectionPrimary} Data */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {
  const dataKeys = Object.keys(data);
 16-widget-sectionsecondary

 
  if (dataKeys.length === 4 || dataKeys.length === 5) {
    const { name, title, texts, image, links } = data;
    const { apple, google } = links || {};
    
    const className = name
      ? name
      : 'section-primary';
    
    return `
      <section class="${className}"> 
        ${title ? Title(title, className) : ''}
        ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
        ${image ? Image(image, className) : ''}
        ${apple ? BrandLink(apple, 'apple', className) : ''}
        ${google ? BrandLink(google, 'google', className) : ''}
      </section>
    `;
  }
  else {
    return '';
  } main
};

