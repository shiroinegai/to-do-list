import createNode from "./createNode";

/**
 * @function modal
 * @param {HTMLElement} content
 */
const makeModal = (content) => {
  const modalNode = createNode("div", { class: "o-modal" });
  modalNode.addEventListener("click", (e) => {
    if (e.target === modalNode) {
      modalNode.remove();
    }
  });
  modalNode.append(content);

  return modalNode;
};

export default makeModal;
