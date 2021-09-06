// Stores all application state
// All projects to be published to App

let state = { activeProjectId: "inbox", activeParentId: "default" };

const getActiveProjectId = () => state.activeProjectId;
const getActiveParentId = () => state.activeParentId;

export { getActiveProjectId, getActiveParentId };
