import { getActiveProjectId } from "../../App";
import { fetchProjectById, updateProject } from "../../Project/api";

/**
 * @function updateSection
 * @param {string} sectionIdQuery
 * @param {Object} sectionUpdates
 * @param {string} [sectionUpdates.name]
 * @param {Task[]} [sectionUpdates.tasks]
 */
const updateSection = (sectionIdQuery, sectionUpdates) => {
  const targetProjectId = getActiveProjectId();
  const targetProject = fetchProjectById(targetProjectId);
  for (let i = 0; i < targetProject.sections.length; i++) {
    if (targetProject.sections[i].id === sectionIdQuery) {
      targetProject.sections[i] = {
        ...targetProject.sections[i],
        ...sectionUpdates,
      };
    }
  }
  updateProject(targetProjectId, {
    sections: [...targetProject.sections],
  });
};

export default updateSection;
