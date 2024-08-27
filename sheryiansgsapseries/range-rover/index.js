function animate() {
  const parentWrapper = document.querySelector(".outer-most-wrapper");
  const prevEl = document.querySelector("[data-prev]");
  const activeEl = document.querySelector("[data-active");
  prevEl.style.zIndex = 1;
  activeEl.style.zIndex = 2;
  activeEl.style.height = "100%";
  setTimeout(() => {
    prevEl.style.height = 0;
    prevEl.style.zIndex = "auto";
    let prevIndex = [...parentWrapper.children].indexOf(activeEl);
    delete prevEl.dataset.prev;
    delete activeEl.dataset.active;
    activeEl.dataset.prev = true;
    let nextIndex =
      prevIndex + 1 >= parentWrapper.children.length ? 0 : prevIndex + 1;
    parentWrapper.children[nextIndex].dataset.active = true;
    // animate();
  }, 2000);
}

animate();
