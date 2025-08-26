
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navlinks");
const links = document.querySelectorAll("#navlinks a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
