export function initSlider(selector, containerClass) {
  const slider = document.querySelector(selector);
  if (!slider) return;

  const container = slider.querySelector(containerClass);
  if (!container) return;

  const slides = Array.from(container.children);
  const prevBtn = slider.querySelector(".slider-btn.left");
  const nextBtn = slider.querySelector(".slider-btn.right");
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideWidth = slides[0].offsetWidth;

  function updateSlider() {
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  window.addEventListener("resize", () => {
    slideWidth = slides[0].offsetWidth;
    updateSlider();
  });
}
