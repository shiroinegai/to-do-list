import { v4 as uuidv4 } from "uuid";

/**
 * Projects store
 * @private
 * @type {Project[]}
 */
let projects = [];

/**
 * Project factory function
 * @private
 * @function newProject
 * @param {string} name
 * @param {string} color
 * @param {string} image
 * @param {boolean} isFavourite
 * @param {string} view
 * @returns {Project} Project object
 */
const newProject = (name, color, image = "", isFavourite, view = "list") => {
  const id = uuidv4();
  const sections = [{ id: "default", projectId: id, name: "", tasks: [] }];

  return { id, name, color, image, isFavourite, sections, view };
};

/**
 * @public
 * @function createProject
 * @param {string} name
 * @param {string} color
 * @param {string} image
 * @param {boolean} isFavourite
 * @param {string} view
 */
const createProject = (name, color, image, isFavourite, view) => {
  projects.push(newProject(name, color, image, isFavourite, view));
};

/**
 * @public
 * @function readProject
 * @param {string} projectIdQuery
 * @returns {Project}
 */
const readProject = (projectIdQuery) => {
  return findProjectById(projectIdQuery);
};

/**
 * @public
 * @function updateProject
 * @param {string} projectIdQuery
 * @param {Project} projectUpdates
 */
const updateProject = (projectIdQuery, projectUpdates) => {
  let project = findProjectById(projectIdQuery);
  project = { ...project, ...projectUpdates };
};

/**
 * @public
 * @function deleteProject
 * @param {string} projectIdQuery
 */
const deleteProject = (projectIdQuery) => {
  projects = projects.filter((project) => project.id !== projectIdQuery);
};

/**
 * @public
 * @function fetchProjects
 * @returns {Project[]}
 */
function fetchProjects() {
  return projects;
}

/**
 * @public
 * @function findProjectById
 * @param {string} projectIdQuery
 * @returns {Project}
 */
function findProjectById(projectIdQuery) {
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    if (project.id === projectIdQuery) {
      return project;
    }
  }
}

/**
 * @private
 * @type {Project}
 */
const freshProjectInstance = {
  id: "inbox",
  name: "Inbox",
  color: "none",
  image: "",
  isFavourite: false,
  sections: [{ id: "default", projectId: "inbox", name: "", tasks: [] }],
  view: "list",
};

/**
 * @public
 * @function resetProjects
 */
const resetProjects = () => {
  projects.length = 0;
  projects.push(freshProjectInstance);
};

/**
 * @public
 * @function useProjectsSample
 */
const useProjectsSample = () => {
  //TODO
};

export {
  createProject,
  readProject,
  updateProject,
  deleteProject,
  fetchProjects,
  findProjectById,
  resetProjects,
  useProjectsSample,
};
