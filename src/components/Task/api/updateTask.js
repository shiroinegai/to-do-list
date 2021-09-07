import { updateNestedTask } from ".";

const { getActiveProjectId } = require("../../App");
const { fetchProjectById } = require("../../Project/api");

/**
 * @function updateTask
 * @param {string} taskIdQuery
 * @param {Object} taskUpdates
 * @param {string} [taskUpdates.header]
 * @param {string} [taskUpdates.description]
 * @param {number} [taskUpdates.dueDate]
 * @param {string[]} [taskUpdates.labels]
 * @param {number} [taskUpdates.priority]
 * @param {boolean} [taskUpdates.isComplete]
 * @param {Task[]} [taskUpdates.tasks]
 */
const updateTask = (taskIdQuery, taskUpdates) => {
  const targetProjectId = getActiveProjectId();
  const targetProject = fetchProjectById(targetProjectId);
  updateNestedTask(targetProject.sections, taskIdQuery, taskUpdates);
};

export default updateTask;
