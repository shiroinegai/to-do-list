import listItem from "../common/listItem";
import createProjectNode from "../View/createProjectNode";
import { fetchProjectById } from "../../Project/api";
import updateView from "../View/updateView";
import toggleMenu from "./toggleMenu";

const menuLink = (element, text, projectId, icon) => {
  const menuLinkNode = document.createElement("a");
  menuLinkNode.classList.add("c-Menu__link");
  const menuLinkText = listItem(element, text);
  menuLinkText.classList.add("c-Menu__link-text");
  menuLinkNode.append(menuLinkText);

  if (icon) {
    menuLinkNode.prepend(icon);
  }

  menuLinkNode.addEventListener("click", () => {
    const projectNode = createProjectNode(fetchProjectById(projectId));
    updateView(projectNode);
    toggleMenu();
  });

  return menuLinkNode;
};

export default menuLink;
