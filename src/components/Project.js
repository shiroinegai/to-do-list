import { v4 as uuidv4 } from "uuid";
import { newSection } from "./Section";

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
  const sections = [newSection(id)];

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
 * @param {string} id
 * @returns {Project}
 */
const readProject = (id) => {
  return findProjectById(id);
};

/**
 * @public
 * @function updateProject
 * @param {string} id
 * @param {Project} projectUpdates
 */
const updateProject = (id, projectUpdates) => {
  let project = findProjectById(id);
  project = { ...project, ...projectUpdates };
};

/**
 * @public
 * @function deleteProject
 * @param {string} id
 */
const deleteProject = (id) => {
  projects = projects.filter((project) => project.id === id);
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
 * @private
 * @function findProjectById
 * @param {string} id
 * @returns {Project}
 */
function findProjectById(id) {
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    if (project.id === id) {
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
  sections: [
    { id: "inbox-top-section", projectId: "inbox", name: "", tasks: [] },
  ],
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
  resetProjects,
  useProjectsSample,
};
