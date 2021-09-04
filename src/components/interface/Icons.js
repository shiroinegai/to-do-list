function makeIcon(d) {
  const xmlns = "http://www.w3.org/2000/svg";

  const iconSVG = document.createElementNS(xmlns, "svg");
  setIconSVGAttributes(iconSVG);

  const iconPath = document.createElementNS(xmlns, "path");
  setIconPathAttributes(iconPath, d);

  iconSVG.append(iconPath);

  return iconSVG;
}

function setIconSVGAttributes(iconSVG) {
  iconSVG.setAttributeNS(null, "fill", "none");
  iconSVG.setAttributeNS(null, "viewBox", "0 0 24 24");
  iconSVG.setAttributeNS(null, "stroke", "currentColor");
}

function setIconPathAttributes(iconPath, d) {
  iconPath.setAttributeNS(null, "stroke-linecap", "round");
  iconPath.setAttributeNS(null, "stroke-linejoin", "round");
  iconPath.setAttributeNS(null, "stroke-width", "1");
  iconPath.setAttributeNS(null, "d", d);
}

const menuIcon = makeIcon("M4 6h16M4 12h16M4 18h16");
const homeIcon = makeIcon(
  "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
);
const quickTaskIcon = makeIcon("M12 4v16m8-8H4");
const userProfileIcon = makeIcon(
  "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
);

export { menuIcon, homeIcon, quickTaskIcon, userProfileIcon };
