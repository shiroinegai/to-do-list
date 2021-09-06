const deleteNestedTask = (parentArray, parentIdQuery, taskIdQuery) => {
  if (parentArray.length) {
    for (let i = 0; i < parentArray.length; i++) {
      const parent = parentArray[i];
      if (parent.id === parentIdQuery) {
        parent.tasks = parent.tasks.filter((task) => task.id !== taskIdQuery);
      }
      deleteNestedTask(parent.tasks, parentIdQuery, taskIdQuery);
    }
  }
};

export default deleteNestedTask;
