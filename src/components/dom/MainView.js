import { fetchProjectById } from "../Project/api";

const MainView = document.createElement("main");
MainView.classList.add("c-MainView");

// 1 Get Project ID
let project = fetchProjectById("welcome");

// 2 Render Project Name
const projectHeader = createProjectHeader(project.name);
MainView.append(projectHeader);

// 3 Render top level section
if (project.sections[0].tasks.length) {
  //TODO: Populate top level tasks
} else {
  MainView.append(createAddTaskButton());
}

// 4 Render named section
for (let i = 1; i < project.sections.length; i++) {
  const section = project.sections[i];
  MainView.append(createSectionHeader(section.name));
  // 5 Populate with tasks
  for (let j = 0; j < section.tasks.length; j++) {
    const task = section.tasks[j];
    MainView.append(task.header, task.description);
    for (let k = 0; k < task.tasks.length; k++) {
      const subTask = task.tasks[k];
      MainView.append(subTask.header, subTask.description);
    }
  }
}

function createProjectHeader(name) {
  const projectHeader = document.createElement("h1");
  projectHeader.classList.add("c-MainView__project-header");
  projectHeader.append(name);

  return projectHeader;
}

function createAddTaskButton() {
  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("c-MainView__add-task-button");
  addTaskButton.append("Add task");

  return addTaskButton;
}

function createSectionHeader(name) {
  const sectionHeader = document.createElement("h2");
  sectionHeader.classList.add("c-MainView__section-header");
  sectionHeader.append(name);

  return sectionHeader;
}

export default MainView;
