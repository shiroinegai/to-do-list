import createNode from "../common/createNode";
import makeCollapsible from "../common/makeCollapsible";

import { checkIcon } from "../Icons";

const taskNode = (task) => {
  const taskItem = createNode("li", { class: "c-Task", "data-uuid": task.id });

  const taskContainer = createNode("div", { class: "c-Task__container" });

  const taskCheckButton = createNode(
    "button",
    {
      class: "c-Task__check-button",
    },
    checkIcon()
  );

  const taskHeader = createNode("h3", { class: "c-Task__header" }, task.header);

  const taskDescription = createNode("p", { class: "c-Task__description" });

  const taskDetails = createNode("div", { class: "c-Task__details" });

  const taskChildren = createNode("div", { class: "c-Task__children" });

  taskContainer.append(taskCheckButton, taskHeader);

  if (task.description) {
    taskDescription.append(task.description);
    taskContainer.append(taskDescription);
  }

  if (task.tasks.length || task.dueDate || task.labels.length) {
    if (task.tasks.length) {
      taskDetails.append(
        `${task.tasks.length} Sub-task${task.tasks.length > 1 ? "s" : ""}`
      );
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
    taskContainer.append(taskDetails);
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
