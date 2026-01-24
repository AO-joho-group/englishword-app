if (!window.WORDS || window.WORDS.length === 0) {
  alert("words.js が読み込まれていません");
}

// シャッフル
const words = [...window.WORDS].sort(() => Math.random() - 0.5);

let index = 0;
let showEnglish = true;

const wordEl = document.getElementById("word");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function render() {
  const w = words[index];
  wordEl.textContent = showEnglish ? w.eng : w.jp;
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

// 単語タップで切替
wordEl.addEventListener("click", () => {
  showEnglish = !showEnglish;
  render();
});

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// 初期表示
render();
