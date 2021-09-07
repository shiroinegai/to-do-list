// Stores all application state
// All projects to be published to App

let state = { activeProjectId: "welcome", activeParentId: "welcome-t0" };

const getActiveProjectId = () => state.activeProjectId;
const getActiveParentId = () => state.activeParentId;

export { getActiveProjectId, getActiveParentId };
