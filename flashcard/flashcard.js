// words.js 読み込み確認
if (!window.WORDS || window.WORDS.length === 0) {
  alert("words.js が読み込まれていません");
  throw new Error("WORDS not loaded");
}

let index = 0;
let showEnglish = true;

// シャッフル（破壊しない）
const words = [...window.WORDS].sort(() => Math.random() - 0.5);

const wordEl = document.getElementById("word");

function render() {
  const w = words[index];
  if (!w) return;
  wordEl.textContent = showEnglish ? w.en : w.jp;
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

// クリック / タップで切替
wordEl.addEventListener("click", () => {
  showEnglish = !showEnglish;
  render();
});

// キー操作
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "Enter") next();
  if (e.key === "ArrowLeft") prev();
  if (e.key === " ") {
    e.preventDefault();
    showEnglish = !showEnglish;
    render();
  }
});

// 初期表示
render();
