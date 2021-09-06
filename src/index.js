import "./styles/main.scss";

import {
  createProject,
  addProject,
  fetchAllProjects,
  fetchProjectById,
} from "./components/Project";

console.log("To Do List is running.");

let test = createProject({ name: "Testing" });

addProject(test);

console.log(fetchProjectById("about"));

console.log(fetchAllProjects());
