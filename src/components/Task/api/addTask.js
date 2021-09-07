import { getActiveParentId, getActiveProjectId } from "../../App";
import { fetchProjectById } from "../../Project/api";
import { addNestedTask } from ".";

/**
 * @function addTask
 * @param {Task} task
 */
const addTask = (task) => {
  const targetProjectId = getActiveProjectId();
  const targetParentId = getActiveParentId();
  const targetProject = fetchProjectById(targetProjectId);
  addNestedTask(targetProject.sections, targetParentId, task);
};

export default addTask;
