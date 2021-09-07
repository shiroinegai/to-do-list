import { indexSections } from "./components/Section";
import { fetchAllSections } from "./components/Section/api";
import { getTaskIndex, indexTasks } from "./components/Task";
import { updateTask } from "./components/Task/api";
import fetchAllTasks from "./components/Task/api/fetchAllTasks";
import "./styles/main.scss";

console.log("To Do List is running.");

indexSections();

updateTask("welcome-t0-t0", { header: "UPDATED HEADER" });

console.log(fetchAllSections());

indexTasks();

console.log(fetchAllTasks());
