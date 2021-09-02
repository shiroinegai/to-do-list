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
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (section.id === parentId) {
      section.tasks.push(task);
      return;
    }
    if (section.tasks.length) {
      for (let j = 0; j < section.tasks.length; j++) {
        const taskItem = section.tasks[j];
        if (taskItem.id === parentId) {
          taskItem.subTasks.push(task);
          return;
        }
        addTaskToSubTasks(taskItem.subTasks, parentId, task);
      }
    }
  }
};

/**
 * @private
 * @function addTaskToSubTasks
 * @param {Task[]} subTasksArray
 * @param {string} parentIdQuery
 * @param {Task} task
 */
function addTaskToSubTasks(subTasksArray, parentIdQuery, task) {
  if (subTasksArray.length) {
    for (let i = 0; i < subTasksArray.length; i++) {
      const subTask = subTasksArray[i];
      if (subTask.id === parentIdQuery) {
        subTask.subTasks.push(task);
        return;
      }
      addTaskToSubTasks(subTask.subTasks, parentIdQuery, task);
    }
  }
}

const readTask = () => {
  //TODO
};

const updateTask = () => {
  //TODO
};

const deleteTask = () => {
  //TODO
};

export { createTask, readTask, updateTask, deleteTask };
