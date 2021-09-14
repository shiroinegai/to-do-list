import addTaskButtonNode from "./addTaskButtonNode";
import listItem from "../common/listItem";
import makeCollapsible from "../common/makeCollapsible";
import taskNode from "../Task";

const createSectionNode = (section) => {
  const sectionContainer = document.createElement("section");
  sectionContainer.setAttribute("data-uuid", section.id);
  sectionContainer.classList.add("c-View__section");

  const sectionContent = document.createElement("ul");
  sectionContent.classList.add("c-View__section-content");
  for (let i = 0; i < section.tasks.length; i++) {
    const task = section.tasks[i];
    sectionContent.append(taskNode(task));
  }
  sectionContent.append(addTaskButtonNode());

  if (section.name) {
    const sectionHeader = listItem("h2", section.name);
    sectionHeader.classList.add("c-View__section-header");
    makeCollapsible(sectionContainer, sectionContent);
    sectionContainer.append(sectionHeader);
  }

  sectionContainer.append(sectionContent);

  return sectionContainer;
};

export default createSectionNode;
