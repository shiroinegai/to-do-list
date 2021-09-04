import {
  menuIcon,
  crossIcon,
  homeIcon,
  quickTaskIcon,
  userProfileIcon,
} from "./Icons";

const MainNav = document.createElement("nav");
MainNav.classList.add("c-MainNav");

const menu = document.createElement("button");
menu.addEventListener("click", toggleMenu);
menu.classList.add("c-MainNav__button");
crossIcon.classList.add("u--hide");
menu.append(menuIcon);
menu.append(crossIcon);

const home = document.createElement("button");
home.classList.add("c-MainNav__button");
home.append(homeIcon);

const quickTask = document.createElement("button");
quickTask.classList.add("c-MainNav__button");
quickTask.append(quickTaskIcon);

const userProfile = document.createElement("button");
userProfile.classList.add("c-MainNav__button");
userProfile.append(userProfileIcon);

MainNav.append(menu, home, quickTask, userProfile);

function toggleMenu() {
  document
    .querySelector(".js-Menu--toggleMenu")
    .classList.toggle("c-Menu--is-open");
  const menuButtonSVGs = document.querySelectorAll(
    ".c-MainNav__button:first-child svg"
  );
  menuButtonSVGs.forEach((svg) => svg.classList.toggle("u--hide"));
}

export default MainNav;
