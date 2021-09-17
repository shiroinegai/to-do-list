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

let projects = fetchAllProjects();

const Menu = document.createElement("aside");
Menu.classList.add("c-Menu", "js-Menu--toggleMenu");

const menuContent = document.createElement("nav");
menuContent.classList.add("c-Menu__content");

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

const addProjectButton = document.createElement("button");
addProjectButton.classList.add("c-Menu__add-project-button");
addProjectButton.append(plusIcon());
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

const transparentArea = document.createElement("div");
transparentArea.classList.add("c-Menu__transparent-area");
transparentArea.addEventListener("click", toggleMenu);

Menu.append(menuContent, transparentArea);

export default Menu;
