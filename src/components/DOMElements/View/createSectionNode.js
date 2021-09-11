import { chevronIcon } from "../Icons";
import addTaskButtonNode from "./addTaskButtonNode";
import createTaskNode from "./createTaskNode";
import listItem from "../common/listItem";

const createSectionNode = (section) => {
  const sectionContainer = document.createElement("section");
  if (section.name) {
    const sectionHeader = listItem("h2", section.name);
    sectionHeader.prepend(chevronIcon());
    sectionContainer.append(sectionHeader);
  }
  const sectionContent = document.createElement("div");

  for (let i = 0; i < section.tasks.length; i++) {
    const task = section.tasks[i];
    sectionContent.append(createTaskNode(task));
  }

  sectionContent.append(addTaskButtonNode());
  sectionContainer.append(sectionContent);

  return sectionContainer;
};

export default createSectionNode;
