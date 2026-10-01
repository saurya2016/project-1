// Animation and Frontend Interactions

// Smooth fade-in effect on scroll
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("p, input");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Search box animation
const searchBox = document.querySelector("main input");
searchBox.addEventListener("focus", () => {
  searchBox.style.backgroundColor = "#fff0f0";
});
searchBox.addEventListener("blur", () => {
  searchBox.style.backgroundColor = "#fff";
});

// Logo bounce animation
const logo = document.querySelector("main img");
setInterval(() => {
  logo.style.transform = "scale(1.1)";
  setTimeout(() => {
    logo.style.transform = "scale(1)";
  }, 300);
}, 3000);

// Navbar hover animation (JS way)
document.querySelectorAll("header ul li a").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#ffd6d6";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "#fff";
  });
});
