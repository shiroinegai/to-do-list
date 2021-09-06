import createProject from "./functions/createProject";

import placeholder from "../../assets/placeholders/welcome.json";

/**
 * @type {Project[]}
 */
let projects = [...placeholder.projects];

/**
 * @function addProject
 * @param {Project} project
 */
const addProject = (project) => {
  projects.push(project);
};

/**
 * @function fetchAllProjects
 * @returns {Project[]}
 */
const fetchAllProjects = () => projects;

/**
 * @function fetchProjectById
 * @param {string} projectIdQuery
 * @returns
 */
const fetchProjectById = (projectIdQuery) => {
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    if (project.id === projectIdQuery) {
      return project;
    }
  }
};

export { createProject, addProject, fetchAllProjects, fetchProjectById };
