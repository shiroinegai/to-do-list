import { v4 as uuidv4 } from "uuid";
import { getActiveParentId, getActiveProjectId } from "../../App";

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
