import { setTask } from "./App";

const createTask = (
  projectName = "default",
  header = "What to do...",
  description = "Still pondering...",
  startTime = 14529165,
  endTime = 189016257
) => {
  //TODO
  const task = { header, description, startTime, endTime };

  setTask(projectName, task);
};
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
