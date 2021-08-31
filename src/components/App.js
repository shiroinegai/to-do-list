const main = document.createElement("main");
main.setAttribute("id", "app");

const state = { projects: [{ default: [] }] };
const getState = () => state;
const setState = (newState) => {
  state = { ...state, ...newState };
};

const setTask = (projectName, task) => {
  const projects = state.projects;
  for (let i = 0; i < projects.length; i++) {
    const projectEntry = projects[i];
    if (projectEntry[projectName]) {
      projectEntry[projectName].push(task);
      return;
    }
  }
  projects.push({ [projectName]: [{ ...task }] });
};

export { main, getState, setState, setTask };
