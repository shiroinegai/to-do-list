import { setTask } from "./App";
import { v4 as uuidv4 } from "uuid";

const createTask = (
  projectRef = "default",
  header = "What to do...",
  description = "Still pondering...",
  startTime = 14529165,
  endTime = 189016257
) => {
  const task = {
    id: uuidv4(),
    projectRef,
    header,
    description,
    startTime,
    endTime,
  };

  setTask("create", projectRef, task);
};
const readTask = (projectRef) => {
  //TODO
  return setTask("read", projectRef);
};
const updateTask = () => {
  //TODO
};
const deleteTask = () => {
  //TODO
};

export { createTask, readTask, updateTask, deleteTask };
