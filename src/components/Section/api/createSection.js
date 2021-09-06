import { getActiveProjectId } from "../../App";
import { v4 as uuidv4 } from "uuid";

const createSection = (name) => {
  const id = uuidv4();

  return { id, projectId: getActiveProjectId(), name, tasks: [] };
};

export default createSection;
