console.log("input.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const jpEl = document.getElementById("question-jp");
  const enEl = document.getElementById("question-en");
  const answerInput = document.getElementById("answer");
  const checkBtn = document.getElementById("check");
  const resultEl = document.getElementById("result");
  const historyEn = document.getElementById("history-eng");
  const historyJp = document.getElementById("history-jp");

  if (!jpEl || !enEl || !answerInput || !checkBtn) {
    console.error("必要な要素が見つかりません");
    return;
  }

  if (!window.WORDS || window.WORDS.length === 0) {
    alert("words.js が読み込まれていません");
    return;
  }

  let current = null;

  /* ===== 単語選択 ===== */
  function pickWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
  }

  /* ===== フォント自動縮小（1行固定） ===== */
  function fitText(el, maxSize, minSize) {
    let size = maxSize;
    el.style.fontSize = size + "px";

    while (el.scrollWidth > el.clientWidth && size > minSize) {
      size -= 2;
      el.style.fontSize = size + "px";
    }
  }

  function fitWords() {
    fitText(enEl, 52, 24); // 英語：大きめ
    fitText(jpEl, 36, 18); // 日本語：やや小さめ
  }

  /* ===== 表示更新 ===== */
  function showWord() {
    current = pickWord();

    enEl.textContent = current.en;
    jpEl.textContent = current.jp;

    answerInput.value = "";
    resultEl.textContent = "";

    // レイアウト反映後に縮小判定
    requestAnimationFrame(fitWords);

    answerInput.focus();
  }

  /* ===== 判定 ===== */
  function judge() {
    if (!current) return;

    const input = answerInput.value.trim().toLowerCase();
    const correct = current.en.toLowerCase();

    if (input === correct) {
      resultEl.textContent = "正解";
    } else {
      resultEl.textContent = `正解：${current.en}`;
    }

    historyEn.textContent = current.en;
    historyJp.textContent = current.jp;

    setTimeout(showWord, 900);
  }

  /* ===== イベント ===== */
  checkBtn.addEventListener("click", judge);

  answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      judge();
    }
  });

  /* ===== 初期表示 ===== */
  showWord();
});
