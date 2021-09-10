import { chevronIcon } from "../Icons";

const createTaskNode = (task) => {
  const taskContainer = document.createElement("li");

  //TODO
  const taskItem = document.createElement("div");
  if (task.tasks.length > 0) {
    taskItem.append(chevronIcon());
    const subTasksNode = document.createElement("div");
    taskContainer.append(subTasksNode);
  }

  taskContainer.append(taskItem);

  return taskContainer;
};

export default createTaskNode;
