const xmlns = "http://www.w3.org/2000/svg";

function makeOutlineIcon(d) {
  const iconSVG = document.createElementNS(xmlns, "svg");
  setOutlineIconSVGAttributes(iconSVG);

  const iconPath = document.createElementNS(xmlns, "path");
  setOutlineIconPathAttributes(iconPath, d);

  iconSVG.append(iconPath);

  return iconSVG;
}

function setOutlineIconSVGAttributes(iconSVG) {
  iconSVG.setAttributeNS(null, "fill", "none");
  iconSVG.setAttributeNS(null, "viewBox", "0 0 24 24");
  iconSVG.setAttributeNS(null, "stroke", "currentColor");
}

function setOutlineIconPathAttributes(iconPath, d) {
  iconPath.setAttributeNS(null, "stroke-linecap", "round");
  iconPath.setAttributeNS(null, "stroke-linejoin", "round");
  iconPath.setAttributeNS(null, "stroke-width", "2");
  iconPath.setAttributeNS(null, "d", d);
}

function makeSolidIcon(d) {
  const iconSVG = document.createElementNS(xmlns, "svg");
  setSolidIconSVGAttributes(iconSVG);

  const iconPath = document.createElementNS(xmlns, "path");
  setSolidIconPathAttributes(iconPath, d);

  iconSVG.append(iconPath);

  return iconSVG;
}

function setSolidIconSVGAttributes(iconSVG) {
  iconSVG.setAttributeNS(null, "fill", "currentColor");
  iconSVG.setAttributeNS(null, "viewBox", "0 0 20 20");
}

function setSolidIconPathAttributes(iconPath, d) {
  iconPath.setAttributeNS(null, "clip-rule", "evenodd");
  iconPath.setAttributeNS(null, "fill-rule", "evenodd");
  iconPath.setAttributeNS(null, "d", d);
}

const menuIcon = () => makeOutlineIcon("M4 6h16M4 12h16M4 18h16");
const crossIcon = () => makeOutlineIcon("M6 18L18 6M6 6l12 12");
const homeIcon = () =>
  makeOutlineIcon(
    "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  );
const quickTaskIcon = () => makeOutlineIcon("M12 4v16m8-8H4");
const userProfileIcon = () =>
  makeOutlineIcon(
    "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  );
const inboxIcon = () =>
  makeOutlineIcon(
    "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
  );
const chevronIcon = () =>
  makeSolidIcon(
    "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
  );
const hashtagIcon = () =>
  makeSolidIcon(
    "M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
  );
const checkIcon = () =>
  makeSolidIcon(
    "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  );
const plusIcon = () =>
  makeSolidIcon(
    "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
  );

export {
  menuIcon,
  crossIcon,
  homeIcon,
  quickTaskIcon,
  userProfileIcon,
  inboxIcon,
  chevronIcon,
  hashtagIcon,
  checkIcon,
  plusIcon,
};
