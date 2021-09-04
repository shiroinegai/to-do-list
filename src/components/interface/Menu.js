import { fetchProjects, useProjectsSample } from "../Project";

const Menu = document.createElement("aside");
Menu.classList.add("c-Menu", "js-Menu--toggleMenu");
const MenuSections = document.createElement("nav");
MenuSections.classList.add("c-Menu__sections");

useProjectsSample();
let projects = fetchProjects();

for (let i = 1; i < projects.length; i++) {
  const project = projects[i];
  const menuItem = createMenuItem(project);
  MenuSections.append(menuItem);
}

Menu.append(MenuSections);

function createMenuItem(project) {
  const menuItem = document.createElement("a");
  menuItem.append(project.name);

  return menuItem;
}

export default Menu;
