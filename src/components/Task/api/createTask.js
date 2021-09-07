import { v4 as uuidv4 } from "uuid";
import { getActiveParentId, getActiveProjectId } from "../../App";

/**
 * @function createTask
 * @param {Object} taskInput
 * @param {string} taskInput.header
 * @param {string} [taskInput.description]
 * @param {number} [taskInput.dueDate]
 * @param {string[]} [taskInput.labels]
 * @param {number} [taskInput.priority]
 * @returns {Task}
 */
const createTask = ({
  header,
  description = "",
  dueDate = null,
  labels = [],
  priority = null,
}) => {
  return {
    id: uuidv4(),
    projectId: getActiveProjectId(),
    parentId: getActiveParentId(),
    header,
    description,
    dueDate,
    labels,
    priority,
    isComplete: false,
    tasks: [],
  };
};

export default createTask;
