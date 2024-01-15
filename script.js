const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-item");

let showMenu = false;

toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    toggleBtn.classList.add("open");
    menu.classList.add("open");
    menuList.classList.add("open");
    menuItems.forEach(item => item.classList.add("open"));

    showMenu = true;
  } else {
    toggleBtn.classList.remove("open");
    menu.classList.remove("open");
    menuList.classList.remove("open");
    menuItems.forEach(item => item.classList.remove("open"));

    showMenu = false;
  }
}
