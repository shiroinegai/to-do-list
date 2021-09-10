import addTaskButtonNode from "./addTaskButtonNode";

const createSectionNode = (section) => {
  const sectionContainer = document.createElement("section");
  if (section.name) {
    const sectionHeader = document.createElement("h2");
    sectionHeader.append(section.name);
    sectionContainer.append(sectionHeader);
  }
  const sectionContent = document.createElement("div");
  sectionContent.append(addTaskButtonNode());
  sectionContainer.append(sectionContent);

  return sectionContainer;
};

export default createSectionNode;
