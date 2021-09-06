import { getActiveParentId, getActiveProjectId } from "../../App";
import { fetchProjectById } from "../../Project/api";
import { deleteNestedTask } from ".";

const deleteTask = (taskIdQuery) => {
  const targetProjectId = getActiveProjectId();
  const targetParentId = getActiveParentId();
  const targetProject = fetchProjectById(targetProjectId);
  deleteNestedTask(targetProject.sections, targetParentId, taskIdQuery);
};

export default deleteTask;
