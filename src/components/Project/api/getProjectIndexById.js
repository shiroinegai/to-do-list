import { getProjects } from "..";

/**
 * @function getProjectIndexById
 * @param {string} projectIdQuery
 * @returns {number}
 */
const getProjectIndexById = (projectIdQuery) => {
  const projects = getProjects();
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    if (project.id === projectIdQuery) {
      return i;
    }
  }
};

export default getProjectIndexById;
