//Make hamburger menu interactive
const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const hamburgerMenuItems = document.querySelector("#hamburger-menu-items");
const hamburgerMenuList = document.querySelector("#hamburger-menu-ul");
const bodyElement = document.getElementsByTagName("BODY")[0];
const htmlElement = document.getElementsByTagName("HTML")[0];
const moonIcon = document.getElementById("moon-icon");
const moonIconMenu = document.getElementById("moon-icon-menu");
const introHeader = document.getElementById("intro-header");
const introSubHeader = document.getElementById("intro-subheader");



//Runs when hamburger menu is pressed on
function openMenu() {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    hamburgerMenuItems.classList.add('w-[100%]');
    // hamburgerMenuItems.classList.remove('w-0');
    bodyElement.classList.add('overflow-hidden');
    introHeader.classList.remove('z-10');
    introSubHeader.classList.remove('z-10');
}

//Runs when cross button is pressed on
function closeMenu() {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    // hamburgerMenuItems.classList.add('w-0');
    hamburgerMenuItems.classList.remove('w-[100%]');
    bodyElement.classList.remove('overflow-hidden');
    introHeader.classList.add('z-10');
    introSubHeader.classList.add('z-10');
}

//Runs to toggle dark and light modes
moonIcon.addEventListener("click", () =>
  htmlElement.classList.toggle("dark")
);
//Runs to toggle dark and light modes
moonIconMenu.addEventListener("click", () =>
  htmlElement.classList.toggle("dark")
);



/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}



