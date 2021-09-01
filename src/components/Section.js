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

export { newSection };
