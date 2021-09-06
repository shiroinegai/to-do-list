import { getProjects } from "..";

/**
 * @function fetchProjectById
 * @param {string} projectIdQuery
 * @returns {Project}
 */
const fetchProjectById = (projectIdQuery) => {
  const projects = getProjects();
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    if (project.id === projectIdQuery) {
      return project;
    }
  }
};

export default fetchProjectById;
