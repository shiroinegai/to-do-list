import { plusIcon } from "../Icons";

const addTaskButtonNode = () => {
  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("c-View__addTaskButton");
  addTaskButton.append(plusIcon(), "Add task");

  return addTaskButton;
};

export default addTaskButtonNode;
