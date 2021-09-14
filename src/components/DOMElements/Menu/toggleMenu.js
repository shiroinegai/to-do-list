function toggleMenu() {
  document
    .querySelector(".js-Menu--toggleMenu")
    .classList.toggle("c-Menu--is-open");
  const menuButtonSVGs = document.querySelectorAll(
    ".c-MainNav__button:first-child svg"
  );
  menuButtonSVGs.forEach((svg) => svg.classList.toggle("u--hide"));
}

export default toggleMenu;
