import { getProjects } from "..";

/**
 * @function addProject
 * @param {Project} project
 */
const addProject = (project) => {
  getProjects().push(project);
};

export default addProject;
