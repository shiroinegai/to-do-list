const projectForm = () => {
  //TODO
  const form = document.createElement("form");
  form.classList.add("c-Form");

  const header = document.createElement("h2");
  header.classList.add("c-Form__header");
  header.append("Add project");

  const nameLabel = document.createElement("label");
  nameLabel.classList.add("c-Form__label");
  nameLabel.setAttribute("for", "projectName");
  nameLabel.append("Name");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "projectName");

  const colorLabel = document.createElement("label");
  colorLabel.classList.add("c-Form__label");
  colorLabel.setAttribute("for", "projectColor");
  colorLabel.append("Colour");
  const colorInput = document.createElement("input");
  colorInput.setAttribute("type", "color");
  colorInput.setAttribute("id", "projectColor");

  const favourite = document.createElement("div");
  favourite.classList.add("c-Form__favourite");
  const favouriteLabel = document.createElement("label");
  favouriteLabel.classList.add("c-Form__label");
  favouriteLabel.setAttribute("for", "projectIsFavourite");
  favouriteLabel.append("Add to favourites");
  const favouriteInput = document.createElement("input");
  favouriteInput.setAttribute("type", "checkbox");
  favouriteInput.setAttribute("id", "projectIsFavourite");
  favourite.append(favouriteInput, favouriteLabel);

  form.append(header, nameLabel, nameInput, colorLabel, colorInput, favourite);

  return form;
};

export default projectForm;
