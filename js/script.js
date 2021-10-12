"use strict";

// VARIABLES
let randomImageNumber = Math.trunc(Math.random() * 6) + 1;
let score = 0;
let answer = false;
let intervalID;
let timeID;
let time = 5;

const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");

const labelScore = document.querySelector(".score");
const labelResult = document.querySelector(".label-result");
const selectedVariable = document.querySelector(".selected-var");
const gameStatus = document.querySelector(".heading-secondary");

// FUNCTIONS
const removeBtnBg = function () {
  number1.classList.remove("selected-bg");
  number2.classList.remove("selected-bg");
  number3.classList.remove("selected-bg");
  number4.classList.remove("selected-bg");
  number5.classList.remove("selected-bg");
  number6.classList.remove("selected-bg");
};

const updateTime = function () {
  time--;
  gameStatus.textContent = `The dice will change in ${time} ${
    time > 1 ? "seconds" : "second"
  }.`;
};

const changeDiceImage = function (number) {
  document
    .querySelector(".image")
    .setAttribute("src", `images/Dice_${number}.png`);
};

const numberChanges = function (number, num) {
  selectedVariable.textContent = num;
  if (randomImageNumber === Number(number.textContent)) {
    answer = true;
  }
  removeBtnBg();
  number.classList.toggle("selected-bg");
};

const resultLabel = function (result, color) {
  labelResult.textContent = `Your guess was ${result}!`;
  labelResult.classList.remove("hidden");
  labelResult.classList.add(color);

  setTimeout(() => {
    labelResult.classList.add("hidden");
    labelResult.classList.remove(color);
  }, 2000);
};

const reset = function () {
  score = 0;
  time = 5;
  labelScore.textContent = score;
  selectedVariable.textContent = "none";
  removeBtnBg();

  if (timeID) {
    clearInterval(intervalID);
    clearInterval(timeID);
  }
};

// START BUTTON
document.querySelector(".start").addEventListener("click", function () {
  gameStatus.textContent = "The dice will change in 5 seconds.";
  reset();

  // 1 second Interval
  timeID = setInterval(updateTime, 1000);

  randomImageNumber = Math.trunc(Math.random() * 6) + 1;

  changeDiceImage(randomImageNumber);

  number1.addEventListener("click", numberChanges.bind(null, number1, 1));
  number2.addEventListener("click", numberChanges.bind(null, number2, 2));
  number3.addEventListener("click", numberChanges.bind(null, number3, 3));
  number4.addEventListener("click", numberChanges.bind(null, number4, 4));
  number5.addEventListener("click", numberChanges.bind(null, number5, 5));
  number6.addEventListener("click", numberChanges.bind(null, number6, 6));

  if (answer) {
    score += 5;
    labelScore.textContent = score;
  }

  answer = false;
  time = 5;

  // 5 seconds Interval
  intervalID = setInterval(() => {
    randomImageNumber = Math.trunc(Math.random() * 6) + 1;

    removeBtnBg();

    changeDiceImage(randomImageNumber);

    number1.addEventListener("click", numberChanges.bind(null, number1, 1));
    number2.addEventListener("click", numberChanges.bind(null, number2, 2));
    number3.addEventListener("click", numberChanges.bind(null, number3, 3));
    number4.addEventListener("click", numberChanges.bind(null, number4, 4));
    number5.addEventListener("click", numberChanges.bind(null, number5, 5));
    number6.addEventListener("click", numberChanges.bind(null, number6, 6));

    if (answer) {
      score += 5;
      labelScore.textContent = score;
      resultLabel("correct", "green");
    } else {
      resultLabel("incorrect", "red");
    }

    answer = false;
    time = 5;
    gameStatus.textContent = "The dice will change in 5 seconds.";
  }, 5000);
});

// RESET BUTTON
document.querySelector(".reset").addEventListener("click", function () {
  reset();
  gameStatus.textContent = "Click on start button to start the game!";
});
