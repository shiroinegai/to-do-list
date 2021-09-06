import { getActiveProjectId } from "../../App";
import { v4 as uuidv4 } from "uuid";

/**
 * @function createSection
 * @param {string} name
 * @returns {Section}
 */
const createSection = (name) => {
  const id = uuidv4();

  return { id, projectId: getActiveProjectId(), name, tasks: [] };
};

export default createSection;
