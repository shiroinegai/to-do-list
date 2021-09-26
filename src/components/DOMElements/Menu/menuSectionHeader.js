import createNode from "../common/createNode";
import listItem from "../common/listItem";

const menuSectionHeader = (text) => {
  const menuSectionHeaderNode = createNode("button", {
    class: "c-Menu__header",
  });
  const menuSectionHeaderText = listItem("h2", text);
  menuSectionHeaderText.classList.add("c-Menu__header-text");
  menuSectionHeaderNode.append(menuSectionHeaderText);

  return menuSectionHeaderNode;
};

export default menuSectionHeader;
