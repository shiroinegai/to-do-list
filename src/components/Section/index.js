import { getProjects } from "../Project";

let sectionIndex = [];

const getSectionIndex = () => sectionIndex;

const indexSections = () => {
  sectionIndex = [];
  for (let i = 0; i < getProjects().length; i++) {
    const project = getProjects()[i];
    sectionIndex = sectionIndex.concat(project.sections);
    sectionIndex = Array.from(new Set(sectionIndex));
  }
};

export { getSectionIndex, indexSections };
