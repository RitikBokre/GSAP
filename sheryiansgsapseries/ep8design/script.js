const tl = gsap.timeline();

tl.from("nav h2, nav h4, nav button", {
  y: -50,
  delay: 1,
  duration: 0.7,
  stagger: 0.2,
  opacity: 0,
});

tl.from(
  "#center-1 h1",
  {
    x: -100,
    duration: 0.3,
    opacity: 0,
  },
  "-=0.3"
);

tl.from("#center-1 p", {
  x: -80,
  duration: 0.3,
  opacity: 0,
});

tl.from("#center-1 button", {
  duration: 0.3,
  opacity: 0,
});

tl.from(
  "#center-2 img",
  {
    duration: 0.3,
    x: 100,
    opacity: 0,
  },
  "-=0.5"
);

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-mid",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 0",
    scrub: 3
  },
});

tl2.from("#main-bottom", {
  y: 50,
  opacity: 0,
  duration: 0.6,
});

tl2.from(".services", {
  opacity: 0,
  duration: 0.4,
});

tl2.from(
  ".elem.left.line1",
  {
    x: -100,
    opacity: 0,
    duration: 1,
  },
  "hello"
);

tl2.from(
  ".elem.right.line1",
  {
    x: 100,
    opacity: 0,
    duration: 1,
  },
  "hello"
);
