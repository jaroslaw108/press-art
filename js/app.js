const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

const menu = document.querySelector("nav");

function openMenuFunction() {
  this.classList.toggle("rotate");
  menu.classList.toggle("nav-row-open");
}

openMenu.addEventListener("click", openMenuFunction);

