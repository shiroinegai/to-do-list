/**
 * Task
 * @typedef {Object} Task
 * @property {string} id Task ID
 * @property {string} parentId ID of immediate parent (Section/Task)
 * @property {string} projectId ID of parent Project
 * @property {string} header Task header text
 * @property {string} description Task description text
 * @property {number} startTime Task start time
 * @property {number} endTime Task end time
 * @property {number} dueDate Task due date
 * @property {string[]} labels Array of labels for Task
 * @property {number} priority Task priority
 * @property {boolean} isComplete Indicate if Task is complete
 * @property {Task[]} tasks Array of Task children
 */
