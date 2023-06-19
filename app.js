//Make hamburger menu interactive
const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const hamburgerMenuItems = document.querySelector("#hamburger-menu-items");
const hamburgerMenuList = document.querySelector("#hamburger-menu-ul");
const bodyElement = document.getElementsByTagName("BODY")[0];

//Runs when hamburger menu is pressed on
function openMenu() {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    hamburgerMenuItems.classList.add('w-[100%]');
    hamburgerMenuItems.classList.remove('w-0');
    bodyElement.classList.add('overflow-hidden');
}

//Runs when cross button is pressed on
function closeMenu() {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    hamburgerMenuItems.classList.add('w-0');
    hamburgerMenuItems.classList.remove('w-[100%]');
    bodyElement.classList.remove('overflow-hidden');
}

