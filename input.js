console.log("input js loaded");

window.addEventListener("DOMContentLoaded", () => {
  console.log("dom content loaded");

  const checkBtn = document.getElementById("check");
  const answer = document.getElementById("answer");

  console.log("check:", checkBtn);
  console.log("answer:", answer);
});
