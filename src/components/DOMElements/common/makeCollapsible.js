import { chevronIcon } from "../Icons";
import toggleCollapsibleContent from "./toggleCollapsibleContent";

/**
 * @function makeCollapsible
 * @param {HTMLElement} parentNode
 * @param {HTMLElement} contentNode
 * @param {HTMLElement} [togglerNode]
 */
const makeCollapsible = (parentNode, contentNode, togglerNode) => {
  parentNode.classList.add("o-collapsible");

  contentNode.classList.add("o-collapsible__content");
  contentNode.style.maxHeight = "100%";

  if (togglerNode) {
    togglerNode.prepend(chevronIcon());
    togglerNode.classList.add("o-collapsible__toggler");
    togglerNode.addEventListener("click", (e) => {
      toggleCollapsibleContent(e.currentTarget);
    });
  } else {
    const chevron = document.createElement("button");
    chevron.classList.add("o-collapsible__toggler");
    chevron.append(chevronIcon());
    chevron.addEventListener("click", (e) => {
      toggleCollapsibleContent(e.currentTarget);
    });
    parentNode.prepend(chevron);
  }
};

export default makeCollapsible;
