import placeholder from "../../assets/placeholders/welcome.json";

/**
 * @type {Project[]}
 */
let projects = [...placeholder.projects];

/**
 * @function getProjects
 * @returns {Project[]}
 */
const getProjects = () => projects;

/**
 *
 * @param {number} index
 * @param {Object} projectUpdates
 * @param {string} [projectUpdates.name]
 * @param {string} [projectUpdates.color]
 * @param {boolean} [projectUpdates.isFavourite]
 */
const setProject = (index, projectUpdates) => {
  projects[index] = { ...projects[index], ...projectUpdates };
};

export { getProjects, setProject };
