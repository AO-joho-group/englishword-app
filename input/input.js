console.log("input.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");

  if (!window.WORDS || WORDS.length === 0) {
    alert("WORDS not found");
    return;
  }

  let current = null;

  function pickWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
  }

  function fitText(el, maxSize, minSize) {
    let size = maxSize;
    el.style.fontSize = size + "px";

    while (el.scrollWidth > el.clientWidth && size > minSize) {
      size--;
      el.style.fontSize = size + "px";
    }
  }

  const jpEl = document.getElementById("question-jp");
  const enEl = document.getElementById("question-en");

  current = pickWord();
  jpEl.textContent = current.jp;
  enEl.textContent = current.en;

  fitText(enEl, 48, 20);
});
