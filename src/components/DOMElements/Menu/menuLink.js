import listItem from "../common/listItem";

const menuLink = (element, text, icon) => {
  const menuLinkNode = document.createElement("a");
  menuLinkNode.classList.add("c-Menu__link");
  const menuLinkText = listItem(element, text);
  menuLinkText.classList.add("c-Menu__link-text");
  menuLinkNode.append(menuLinkText);

  if (icon) {
    menuLinkNode.prepend(icon);
  }

  return menuLinkNode;
};

export default menuLink;
