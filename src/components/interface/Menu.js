import { fetchProjects, useProjectsSample } from "../Project";
import { inboxIcon, chevronIcon, hashtagIcon } from "./Icons";

const Menu = document.createElement("aside");
Menu.classList.add("c-Menu", "js-Menu--toggleMenu");
const MenuSections = document.createElement("nav");
MenuSections.classList.add("c-Menu__sections");

useProjectsSample();
let projects = fetchProjects();

const inboxLink = document.createElement("a");
const inboxHeader = createNavLink("h1", inboxIcon(), "Inbox");
inboxLink.append(inboxHeader);
MenuSections.append(inboxLink);

const favouritesHeader = createNavLink("button", chevronIcon(), "Favourites");
favouritesHeader.addEventListener("click", (e) =>
  toggleMenuSection(e.currentTarget)
);
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

MenuSections.append(favouritesHeader);
MenuSections.append(favouritesContent);

const projectsHeader = createNavLink("button", chevronIcon(), "Projects");
projectsHeader.addEventListener("click", (e) =>
  toggleMenuSection(e.currentTarget)
);
projectsHeader.classList.add("c-Menu__section-header");
const projectsContent = document.createElement("section");
projectsContent.classList.add("c-Menu__section-content");

for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  const navLink = createNavLink("a", hashtagIcon(), project.name);
  projectsContent.append(navLink);
}

MenuSections.append(projectsHeader);
MenuSections.append(projectsContent);

Menu.append(MenuSections);

function createNavLink(element, icon, text) {
  const navLink = document.createElement(element);
  navLink.classList.add("o-nav-link");
  navLink.append(icon);
  navLink.append(text);

  return navLink;
}

function toggleMenuSection(target) {
  if (target.nextSibling.style.maxHeight) {
    target.firstChild.style.transform = null;
    target.nextSibling.style.maxHeight = null;
  } else {
    target.firstChild.style.transform = "rotate(90deg)";
    target.nextSibling.style.maxHeight = `${target.nextSibling.scrollHeight}px`;
  }
}

export default Menu;
