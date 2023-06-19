//Make hamburger menu interactive
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerMenuItems = document.querySelector("#hamburger-menu-items");
const hamburgerMenuLines = document.getElementsByClassName("hamburger-menu-lines");
console.log(hamburgerMenuLines);

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenuItems.classList.toggle("hidden");
    var i;
    for (i = 0; i < hamburgerMenuLines.length; i = i + 1) {
        hamburgerMenuLines[i].classList.toggle("bg-white");
        hamburgerMenuLines[i].classList.toggle("bg-black");
    }
})