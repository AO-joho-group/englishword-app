const startBtn = document.getElementById("start");
const modeSelect = document.getElementById("mode-select");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  modeSelect.classList.remove("hidden");
});

document.querySelectorAll(".mode").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    window.location.href = target;
  });
});
