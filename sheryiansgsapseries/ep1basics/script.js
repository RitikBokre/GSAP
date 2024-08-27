// gsap.from("div", {
//   x: 1100,
//   duration: 2,
//   rotate: 135,
//   backgroundColor: "red",
//   delay: 1,
//   stagger: 2,
//   repeat: 2,
//   yoyo: true,
// });

// gsap.from("#box1", {
//   x: 1100,
//   duration: 1.5,
//   rotate: 135,
//   delay: 3,
//   backgroundColor: "red",
//   borderRadius: 20,
// });

// gsap.from("#box2", {
//   x: 1100,
//   duration: 1.5,
//   delay: 3,
//   borderRadius: 20,
// });

// gsap.from("#box3", {
//   x: 1100,
//   opacity:0,
//   duration: 2,
//   delay: 4.5,
// });

//timeline concept
const tl = gsap.timeline();

tl.to("#box1", {
  x: 500,
  backgroungColor: "blue",
  duration: 1,
});

tl.to("#box2", {
  x: 500,
  rotate: 250,
  duration: 1,
});

tl.to("#box3", {
  x: 500,
  rotate: -360,
  duration: 3,
  opacity: 1,
});
