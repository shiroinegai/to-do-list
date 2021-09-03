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

/**
 * @public
 * @function readTask
 * @param {string} projectIdQuery
 * @param {string} taskIdQuery
 * @returns {Task}
 */
const readTask = (projectIdQuery, taskIdQuery) => {
  const sections = fetchSections(projectIdQuery);
  return findTaskById(sections, taskIdQuery);
};

/**
 * @public
 * @function updateTask
 * @param {string} projectIdQuery
 * @param {string} taskIdQuery
 * @param {Task} taskUpdates
 */
const updateTask = (projectIdQuery, taskIdQuery, taskUpdates) => {
  const sections = fetchSections(projectIdQuery);
  let task = findTaskById(sections, taskIdQuery);
  task = { ...task, ...taskUpdates };
};

/**
 * @public
 * @function deleteTask
 * @param {string} projectIdQuery
 * @param {string} parentIdQuery
 * @param {string} taskIdQuery
 */
const deleteTask = (projectIdQuery, parentIdQuery, taskIdQuery) => {
  const sections = fetchSections(projectIdQuery);
  removeNestedTask(sections, parentIdQuery, taskIdQuery);
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
 * @function removeNestedTask
 * @param {Section[]|Task[]} parentArray
 * @param {string} parentIdQuery
 * @param {string} taskIdQuery
 */
function removeNestedTask(parentArray, parentIdQuery, taskIdQuery) {
  if (parentArray.length) {
    for (let i = 0; i < parentArray.length; i++) {
      const parent = parentArray[i];
      if (parent.id === parentIdQuery) {
        parent.tasks = parent.tasks.filter((task) => task.id !== taskIdQuery);
      }
      removeNestedTask(parent.tasks, parentIdQuery, taskIdQuery);
    }
  }
}

/**
 * @private
 * @function findTaskById
 * @param {Section[]|Task[]} parentArray
 * @param {string} taskIdQuery
 * @returns {Task}
 */
function findTaskById(parentArray, taskIdQuery) {
  if (parentArray.length) {
    for (let i = 0; i < parentArray.length; i++) {
      const parent = parentArray[i];
      for (let j = 0; j < parent.tasks.length; j++) {
        const task = parent.tasks[j];
        if (task.id === taskIdQuery) {
          return task;
        }
        findTaskById(parent.tasks, taskIdQuery);
      }
    }
  }
}

export { createTask, readTask, updateTask, deleteTask };
