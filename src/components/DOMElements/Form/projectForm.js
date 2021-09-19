import createNode from "../common/createNode";

const projectForm = createNode(
  "form",
  { class: "c-Form" },
  createNode("h2", { class: "c-Form__header" }, "Add project"),
  createNode("label", { class: "c-Form__label", for: "projectName" }, "Name"),
  createNode("input", { type: "text", id: "projectName" }),
  createNode(
    "label",
    { class: "c-Form__label", for: "projectColor" },
    "Colour"
  ),
  createNode("input", { type: "color", id: "projectColor" }),
  createNode(
    "div",
    { class: "c-Form__favourite" },
    createNode("input", { type: "checkbox", id: "projectIsFavourite" }),
    createNode(
      "label",
      { class: "c-Form__label", for: "projectIsFavourite" },
      "Add to favourites"
    )
  )
);

export default projectForm;
