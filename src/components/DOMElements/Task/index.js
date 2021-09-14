import makeCollapsible from "../common/makeCollapsible";

import { checkIcon } from "../Icons";

const taskNode = (task) => {
  const taskItem = document.createElement("li");
  taskItem.classList.add("c-Task");

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("c-Task__container");

  const taskCheckButton = document.createElement("button");
  taskCheckButton.classList.add("c-Task__check-button");

  const taskHeader = document.createElement("h3");
  taskHeader.classList.add("c-Task__header");

  const taskDescription = document.createElement("p");
  taskDescription.classList.add("c-Task__description");

  const taskDetails = document.createElement("div");
  taskDetails.classList.add("c-Task__details");

  const taskChildren = document.createElement("div");
  taskChildren.classList.add("c-Task__children");

  taskCheckButton.append(checkIcon());
  taskHeader.append(task.header);
  taskContainer.append(taskCheckButton, taskHeader);

  if (task.description) {
    taskDescription.append(task.description);
    taskContainer.append(taskDescription);
  }

  if (task.tasks.length || task.dueDate || task.labels.length) {
    if (task.tasks.length) {
      taskDetails.append(task.tasks.length);
    }
    if (task.dueDate) {
      taskDetails.append(task.dueDate);
    }
    if (task.labels.length) {
      for (let i = 0; i < task.labels.length; i++) {
        const label = task.labels[i];
        taskDetails.append(label);
      }
    }
  }

  taskItem.prepend(taskContainer);

  if (task.tasks.length) {
    for (let i = 0; i < task.tasks.length; i++) {
      const subTask = task.tasks[i];
      taskChildren.append(taskNode(subTask));
    }
    taskItem.append(taskChildren);

    makeCollapsible(taskItem, taskChildren);
  }

  return taskItem;
};

export default taskNode;
