import { v4 as uuidv4 } from "uuid";

/**
 * Project factory
 * @function createProject
 * @param {{name: string, color?: string, isFavourite?: boolean}} projectInput User input stored in object
 * @returns {Project} Project object
 */
const createProject = ({ name, color = "", isFavourite = false }) => {
  const id = uuidv4();
  const sectionId = uuidv4();
  const sections = [{ id: sectionId, projectId: id, name: "", tasks: [] }];

  return { id, name, color, isFavourite, sections };
};

export default createProject;
