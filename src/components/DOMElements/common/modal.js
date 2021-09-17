/**
 * @function modal
 * @param {HTMLElement} content
 */
const makeModal = (content) => {
  const modalNode = document.createElement("div");
  modalNode.classList.add("o-modal");
  content.classList.add("o-modal-content");
  modalNode.append(content);

  return modalNode;
};

export default makeModal;
