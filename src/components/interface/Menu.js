import { fetchProjects, useProjectsSample } from "../Project";
import { inboxIcon, chevronIcon } from "./Icons";

const Menu = document.createElement("aside");
Menu.classList.add("c-Menu", "js-Menu--toggleMenu");
const MenuSections = document.createElement("nav");
MenuSections.classList.add("c-Menu__sections");

useProjectsSample();
let projects = fetchProjects();

const inbox = document.createElement("a");
inbox.append("Inbox");
MenuSections.append(inbox);

const favourites = document.createElement("section");
favourites.append("Favourites");
MenuSections.append(favourites);

const projectsHeader = document.createElement("section");
projectsHeader.append("Projects");
MenuSections.append(projectsHeader);

for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  const menuItem = createMenuItem(project);
  if (project.isFavourite) {
    favourites.append(menuItem);
  } else {
    projectsHeader.append(menuItem);
  }
}

Menu.append(MenuSections);

function createMenuItem(project) {
  const menuItem = document.createElement("a");
  menuItem.append(project.name);

  return menuItem;
}

export default Menu;
