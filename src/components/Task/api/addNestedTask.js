/**
 * @function addNestedTask
 * @param {Section[]|Task[]} parentArray
 * @param {string} parentIdQuery
 * @param {Task} task
 */
const addNestedTask = (parentArray, parentIdQuery, task) => {
  if (parentArray.length) {
    for (let i = 0; i < parentArray.length; i++) {
      const parent = parentArray[i];
      if (parent.id === parentIdQuery) {
        parent.tasks.push(task);
        return;
      }
      addNestedTask(parent.tasks, parentIdQuery, task);
    }
  }
};

export default addNestedTask;
