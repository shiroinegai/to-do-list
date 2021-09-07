const { getTaskIndex } = require("..");

/**
 * @function fetchAllTasks
 * @returns {Task[]}
 */
const fetchAllTasks = () => getTaskIndex();

export default fetchAllTasks;
