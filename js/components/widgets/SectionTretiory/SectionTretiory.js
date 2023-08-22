import { Links } from './Links/Links.js';

/** @typedef {import  ( './types').SectionTretiory} Data */

/**
 * @function SectionTretiory
 * @param {Data[]} data
 * @param {string} className
 * @returns {string}
 */

export const SectionTretiory = (data, className) => {
  const html = `
  <section class="${className}"> 
    <ul class="${className}">
  `;

   data.forEach(dataLink => {
    const { links } = dataLink;
    html += `
      ${Links(links, className)}
    `;
  });
    html += `
    </ul>
  </section>
  `;
    return html;  
  };
