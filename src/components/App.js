const main = document.createElement("main");
main.setAttribute("id", "app");

const state = { projects: [{ default: [] }] };
const getState = () => state;
const setState = (newState) => {
  state = { ...state, ...newState };
};

export { main, getState, setState };
