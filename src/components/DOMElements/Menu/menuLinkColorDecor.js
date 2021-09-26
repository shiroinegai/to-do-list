import createNode from "../common/createNode";

const menuLinkColorDecor = (color) => {
  const menuLinkColorDecorNode = createNode("div", {
    class: "c-Menu__color-decor",
    style: `background-color: #${color}`,
  });

  return menuLinkColorDecorNode;
};

export default menuLinkColorDecor;
