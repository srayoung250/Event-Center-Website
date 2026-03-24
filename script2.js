const slides = document.querySelectorAll(".bg-slide"),
  btns = document.querySelectorAll(".control-btn"),
  message = document.querySelector(".message"),
  shareLink = window.location.href,
  shareButton = document.querySelector(".share a");

let index = 0;

function nextSlide() {
  slide[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
//______________Share Button__________________________//

shareButton.addEventListener("click", () => {
  message.classList.toggle("active");
  navigator.clipboard.writeText(shareLink);
  setTimeout(() => {
    message.classList.remove("active");
  }, 3000);
});

//______________Share Button__________________________//

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
