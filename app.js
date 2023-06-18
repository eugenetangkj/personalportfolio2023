//Make hamburger menu interactive
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerMenuItems = document.querySelector("#hamburger-menu-items");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenuItems.classList.toggle("hidden");
    hamburgerMenu.classList.toggle("bg-white");
})