const state = {};
const getState = () => state;
const setState = (newState) => {
  state = { ...state, ...newState };
};

export { getState, setState };
