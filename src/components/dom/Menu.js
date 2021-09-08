import { fetchAllProjects } from "../Project/api";
import collapsible from "./common/collapsible";
import { inboxIcon, chevronIcon, hashtagIcon } from "./Icons";

const Menu = document.createElement("aside");
Menu.classList.add("c-Menu", "js-Menu--toggleMenu");
const MenuSections = document.createElement("nav");
MenuSections.classList.add("c-Menu__sections");

let projects = fetchAllProjects();

const inboxLink = document.createElement("a");
const inboxHeader = createNavLink("h1", inboxIcon(), "Inbox");
inboxLink.append(inboxHeader);
MenuSections.append(inboxLink);

const favouritesHeader = createNavLink("button", chevronIcon(), "Favourites");
favouritesHeader.classList.add("c-Menu__section-header");
const favouritesContent = document.createElement("section");
favouritesContent.classList.add("c-Menu__section-content");

for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  if (project.isFavourite) {
    const navLink = createNavLink("a", hashtagIcon(), project.name);
    favouritesContent.append(navLink);
  }
}

const favouritesSection = collapsible(favouritesHeader, favouritesContent);

const projectsHeader = createNavLink("button", chevronIcon(), "Projects");
projectsHeader.classList.add("c-Menu__section-header");
const projectsContent = document.createElement("section");
projectsContent.classList.add("c-Menu__section-content");

for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  const navLink = createNavLink("a", hashtagIcon(), project.name);
  projectsContent.append(navLink);
}

const projectsSection = collapsible(projectsHeader, projectsContent);

MenuSections.append(favouritesSection, projectsSection);

Menu.append(MenuSections);

function createNavLink(element, icon, text) {
  const navLink = document.createElement(element);
  navLink.classList.add("o-nav-link");
  navLink.append(icon);
  navLink.append(text);

  return navLink;
}

export default Menu;
