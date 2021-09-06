import { getActiveProjectId } from "../../App";
import { v4 as uuidv4 } from "uuid";

/**
 * @function createSection
 * @param {string} name
 * @returns {Section}
 */
const createSection = (name) => {
  return {
    id: uuidv4(),
    projectId: getActiveProjectId(),
    name,
    tasks: [],
  };
};

export default createSection;
