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
  gameStatus.textContent = `The dice will change in ${time} seconds.`;
  console.log("small time");
};

// EVENT LISTENER
document.querySelector(".start").addEventListener("click", function () {
  timeID = setInterval(updateTime, 1000);

  randomImageNumber = Math.trunc(Math.random() * 6) + 1;

  document
    .querySelector(".image")
    .setAttribute("src", `images/Dice_${randomImageNumber}.png`);

  number1.addEventListener("click", function () {
    selectedVariable.textContent = 1;
    if (randomImageNumber === Number(number1.textContent)) {
      answer = true;
    }
    removeBtnBg();
    number1.classList.toggle("selected-bg");
  });

  number2.addEventListener("click", function () {
    selectedVariable.textContent = 2;
    if (randomImageNumber === Number(number2.textContent)) {
      answer = true;
    }
    removeBtnBg();
    number2.classList.toggle("selected-bg");
  });

  number3.addEventListener("click", function () {
    selectedVariable.textContent = 3;
    if (randomImageNumber === Number(number3.textContent)) {
      answer = true;
    }
    removeBtnBg();
    number3.classList.toggle("selected-bg");
  });

  number4.addEventListener("click", function () {
    selectedVariable.textContent = 4;
    if (randomImageNumber === Number(number4.textContent)) {
      answer = true;
    }
    removeBtnBg();
    number4.classList.toggle("selected-bg");
  });

  number5.addEventListener("click", function () {
    selectedVariable.textContent = 5;
    if (randomImageNumber === Number(number5.textContent)) {
      answer = true;
    }
    removeBtnBg();
    number5.classList.toggle("selected-bg");
  });

  number6.addEventListener("click", function () {
    selectedVariable.textContent = 6;
    if (randomImageNumber === Number(number6.textContent)) {
      answer = true;
    }
    removeBtnBg();
    number6.classList.toggle("selected-bg");
  });

  if (answer) {
    score += 5;
    labelScore.textContent = score;
  }

  answer = false;
  time = 5;

  // SET-INTERVAL
  intervalID = setInterval(() => {
    randomImageNumber = Math.trunc(Math.random() * 6) + 1;

    removeBtnBg();

    document
      .querySelector(".image")
      .setAttribute("src", `images/Dice_${randomImageNumber}.png`);

    number1.addEventListener("click", function () {
      selectedVariable.textContent = 1;
      if (randomImageNumber === Number(number1.textContent)) {
        answer = true;
      }
      removeBtnBg();
      number1.classList.toggle("selected-bg");
    });

    number2.addEventListener("click", function () {
      selectedVariable.textContent = 2;
      if (randomImageNumber === Number(number2.textContent)) {
        answer = true;
      }
      removeBtnBg();
      number2.classList.toggle("selected-bg");
    });

    number3.addEventListener("click", function () {
      selectedVariable.textContent = 3;
      if (randomImageNumber === Number(number3.textContent)) {
        answer = true;
      }
      removeBtnBg();
      number3.classList.toggle("selected-bg");
    });

    number4.addEventListener("click", function () {
      selectedVariable.textContent = 4;
      if (randomImageNumber === Number(number4.textContent)) {
        answer = true;
      }
      removeBtnBg();
      number4.classList.toggle("selected-bg");
    });

    number5.addEventListener("click", function () {
      selectedVariable.textContent = 5;
      if (randomImageNumber === Number(number5.textContent)) {
        answer = true;
      }
      removeBtnBg();
      number5.classList.toggle("selected-bg");
    });

    number6.addEventListener("click", function () {
      selectedVariable.textContent = 6;
      if (randomImageNumber === Number(number6.textContent)) {
        answer = true;
      }
      removeBtnBg();
      number6.classList.toggle("selected-bg");
    });

    if (answer) {
      score += 5;
      labelScore.textContent = score;
      labelResult.textContent = "Your guess was correct!";
      labelResult.classList.remove("hidden");
      labelResult.classList.add("green");
      setTimeout(() => {
        labelResult.classList.add("hidden");
        labelResult.classList.remove("green");
      }, 2000);
    } else {
      labelResult.textContent = "Your guess was incorrect!";
      labelResult.classList.remove("hidden");
      labelResult.classList.add("red");
      setTimeout(() => {
        labelResult.classList.add("hidden");
        labelResult.classList.remove("red");
      }, 2000);
    }

    answer = false;
    time = 5;
  }, 5000);
});

document.querySelector(".reset").addEventListener("click", function () {
  clearInterval(intervalID);
  score = 0;
  labelScore.textContent = score;
  selectedVariable.textContent = "none";
  removeBtnBg();
  gameStatus.textContent = "Click on start button to start the game!";
  clearInterval(timeID);
  time = 5;
});
