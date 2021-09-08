/**
 * @function listItem
 * @param {string} element
 * @param {string} text
 */
const listItem = (element, text) => {
  const listItemNode = document.createElement(element);
  listItemNode.classList.add("o-list-item");
  listItemNode.append(text);

  return listItemNode;
};

export default listItem;
