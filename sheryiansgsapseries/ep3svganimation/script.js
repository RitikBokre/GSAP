let initialPath = `M 10 100 Q 500 100 990 100`;
const finalPath = initialPath;

const stringEl = document.querySelector("#string");

stringEl.addEventListener("mousemove", function (event) {
  initialPath = `M 10 100 Q ${event.x} ${event.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.2,
    ease: "bounce",
  });
});

stringEl.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.3,
    ease: "bounce",
  });
});
