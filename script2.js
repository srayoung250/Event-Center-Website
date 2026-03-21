const slides = document.querySelectorAll(".bg-slide"),
  btns = document.querySelectorAll(".control-btn");

let index = 0;

function nextSlide() {
  slide[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Get the index from the clicked button
    const targetIndex = btn.getAttribute("data-index");

    // 2. Remove 'active' from ALL slides and ALL buttons
    slides.forEach((slide) => slide.classList.remove("active"));
    btns.forEach((b) => b.classList.remove("active"));

    // 3. Add 'active' to the specific slide and button
    slides[targetIndex].classList.add("active");
    btn.classList.add("active");
  });
});
