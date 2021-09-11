import { fetchAllProjects } from "../../Project/api";
import { hashtagIcon, inboxIcon } from "../Icons";
import menuLink from "./menuLink";
import menuSection from "./menuSection";
import menuSectionHeader from "./menuSectionHeader";
import menuSectionContent from "./menuSectionContent";
import makeCollapsible from "../common/makeCollapsible";

let projects = fetchAllProjects();

const Menu = document.createElement("aside");
Menu.classList.add("c-Menu", "js-Menu--toggleMenu");

const menuContent = document.createElement("nav");
menuContent.classList.add("c-Menu__content");

const inboxLink = menuLink(inboxIcon(), "h1", "Inbox");
menuContent.append(inboxLink);

const favouritesSection = menuSection();
const favouritesHeader = menuSectionHeader("Favourites");
const favouritesContent = menuSectionContent();
for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  if (project.isFavourite) {
    const menuLinkNode = menuLink(hashtagIcon(), "a", project.name);
    favouritesContent.append(menuLinkNode);
  }
}
makeCollapsible(favouritesSection, favouritesHeader, favouritesContent);
favouritesSection.append(favouritesHeader, favouritesContent);

const projectsSection = menuSection();
const projectsHeader = menuSectionHeader("Projects");
const projectsContent = menuSectionContent();
for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  const menuLinkNode = menuLink(hashtagIcon(), "a", project.name);
  projectsContent.append(menuLinkNode);
}
makeCollapsible(projectsSection, projectsHeader, projectsContent);
projectsSection.append(projectsHeader, projectsContent);

menuContent.append(favouritesSection, projectsSection);

Menu.append(menuContent);

export default Menu;
