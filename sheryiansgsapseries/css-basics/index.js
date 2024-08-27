const swiperEl = document.querySelector(".swiper");
const slides = document.querySelectorAll(".slides");
const firstSlide = slides[0].cloneNode(true);
swiperEl.append(firstSlide);

let activeIndex = 1;

function translateWithTransition() {
  swiperEl.style.transition = `transform 0.3s 1s`;
  void swiperEl.offsetWidth;
  swiperEl.style.transform = `translateX(${activeIndex * -300}px)`;
  activeIndex++;
}

function backToStart() {
  swiperEl.style.transition = "none";
  swiperEl.style.transform = `translateX(0)`;
  activeIndex = 1;
  // Delay to ensure the backToStart() has finished before restarting the transition
  // requestAnimationFrame(() => {
  //   requestAnimationFrame(translateWithTransition);
  // });
  setTimeout(() => {
    translateWithTransition();
  }, 0);
}

translateWithTransition();

swiperEl.addEventListener("transitionend", () => {
  if (activeIndex < swiperEl.children.length) {
    translateWithTransition();
  } else {
    backToStart();
  }
});
