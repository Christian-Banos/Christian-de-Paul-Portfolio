/* === SHOW MENU === */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* === REMOVE MENU MOBILE === */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //When we click on each nav__link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Función para manejar el scroll y los links activos
function scrollActive() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// Activar la función cuando se hace scroll
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');

    // Función que agrega o elimina la clase de desenfoque
    function blurSidebar() {
        if (window.scrollY >= 50) {
            sidebar.classList.add('blur-sidebar'); // Agrega la clase para desenfoque
        } else {
            sidebar.classList.remove('blur-sidebar'); // Elimina la clase de desenfoque
        }
    }

    // Evento de scroll
    window.addEventListener('scroll', blurSidebar);
});

// Para activar el link cuando se hace click
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remover la clase active de todos los links
    navLinks.forEach((l) => l.classList.remove("active"));
    // Agregar la clase active al link clickeado
    this.classList.add("active");
  });
});
