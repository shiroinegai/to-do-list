const menuLinkColorDecor = (color) => {
  const menuLinkColorDecorNode = document.createElement("div");
  menuLinkColorDecorNode.classList.add("c-Menu__color-decor");
  menuLinkColorDecorNode.style.backgroundColor = `#${color}`;

  return menuLinkColorDecorNode;
};

export default menuLinkColorDecor;
