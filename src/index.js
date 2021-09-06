import { indexSections } from "./components/Section";
import { fetchAllSections } from "./components/Section/api";
import { createTask, addTask } from "./components/Task/api";
import "./styles/main.scss";

console.log("To Do List is running.");

indexSections();

console.table(fetchAllSections()[0].tasks);

const test = createTask({ header: "TEST NEW HEADER" });

addTask(test);

console.table(fetchAllSections()[0].tasks);
