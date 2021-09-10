/**
 * @function toggleCollapsibleContent
 * @param {EventTarget} target
 */
const toggleCollapsibleContent = (target) => {
  // @ts-ignore
  if (target.firstChild.tagName === "svg") {
    // @ts-ignore
    const chevron = target.firstChild;

    if (chevron.style.transform) {
      chevron.style.transform = null;
    } else {
      chevron.style.transform = "rotate(90deg)";
    }
  }

  // @ts-ignore
  const collapsibleContent = target.parentNode.lastChild;

  if (collapsibleContent.style.maxHeight) {
    collapsibleContent.style.maxHeight = null;
  } else {
    collapsibleContent.style.maxHeight = `${collapsibleContent.scrollHeight}px`;
  }
};

export default toggleCollapsibleContent;
