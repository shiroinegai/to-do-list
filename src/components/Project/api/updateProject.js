import { setProject } from "..";
import { getProjectIndexById } from ".";

/**
 * @function updateProject
 * @param {string} projectIdQuery
 * @param {Object} projectUpdates
 * @param {string} [projectUpdates.name]
 * @param {string} [projectUpdates.color]
 * @param {boolean} [projectUpdates.isFavourite]
 */
const updateProject = (projectIdQuery, projectUpdates) => {
  const projectIndex = getProjectIndexById(projectIdQuery);
  setProject(projectIndex, projectUpdates);
};

export default updateProject;
