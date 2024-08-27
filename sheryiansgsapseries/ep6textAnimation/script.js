function breakText() {
  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;
  const splittedText = h1Text.split("");
  const halfNum = Math.floor(h1Text.length / 2);

  let placeholder = "";
  splittedText.forEach(function (item, idx) {
    if (idx < halfNum) {
      placeholder += `<span class="a">${item}</span>`;
    } else {
      placeholder += `<span class="b">${item}</span>`;
    }
  });
  h1.innerHTML = placeholder;
}

breakText();

//first half
gsap.from("h1 span.a", {
  y: 70,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  stagger: 0.15,
});

//seconf half
gsap.from("h1 span.b", {
  y: 70,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  stagger: -0.15,
});
