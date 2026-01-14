const words = [
  ["apple", "りんご"],
  ["dog", "犬"],
  ["book", "本"],
  ["water", "水"],
  ["music", "音楽"]
];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
  resultEl.textContent = "";

  const [eng, correct] = words[currentIndex];
  questionEl.textContent = eng;

  const choices = shuffle(
    words.map(w => w[1]).filter(j => j !== correct).slice(0, 3).concat(correct)
  );

  choicesEl.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice";
    btn.onclick = () => {
      resultEl.textContent = choice === correct ? "正解" : "不正解";
    };
    choicesEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % words.length;
  showQuestion();
};

showQuestion();
