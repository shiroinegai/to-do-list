/**
 * @function updateNestedTask
 * @param {Section[]|Task[]} parentArray
 * @param {string} taskIdQuery
 * @param {Object} taskUpdates
 */
const updateNestedTask = (parentArray, taskIdQuery, taskUpdates) => {
  if (parentArray.length) {
    for (let i = 0; i < parentArray.length; i++) {
      const parent = parentArray[i];
      for (let j = 0; j < parent.tasks.length; j++) {
        if (parent.tasks[j].id === taskIdQuery) {
          parent.tasks[j] = { ...parent.tasks[j], ...taskUpdates };
        }
      }
      updateNestedTask(parent.tasks, taskIdQuery, taskUpdates);
    }
  }
};

export default updateNestedTask;
