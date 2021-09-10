import listItem from "../common/listItem";
import { chevronIcon } from "../Icons";

const menuSectionHeader = (text) => {
  const menuSectionHeaderNode = document.createElement("button");
  menuSectionHeaderNode.classList.add("c-Menu__header");
  const menuSectionHeaderText = listItem("h2", text);
  menuSectionHeaderText.classList.add("c-Menu__header-text");
  menuSectionHeaderNode.append(chevronIcon(), menuSectionHeaderText);

  return menuSectionHeaderNode;
};

export default menuSectionHeader;
