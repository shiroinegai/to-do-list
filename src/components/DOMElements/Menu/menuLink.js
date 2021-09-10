import listItem from "../common/listItem";

const menuLink = (icon, element, text) => {
  const menuLinkNode = document.createElement("a");
  menuLinkNode.classList.add("c-Menu__link");
  const menuLinkText = listItem(element, text);
  menuLinkText.classList.add("c-Menu__link-text");
  menuLinkNode.append(icon, menuLinkText);

  return menuLinkNode;
};

export default menuLink;
