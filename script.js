const navbarToggle = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbarContainer");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});
