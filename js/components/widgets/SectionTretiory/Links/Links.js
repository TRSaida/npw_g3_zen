/**@typedef {import ('./types').Link} Link */

/** 
 * @function Links
 * @param {Link[]}links
 * @param {string} className
 * @return {string}
 */

export const Links = (links, className) => {
  return links.map(link => {
    const { source, description } = link;
    const parentClassName = className 

    return `
      <li class="${parentClassName}">
          <img
           src="${source}"
           alt="${description}"
        />
        </li>
    `;
  }).join('');
};