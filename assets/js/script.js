'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */
const elemToggleFunc = function (elem) {elem.classList.toggle("active");}

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar);});


/**
 * go to top
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    if (window.scrollY >= 800) {
        goTopBtn.classList.add("active");
    } else {
        goTopBtn.classList.remove("active");
    }
});


// Détection du bas de page pour les remerciements au concepteur
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const footer = document.getElementById('thank-you-footer');

  if (scrollPosition >= pageHeight - 50) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});
