const navbar = document.querySelector(".navbar");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
let isMenuOpen = false;

// Scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Toggle mobile menu
function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  mobileNavToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = isMenuOpen ? "hidden" : "";
}

mobileNavToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);


// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) toggleMenu();
  });
});

// Close menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen) toggleMenu();
});

// Prevent scroll when menu is open
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && isMenuOpen) {
    toggleMenu();
  }
});

(function () {
  const root = document.documentElement;

  // Remove no-js class and add js class
  root.classList.remove("no-js");
  root.classList.add("js");

  // Check if body has animations enabled
  if (document.body.classList.contains("has-animations")) {
    // Initialize ScrollReveal
    const sr = ScrollReveal();
    sr.reveal(".feature, .pricing-table-inner", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "bottom",
      interval: 100,
    });

    root.classList.add("anime-ready");

    // Hero figure box 05 animation
    anime
      .timeline({ targets: ".hero-figure-box-05" })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: "500px",
        delay: anime.random(0, 400),
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: 1,
      })
      .add({
        duration: 800,
        rotateY: "-15deg",
        rotateX: "8deg",
        rotateZ: "-1deg",
      });

    // Hero figure boxes 06 and 07 animation
    anime
      .timeline({ targets: ".hero-figure-box-06, .hero-figure-box-07" })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: "500px",
        delay: anime.random(0, 400),
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: 1,
      })
      .add({
        duration: 800,
        rotateZ: "20deg",
      });

    // Other hero figure boxes animation
    anime({
      targets:
        ".hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10",
      duration: anime.random(600, 800),
      delay: anime.random(600, 800),
      rotate: [
        anime.random(-360, 360),
        function (el) {
          return el.getAttribute("data-rotation");
        },
      ],
      scale: [0.7, 1],
      opacity: [0, 1],
      easing: "easeInOutExpo",
    });
  }
})();

$("body").css("background-color", "#202122");
$("body").css("font-family", "Source Code Pro");
$(".navbar").css("background-color", "#202122");
$(".navbar").css("border", "0");
$(".navbar").css("text-align", "center");


var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});