import { v4 as uuidv4 } from "uuid";

/**
 * Task factory function
 * @param {string} parentId
 * @param {string} projectId
 * @param {string} header
 * @param {string} description
 * @param {number} startTime Defaults to Task creation time
 * @param {number} dueDate
 * @param {string[]} labels Initialises to empty array if none provided
 * @param {string} priority
 * @returns {Task} Task object
 */
const newTask = (
  parentId = "default",
  projectId = "default",
  header,
  description,
  startTime = Date.now(),
  dueDate,
  labels = [],
  priority
) => {
  const id = uuidv4();
  const endTime = null;
  const isComplete = false;
  const subTasks = [];

  return {
    id,
    parentId,
    projectId,
    header,
    description,
    startTime,
    endTime,
    dueDate,
    labels,
    priority,
    isComplete,
    subTasks,
  };
};

const createTask = () => {
  //TODO
};

const readTask = () => {
  //TODO
};
const updateTask = () => {
  //TODO
};
const deleteTask = () => {
  //TODO
};

export { newTask, createTask, readTask, updateTask, deleteTask };
