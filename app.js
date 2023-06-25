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
    // hamburgerMenuItems.classList.remove('w-0');
    bodyElement.classList.add('overflow-hidden');
}

//Runs when cross button is pressed on
function closeMenu() {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    // hamburgerMenuItems.classList.add('w-0');
    hamburgerMenuItems.classList.remove('w-[100%]');
    bodyElement.classList.remove('overflow-hidden');
}

window.onscroll = function() {
  scroll();
};

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

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

