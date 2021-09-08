import toggleCollapsibleContent from "./toggleCollapsibleContent";

/**
 * @function collapsible
 * @param {HTMLElement} togglerNode
 * @param {HTMLElement} contentNode
 * @returns {HTMLElement}
 */
const collapsible = (togglerNode, contentNode) => {
  const collapsibleContainer = document.createElement("div");
  collapsibleContainer.classList.add("o-collapsible");

  const collapsibleToggler = togglerNode;
  collapsibleToggler.classList.add("o-collapsible__toggler");
  collapsibleToggler.addEventListener("click", (e) => {
    toggleCollapsibleContent(e.currentTarget);
  });

  const collapsibleContent = contentNode;
  collapsibleContent.classList.add("o-collapsible__content");

  collapsibleContainer.append(collapsibleToggler, collapsibleContent);

  return collapsibleContainer;
};

export default collapsible;
