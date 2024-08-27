let change = true;

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0 && change) {
    console.log("seedha scrolling");
    change = false;
    gsap.to(".marque", {
      transform: "translateX(-300%)",
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  } else if (e.deltaY < 0 && !change) {
    change = true;
    console.log("ulta scrolling");
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});
