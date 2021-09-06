// Stores all application state
// All projects to be published to App

let state = { activeProjectId: "inbox" };

const getActiveProjectId = () => state.activeProjectId;

export { getActiveProjectId };
