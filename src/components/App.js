const main = document.createElement("main");
main.setAttribute("id", "app");

const state = { projects: [{ default: [] }] };
const getState = () => state;
const setState = (newState) => {
  state = { ...state, ...newState };
};

const setTask = (action, projectRef, task) => {
  const projects = state.projects;

  switch (action) {
    case "create":
      for (let i = 0; i < projects.length; i++) {
        const projectEntry = projects[i];
        if (projectEntry[projectRef]) {
          projectEntry[projectRef].push(task);
          return;
        }
      }
      projects.push({ [projectRef]: [task] });
      break;

    case "read":
      for (let i = 0; i < projects.length; i++) {
        const projectEntry = projects[i];
        if (projectEntry[projectRef]) {
          return projectEntry;
        }
      }
      break;

    default:
      break;
  }
};

export { main, getState, setState, setTask };
