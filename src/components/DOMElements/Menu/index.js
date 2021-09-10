import { fetchAllProjects } from "../../Project/api";
import { hashtagIcon, inboxIcon } from "../Icons";
import modal from "../common/modal";
import menuLink from "./menuLink";
import menuSectionHeader from "./menuSectionHeader";
import menuSectionContent from "./menuSectionContent";
import collapsible from "../common/collapsible";

let projects = fetchAllProjects();

const Menu = document.createElement("aside");
Menu.classList.add("c-Menu", "js-Menu--toggleMenu");

const menuContent = document.createElement("nav");
menuContent.classList.add("c-Menu__content");

modal(Menu, menuContent);

const inboxLink = menuLink(inboxIcon(), "h1", "Inbox");
menuContent.append(inboxLink);

const favouritesHeader = menuSectionHeader("Favourites");
const favouritesContent = menuSectionContent();
for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  if (project.isFavourite) {
    const menuLinkNode = menuLink(hashtagIcon(), "a", project.name);
    favouritesContent.append(menuLinkNode);
  }
}
const favouritesSection = collapsible(favouritesHeader, favouritesContent);

const projectsHeader = menuSectionHeader("Projects");
const projectsContent = menuSectionContent();
for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  const menuLinkNode = menuLink(hashtagIcon(), "a", project.name);
  projectsContent.append(menuLinkNode);
}
const projectsSection = collapsible(projectsHeader, projectsContent);

menuContent.append(favouritesSection, projectsSection);

export default Menu;
