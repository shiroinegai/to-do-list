import { getSectionIndex } from "../Section";

let taskIndex = [];

const getTaskIndex = () => taskIndex;

const indexTasks = () => {
  taskIndex = [];
  const sectionIndex = getSectionIndex();
  indexNestedTask(sectionIndex);
  taskIndex = Array.from(new Set(taskIndex));
};

const indexNestedTask = (parentArray) => {
  if (parentArray.length) {
    for (let i = 0; i < parentArray.length; i++) {
      const parent = parentArray[i];
      for (let j = 0; j < parent.tasks.length; j++) {
        taskIndex.push(parent.tasks[j]);
      }
      indexNestedTask(parent.tasks);
    }
  }
};

export { getTaskIndex, indexTasks };
