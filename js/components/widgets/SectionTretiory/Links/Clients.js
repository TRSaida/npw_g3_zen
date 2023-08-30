import { Links } from './Links.js'

/** @typedef {import ('./types').Link} Link */

/**
 * @function Clients
 * @param {Link[]} links
 * @param {string} parentClassName
 * @return {string}
 */

export const Clients = (links, parentClassName) => {
  if (!links.length) return '';

  const currentClassName = parentClassName
    ? `${parentClassName}__links`
    : 'links';
  
  return`
    <ul class="${currentClassName}">
      ${Links(links, parentClassName)}
    </ul>
  `;
};
