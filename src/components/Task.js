import { v4 as uuidv4 } from "uuid";
import { fetchSections } from "./Section";

/**
 * Task factory function
 * @private
 * @function newTask
 * @param {string} parentId
 * @param {string} projectId
 * @param {string} header
 * @param {string} description
 * @param {number} startTime Defaults to Task creation time
 * @param {number} dueDate
 * @param {string[]} labels Initialises to empty array if none provided
 * @param {number} priority
 * @returns {Task} Task object
 */
const newTask = (
  parentId = "default",
  projectId = "default",
  header = "",
  description = "",
  startTime = Date.now(),
  dueDate = null,
  labels = [],
  priority = null
) => {
  const id = uuidv4();
  const endTime = null;
  const isComplete = false;
  const tasks = [];

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
    tasks,
  };
};

/**
 * @public
 * @function createTask
 * @param {string} parentId
 * @param {string} projectId
 * @param {string} header
 * @param {string} description
 * @param {number} startTime
 * @param {number} dueDate
 * @param {string[]} labels
 * @param {number} priority
 */
const createTask = (
  parentId,
  projectId,
  header,
  description,
  startTime,
  dueDate,
  labels,
  priority
) => {
  const task = newTask(
    parentId,
    projectId,
    header,
    description,
    startTime,
    dueDate,
    labels,
    priority
  );
  const sections = fetchSections(projectId);
  nestTask(sections, parentId, task);
};

const readTask = (projectIdQuery, parentIdQuery, taskIdQuery) => {
  //TODO
};

const updateTask = () => {
  //TODO
};

const deleteTask = () => {
  //TODO
};

/**
 * @private
 * @function nestTask
 * @param {Section[]|Task[]} parentArray
 * @param {string} parentIdQuery
 * @param {Task} task
 */
function nestTask(parentArray, parentIdQuery, task) {
  if (parentArray.length) {
    for (let i = 0; i < parentArray.length; i++) {
      const parent = parentArray[i];
      if (parent.id === parentIdQuery) {
        parent.tasks.push(task);
        return;
      }
      nestTask(parent.tasks, parentIdQuery, task);
    }
  }
}

/**
 * @private
 * @function findTaskById
 * @param {String} projectIdQuery
 * @param {String} parentIdQuery
 * @param {string} taskIdQuery
 * @returns {Task}
 */
function findTaskById(projectIdQuery, parentIdQuery, taskIdQuery) {
  //TODO
}

export { createTask, readTask, updateTask, deleteTask };
