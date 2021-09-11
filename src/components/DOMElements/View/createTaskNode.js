import { chevronIcon } from "../Icons";

const createTaskNode = (task) => {
  const taskContainer = document.createElement("li");

  //TODO
  const taskItem = document.createElement("div");
  if (task.tasks.length > 0) {
    taskItem.append(chevronIcon(), task.header);
    const subTasksNode = document.createElement("div");
    taskContainer.append(subTasksNode);
  } else {
    taskItem.append(task.header);
  }

  taskContainer.append(taskItem);

  return taskContainer;
};

export default createTaskNode;
