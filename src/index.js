import { main, getState, setState } from "./components/App";
import {
  createTask,
  readTask,
  updateTask,
  deleteTask,
} from "./components/Task";

import "./styles/main.scss";

console.log("To Do List is running.");

document.getElementById("root").append(main);

// rudimentary test case
createTask();
console.log(getState());
createTask("Test");
createTask("Test");
console.log(getState());
