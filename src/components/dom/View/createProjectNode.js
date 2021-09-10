import createSectionNode from "./createSectionNode";

const createProjectNode = (project) => {
  const projectContainer = document.createElement("div");

  const projectHeader = document.createElement("h1");
  projectHeader.append(project.name);

  projectContainer.append(projectHeader);

  for (let i = 0; i < project.sections.length; i++) {
    const section = project.sections[i];
    projectContainer.append(createSectionNode(section));
  }

  return projectContainer;
};

export default createProjectNode;
