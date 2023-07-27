/**
 * Компонент для создания параграфа
 * @function Text 
 * @param {string} str - контент для параграфа
 * @param {string} parentClassName - родительский класс для параграфа
 * @returns {string} html строка
 */

export const Text = (str, parentClassName) => {
  const currentClassname = parentClassName
    ? `${parentClassName}__copy`
    : 'copy';
  
  return `
    <p class="${parentClassName}">${str}</p>
  `;
};
