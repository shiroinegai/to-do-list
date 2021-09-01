import { v4 as uuidv4 } from "uuid";
import { newSection } from "./Section";

/**
 * Project factory function
 * @param {string} name
 * @param {string} color
 * @param {string} image
 * @param {boolean} isFavourite
 * @param {string} view
 * @returns {Project} Project object
 */
const newProject = (name, color, image = "", isFavourite, view = "list") => {
  const id = uuidv4();
  const sections = [newSection()];

  return { id, name, color, image, isFavourite, sections, view };
};

export { newProject };
