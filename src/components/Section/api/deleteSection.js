import { getActiveProjectId } from "../../App";
import { fetchProjectById, updateProject } from "../../Project/api";

/**
 * @function deleteSection
 * @param {string} sectionIdQuery
 */
const deleteSection = (sectionIdQuery) => {
  const targetProjectId = getActiveProjectId();
  const targetProject = fetchProjectById(targetProjectId);
  targetProject.sections = targetProject.sections.filter(
    (sectionItem) => sectionItem.id !== sectionIdQuery
  );
  updateProject(targetProjectId, {
    sections: [...targetProject.sections],
  });
};

export default deleteSection;
