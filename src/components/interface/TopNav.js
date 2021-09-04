import { menuIcon, homeIcon, quickTaskIcon, userProfileIcon } from "./Icons";

const TopNav = document.createElement("nav");

const menu = document.createElement("button");
menu.append(menuIcon);

const home = document.createElement("button");
home.append(homeIcon);

const quickTask = document.createElement("button");
quickTask.append(quickTaskIcon);

const userProfile = document.createElement("button");
userProfile.append(userProfileIcon);

TopNav.append(menu, home, quickTask, userProfile);

export default TopNav;
