/**
 * @function modal
 * @param {HTMLElement} element
 * @param {HTMLElement} content
 */
const modal = (element, content) => {
  element.classList.add("o-modal");
  content.classList.add("o-modal-content");
  element.append(content);
};

export default modal;
