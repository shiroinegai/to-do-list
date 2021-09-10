import addTaskButtonNode from "./addTaskButtonNode";
import createTaskNode from "./createTaskNode";

const createSectionNode = (section) => {
  const sectionContainer = document.createElement("section");
  if (section.name) {
    const sectionHeader = document.createElement("h2");
    sectionHeader.append(section.name);
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
