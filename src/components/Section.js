import { v4 as uuidv4 } from "uuid";

/**
 * Section factory function
 * @param {string} projectId
 * @param {string} name
 * @returns {Section} Section object
 */
const newSection = (projectId, name = "Untitled") => {
  const id = uuidv4();
  const tasks = [];

  return { id, projectId, name, tasks };
};

const createSection = () => {
  //TODO
};

const readSection = () => {
  //TODO
};

const updateSection = () => {
  //TODO
};

const deleteSection = () => {
  //TODO
};

export { newSection, createSection, readSection, updateSection, deleteSection };
