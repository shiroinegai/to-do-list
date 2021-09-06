const fetchTaskById = (parentArray, taskIdQuery) => {
  if (parentArray.length) {
    for (let i = 0; i < parentArray.length; i++) {
      const parent = parentArray[i];
      for (let j = 0; j < parent.tasks.length; j++) {
        const task = parent.tasks[j];
        if (task.id === taskIdQuery) {
          return task;
        }
        fetchTaskById(parent.tasks, taskIdQuery);
      }
    }
  }
};

export default fetchTaskById;
