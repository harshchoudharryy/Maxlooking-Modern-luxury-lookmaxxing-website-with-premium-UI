window.history.scrollRestoration = "manual";

window.onload = () => {
  window.scrollTo(0, 0);
};

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   MOBILE NAVBAR
========================================= */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

/* =========================================
   HERO ANIMATION
========================================= */

gsap.from(".hero h1", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".subtitle p", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  delay: 0.2,
  ease: "power3.out"
});

/* =========================================
   PAGE 2 SCROLL
========================================= */

gsap.to(".explore-text h1", {
  x: "-60%",
  ease: "none",

  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "+=1200",
    scrub: 2,
    pin: true,
    anticipatePin: 1
  }
});

/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor = document.querySelector("#cursor");

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

/* MOUSE POSITION */

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

/* SMOOTH CURSOR */

gsap.ticker.add(() => {

  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  gsap.set(cursor, {
    x: cursorX,
    y: cursorY
  });

});

/* =========================================
   CARD HOVER
========================================= */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    cursor.classList.add("active");

    cursor.innerHTML = "SEE MORE";

    gsap.to(card, {
      y: -10,
      duration: 0.4,
      ease: "power3.out"
    });

  });

  card.addEventListener("mouseleave", () => {

    cursor.classList.remove("active");

    cursor.innerHTML = "";

    gsap.to(card, {
      y: 0,
      duration: 0.4,
      ease: "power3.out"
    });

  });

});

/* =========================================
   FILTER BUTTONS
========================================= */

const buttons = document.querySelectorAll(
  ".category-buttons button"
);

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach((card) => {

      if (
        filter === "all" ||
        card.classList.contains(filter)
      ) {

        card.style.display = "block";

        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.9
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4
          }
        );

      } else {

        gsap.to(card, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,

          onComplete: () => {
            card.style.display = "none";
          }
        });

      }

    });

  });

});

/* =========================================
   SCROLL REVEAL
========================================= */

gsap.utils.toArray(".card").forEach((card) => {

  gsap.from(card, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });

});

/* =========================================
   NAVBAR BG ON SCROLL
========================================= */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 40) {

    navbar.style.background =
      "rgba(10,10,10,0.75)";

  } else {

    navbar.style.background =
      "rgba(255,255,255,0.08)";

  }

});

/* =========================================
   MOBILE CURSOR FIX
========================================= */

if (window.innerWidth < 768) {

  cursor.style.display = "none";

}