import listItem from "../common/listItem";
import makeCollapsible from "../common/makeCollapsible";
import { checkIcon, chevronIcon } from "../Icons";

const createTaskNode = (task) => {
  const taskContainer = document.createElement("li");

  const taskCheckButton = document.createElement("button");
  taskCheckButton.classList.add("c-View__task-check-button");
  taskCheckButton.append(checkIcon());

  const taskItem = document.createElement("div");
  taskItem.classList.add("c-View__task");
  if (task.tasks.length > 0) {
    const subTasksHeader = listItem("div", task.header);
    subTasksHeader.classList.add("c-View__task-header");
    subTasksHeader.prepend(chevronIcon(), taskCheckButton);
    const subTasksContent = document.createElement("div");
    subTasksContent.classList.add("c-View__task-content");
    for (let i = 0; i < task.tasks.length; i++) {
      const subTask = task.tasks[i];
      subTasksContent.append(createTaskNode(subTask));
    }
    makeCollapsible(taskItem, subTasksHeader, subTasksContent);
    taskItem.append(subTasksHeader, subTasksContent);
  } else {
    taskItem.append(taskCheckButton, listItem("div", task.header));
  }

  taskContainer.append(taskItem);

  return taskContainer;
};

export default createTaskNode;
