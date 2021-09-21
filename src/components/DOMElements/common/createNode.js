/**
 * @function createNode
 * @param {string} type
 * @param {Object} attributes
 * @param  {...string|HTMLElement|SVGElement} children
 * @returns {HTMLElement}
 */
const createNode = (type, attributes, ...children) => {
  const element = document.createElement(type);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  element.append(...children);

  return element;
};

export default createNode;
