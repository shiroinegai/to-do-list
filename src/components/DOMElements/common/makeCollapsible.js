import toggleCollapsibleContent from "./toggleCollapsibleContent";

/**
 * @function makeCollapsible
 * @param {HTMLElement} parentNode
 * @param {HTMLElement} togglerNode
 * @param {HTMLElement} contentNode
 */
const makeCollapsible = (parentNode, togglerNode, contentNode) => {
  parentNode.classList.add("o-collapsible");

  togglerNode.classList.add("o-collapsible__toggler");
  togglerNode.addEventListener("click", (e) => {
    toggleCollapsibleContent(e.currentTarget);
  });

  contentNode.classList.add("o-collapsible__content");
};

export default makeCollapsible;
