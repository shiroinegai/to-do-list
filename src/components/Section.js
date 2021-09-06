import { v4 as uuidv4 } from "uuid";
import { findProjectById } from "./old";

/**
 * Section factory function
 * @private
 * @function newSection
 * @param {string} projectId
 * @param {string} name
 * @returns {Section} Section object
 */
const newSection = (projectId, name = "") => {
  const id = uuidv4();
  const tasks = [];

  return { id, projectId, name, tasks };
};

/**
 * @public
 * @function createSection
 * @param {string} projectIdQuery
 * @param {string} name
 */
const createSection = (projectIdQuery, name) => {
  const section = newSection(projectIdQuery, name);
  const targetProject = findProjectById(projectIdQuery);
  targetProject.sections.push(section);
};

/**
 * @public
 * @function readSection
 * @param {string} projectIdQuery
 * @param {string} sectionIdQuery
 * @returns {Section}
 */
const readSection = (projectIdQuery, sectionIdQuery) => {
  return findSectionById(projectIdQuery, sectionIdQuery);
};

/**
 * @public
 * @function updateSection
 * @param {string} projectIdQuery
 * @param {string} sectionIdQuery
 * @param {Section} sectionUpdates
 */
const updateSection = (projectIdQuery, sectionIdQuery, sectionUpdates) => {
  let section = findSectionById(projectIdQuery, sectionIdQuery);
  section = { ...section, ...sectionUpdates };
};

/**
 * @public
 * @function deleteSection
 * @param {string} projectIdQuery
 * @param {string} sectionIdQuery
 */
const deleteSection = (projectIdQuery, sectionIdQuery) => {
  const targetProject = findProjectById(projectIdQuery);
  targetProject.sections = targetProject.sections.filter(
    (section) => section.id !== sectionIdQuery
  );
};

/**
 * @public
 * @function fetchSections
 * @param {string} projectIdQuery
 * @returns {Section[]}
 */
function fetchSections(projectIdQuery) {
  return findProjectById(projectIdQuery).sections;
}

/**
 * @public
 * @function findSectionById
 * @param {string} projectIdQuery
 * @param {string} sectionIdQuery
 * @returns {Section}
 */
function findSectionById(projectIdQuery, sectionIdQuery) {
  const targetProject = findProjectById(projectIdQuery);
  for (let i = 0; i < targetProject.sections.length; i++) {
    const section = targetProject.sections[i];
    if (section.id === sectionIdQuery) {
      return section;
    }
  }
}

export {
  createSection,
  readSection,
  updateSection,
  deleteSection,
  fetchSections,
  findSectionById,
};
