const xmlns = "http://www.w3.org/2000/svg";

const menuIcon = document.createElementNS(xmlns, "svg");
menuIcon.setAttributeNS(null, "viewBox", "0 0 24 24");
menuIcon.setAttributeNS(null, "stroke", "currentColor");
const menuPath = document.createElementNS(xmlns, "path");
menuPath.setAttributeNS(null, "stroke-linecap", "round");
menuPath.setAttributeNS(null, "stroke-linejoin", "round");
menuPath.setAttributeNS(null, "stroke-width", "2");
menuPath.setAttributeNS(null, "d", "M4 6h16M4 12h16M4 18h16");
menuIcon.append(menuPath);

export { menuIcon };
