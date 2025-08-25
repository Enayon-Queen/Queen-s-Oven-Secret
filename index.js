
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

// const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');
//     const links = document.querySelectorAll('.nav-links a');

//     hamburger.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//     });

