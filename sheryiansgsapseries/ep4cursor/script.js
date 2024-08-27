const cursorEl = document.getElementById("cursor");
const main = document.getElementById("main");
const imgDiv = document.getElementById("image");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursorEl, {
    x: e.x,
    y: e.y,
  });
});

imgDiv.addEventListener("mouseenter", function () {
  cursorEl.innerHTML = "View More";
  gsap.to(cursorEl, {
    scale: 4,
    backgroundColor: "#ffffff4a",
  });
});

imgDiv.addEventListener("mouseleave", function () {
  cursorEl.innerHTML = "";
  gsap.to(cursorEl, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
