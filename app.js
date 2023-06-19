//Make hamburger menu interactive
const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const hamburgerMenuItems = document.querySelector("#hamburger-menu-items");
const hamburgerMenuList = document.querySelector("#hamburger-menu-ul");



function openMenu() {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    hamburgerMenuItems.classList.add('w-[100%]');
    hamburgerMenuItems.classList.remove('w-0');
    // hamburgerMenuList.classList.remove('mr-96');



}

function closeMenu() {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    hamburgerMenuItems.classList.add('w-0');
    hamburgerMenuItems.classList.remove('w-[100%]');
    // hamburgerMenuList.classList.add('mr-96');


}