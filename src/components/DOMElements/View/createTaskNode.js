import listItem from "../common/listItem";
import makeCollapsible from "../common/makeCollapsible";
import { chevronIcon } from "../Icons";

const createTaskNode = (task) => {
  const taskContainer = document.createElement("li");

  //TODO
  const taskItem = document.createElement("div");
  if (task.tasks.length > 0) {
    const subTasksHeader = listItem("div", task.header);
    subTasksHeader.prepend(chevronIcon());
    const subTasksContent = document.createElement("div");
    for (let i = 0; i < task.tasks.length; i++) {
      const subTask = task.tasks[i];
      subTasksContent.append(createTaskNode(subTask));
    }
    makeCollapsible(taskItem, subTasksHeader, subTasksContent);
    taskItem.append(subTasksHeader, subTasksContent);
  } else {
    taskItem.append(task.header);
  }

  taskContainer.append(taskItem);

  return taskContainer;
};

export default createTaskNode;
