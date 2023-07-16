/**
 * @typedef {Object} DataType
 * @property {string | number} priority
 * @property {string} content
 */

/**
 * Компонент для создания заголовка
 * @function Title
 * @param {DataType} data - данные для заголовка 
 * @param {string} className
 * @returns {string} - возвращаем строку HTML
 */

export const Title = (data, className) => { 
  if (!data) return '';
  
  const {priority, content} = data;
    
  switch (priority) {
    default: return `<h1 class="${className}">${content}</h1>`;
    case 2: return `<h2 class="${className}">${content}</h2>`;
    case 3: return `<h3 class="${className}">${content}</h3>`; 
    case 4: return `<h4 class="${className}">${content}</h4>`;
    case 5: return `<h5 class="${className}">${content}</h5>`; 
    case 6: return `<h6 class="${className}">${content}</h6>`;
  }
};
