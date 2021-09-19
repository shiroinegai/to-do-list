const xmlns = "http://www.w3.org/2000/svg";

const outlineSVGAttributes = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
};

const outlinePathAttributes = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
};

const solidSVGAttributes = {
  fill: "currentColor",
  viewBox: "0 0 20 20",
};

const solidPathAttributes = {
  "clip-rule": "evenodd",
  "fill-rule": "evenodd",
};

const createIcon = (type, d) => {
  const iconSVG = document.createElementNS(xmlns, "svg");
  const iconPath = document.createElementNS(xmlns, "path");

  switch (type) {
    case "outline":
      for (let key in outlineSVGAttributes) {
        iconSVG.setAttributeNS(null, key, outlineSVGAttributes[key]);
      }
      for (let key in outlinePathAttributes) {
        iconPath.setAttributeNS(null, key, outlinePathAttributes[key]);
      }
      break;

    case "solid":
      for (let key in solidSVGAttributes) {
        iconSVG.setAttributeNS(null, key, solidSVGAttributes[key]);
      }
      for (let key in solidPathAttributes) {
        iconPath.setAttributeNS(null, key, solidPathAttributes[key]);
      }
      break;

    default:
      break;
  }

  iconPath.setAttributeNS(null, "d", d);

  iconSVG.append(iconPath);

  return iconSVG;
};

export default createIcon;
