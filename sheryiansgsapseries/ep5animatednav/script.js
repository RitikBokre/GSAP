// const tl = gsap.timeline({ paused: true });
const tl = gsap.timeline();
const menu = document.querySelector("#nav i");
const cross = document.querySelector("#full i");

tl.to("#full", {
  right: 0,
  duration: 0.3,
});

tl.from("#full h4", {
  x: 250,
  opacity: 0,
  stagger: 0.3,
  duration: 0.7,
});

tl.from("#full i", {
  rotate: "90deg",
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

cross.addEventListener("click", () => {
  tl.reverse();
});
