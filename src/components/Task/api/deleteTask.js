import { getActiveParentId, getActiveProjectId } from "../../App";
import { fetchProjectById } from "../../Project/api";
import { deleteNestedTask } from ".";

/**
 * @function deleteTask
 * @param {string} taskIdQuery
 */
const deleteTask = (taskIdQuery) => {
  const targetProjectId = getActiveProjectId();
  const targetParentId = getActiveParentId();
  const targetProject = fetchProjectById(targetProjectId);
  deleteNestedTask(targetProject.sections, targetParentId, taskIdQuery);
};

export default deleteTask;
