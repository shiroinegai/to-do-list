import { chevronIcon } from "../Icons";
import addTaskButtonNode from "./addTaskButtonNode";
import createTaskNode from "./createTaskNode";
import listItem from "../common/listItem";
import makeCollapsible from "../common/makeCollapsible";

const createSectionNode = (section) => {
  const sectionContainer = document.createElement("section");
  sectionContainer.classList.add("c-View__section");

  const sectionContent = document.createElement("ul");
  sectionContent.classList.add("c-View__section-content");
  for (let i = 0; i < section.tasks.length; i++) {
    const task = section.tasks[i];
    sectionContent.append(createTaskNode(task));
  }
  sectionContent.append(addTaskButtonNode());

  if (section.name) {
    const sectionHeader = listItem("h2", section.name);
    sectionHeader.classList.add("c-View__section-header");
    sectionHeader.prepend(chevronIcon());
    makeCollapsible(sectionContainer, sectionHeader, sectionContent);
    sectionContainer.append(sectionHeader);
  }

  sectionContainer.append(sectionContent);

  return sectionContainer;
};

export default createSectionNode;
