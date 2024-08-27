const tl = gsap.timeline({
  repeat: -1,
});

function animate() {
  tl.to(
    ".image-container",
    {
      width: "100%",
      stagger: 2,
    },
    "hello"
  );

  tl.to(
    "h1",
    {
      top: 0,
      stagger: 2,
    },
    "hello"
  );

  tl.to(
    "h1",
    {
      top: "-100%",
      stagger: 2,
      delay: 2,
    },
    "hello"
  );
}

setTimeout(() => {
  animate();
}, 2000);
