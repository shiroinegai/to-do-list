import createNode from "./createNode";

/**
 * @function listItem
 * @param {string} element
 * @param {string} text
 */
const listItem = (element, text) => {
  return createNode(element, { class: "o-list-item" }, text);
};

export default listItem;
