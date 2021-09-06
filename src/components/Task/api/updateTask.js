const { fetchTaskById } = require(".");
const { getActiveProjectId } = require("../../App");
const { fetchProjectById } = require("../../Project/api");

const updateTask = (taskIdQuery, taskUpdates) => {
  const targetProjectId = getActiveProjectId();
  const targetProject = fetchProjectById(targetProjectId);
  let task = fetchTaskById(targetProject.sections, taskIdQuery);
  task = { ...task, ...taskUpdates };
};

export default updateTask;
