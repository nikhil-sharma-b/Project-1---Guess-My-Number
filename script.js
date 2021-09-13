"use strict";

// Creating a random secret number and a score state variable
let secretRandomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Display message function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Set score function
const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

// Handling the "Check!" button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === secretRandomNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretRandomNumber;
    displayMessage("🎉 Correct Number");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretRandomNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretRandomNumber ? "📈 Too High!" : "📈 Too Low!"
      );
      setScore(--score);
    } else {
      displayMessage("💥 You Lost the Game!!");
      setScore(0);
    }
  }
});

// Functionality to the "Again!" button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretRandomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  setScore(score);
});
