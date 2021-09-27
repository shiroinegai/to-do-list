import { fetchAllProjects } from "../../Project/api";
import { inboxIcon, plusIcon } from "../Icons";
import menuLink from "./menuLink";
import menuSection from "./menuSection";
import menuSectionHeader from "./menuSectionHeader";
import menuSectionContent from "./menuSectionContent";
import makeCollapsible from "../common/makeCollapsible";
import toggleMenu from "./toggleMenu";
import menuLinkColorDecor from "./menuLinkColorDecor";
import Form from "../Form";
import createNode from "../common/createNode";

let projects = fetchAllProjects();

const Menu = createNode("aside", { class: "c-Menu js-Menu--toggleMenu" });

const menuContent = createNode("nav", { class: "c-Menu__content" });

const inboxLink = menuLink("h1", "Inbox", "inbox", inboxIcon());
menuContent.append(inboxLink);

const favouritesSection = menuSection();
const favouritesHeader = menuSectionHeader("Favourites");
const favouritesContent = menuSectionContent();
for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  if (project.isFavourite) {
    const menuLinkNode = menuLink("li", project.name, project.id);
    menuLinkNode.prepend(menuLinkColorDecor(project.color));
    favouritesContent.append(menuLinkNode);
  }
}
makeCollapsible(favouritesSection, favouritesContent, favouritesHeader);
favouritesSection.append(favouritesHeader, favouritesContent);

const addProjectButton = createNode(
  "button",
  { class: "c-Menu__add-project-button" },
  plusIcon()
);
addProjectButton.addEventListener("click", (e) => {
  e.stopPropagation();
  document.body.append(Form());
});

const projectsSection = menuSection();
const projectsHeader = menuSectionHeader("Projects");
projectsHeader.append(addProjectButton);
const projectsContent = menuSectionContent();
for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  const menuLinkNode = menuLink("li", project.name, project.id);
  menuLinkNode.prepend(menuLinkColorDecor(project.color));
  projectsContent.append(menuLinkNode);
}
makeCollapsible(projectsSection, projectsContent, projectsHeader);
projectsSection.append(projectsHeader, projectsContent);

menuContent.append(favouritesSection, projectsSection);

const transparentArea = createNode("div", {
  class: "c-Menu__transparent-area",
});
transparentArea.addEventListener("click", toggleMenu);

Menu.append(menuContent, transparentArea);

export default Menu;
