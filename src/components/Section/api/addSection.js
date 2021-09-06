import { getActiveProjectId } from "../../App";
import { fetchProjectById, updateProject } from "../../Project/api";

const addSection = (section) => {
  const targetProjectId = getActiveProjectId();
  const targetProject = fetchProjectById(targetProjectId);
  updateProject(targetProjectId, {
    sections: [...targetProject.sections, section],
  });
};

export default addSection;
