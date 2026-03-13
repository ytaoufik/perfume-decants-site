// =========================
// Mobile menu toggle
// =========================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================
// Cart counter interaction
// =========================
const cartCount = document.getElementById("cartCount");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
let currentCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCount += 1;
    cartCount.textContent = String(currentCount);

    button.textContent = "Added";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = "Add to cart";
      button.disabled = false;
    }, 900);
  });
});

// =========================
// Scroll reveal animation
// =========================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -30px 0px"
  }
);

revealElements.forEach((element) => observer.observe(element));

// =========================
// Dynamic footer year
// =========================
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
