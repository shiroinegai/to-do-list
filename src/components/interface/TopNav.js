import { menuIcon } from "./Icons";

const TopNav = document.createElement("nav");

const menu = document.createElement("button");
menu.append(menuIcon);

const home = document.createElement("button");
const quickTask = document.createElement("button");
const userProfile = document.createElement("button");

TopNav.append(menu, home, quickTask, userProfile);

export default TopNav;
