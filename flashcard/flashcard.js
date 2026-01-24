if (!window.WORDS || window.WORDS.length === 0) {
  alert("words.js が読み込まれていません");
}

const words = [...window.WORDS].sort(() => Math.random() - 0.5);

let index = 0;
let showEnglish = true;

const wordEl = document.getElementById("word");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function adjustFontSize() {
  let size = 4;
  wordEl.style.fontSize = size + "rem";

  while (wordEl.scrollWidth > wordEl.clientWidth && size > 1.5) {
    size -= 0.1;
    wordEl.style.fontSize = size + "rem";
  }
}

function render() {
  const w = words[index];
  wordEl.textContent = showEnglish ? w.eng : w.jp;

  // ★スマホ対策：描画後に実行
  requestAnimationFrame(() => {
    adjustFontSize();
  });
}


function next() {
  index = (index + 1) % words.length;
  showEnglish = true;
  render();
}

function prev() {
  index = (index - 1 + words.length) % words.length;
  showEnglish = true;
  render();
}

wordEl.addEventListener("click", () => {
  showEnglish = !showEnglish;
  render();
});

window.addEventListener("resize", () => {
  requestAnimationFrame(() => {
    adjustFontSize();
  });
});


nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

render();
