import { getProjects } from "..";
import { getProjectIndexById } from ".";

/**
 * @function deleteProject
 * @param {string} projectIdQuery
 */
const deleteProject = (projectIdQuery) => {
  const projectIndex = getProjectIndexById(projectIdQuery);
  getProjects().splice(projectIndex, 1);
};

export default deleteProject;
