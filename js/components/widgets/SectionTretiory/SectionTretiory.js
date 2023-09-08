import { Clients } from './Links/Clients.js';

/** @typedef {import  ( './types').SectionTretiory} Data */

/**
 * @function SectionTretiory
 * @param {Data} data
 * @param {string} className
 * @returns {string}
 */

export const SectionTretiory = (data, className) => {
  if (!data) return '';
  const parentClassName = className
    ? className 
    : 'SectionTretiory';

  return `
    <section class="${className}"> 
      ${data.length > 0 ? Clients(data, parentClassName) : ''}
    </section>
  `;
};
  