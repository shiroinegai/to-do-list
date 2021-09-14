import View from ".";

const updateView = (node) => {
  View.innerText = "";
  View.append(node);
};

export default updateView;
