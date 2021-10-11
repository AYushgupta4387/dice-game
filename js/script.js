// VARIABLES
let randomImageNumber = Math.trunc(Math.random() * 6) + 1;
let score = 0;
let answer = false;
let intervalID;

const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");

const labelScore = document.querySelector(".score");
const selectedVariable = document.querySelector(".selected-var");

// FUNCTIONS
const removeBtnBg = function () {
  number1.classList.remove("selected-bg");
  number2.classList.remove("selected-bg");
  number3.classList.remove("selected-bg");
  number4.classList.remove("selected-bg");
  number5.classList.remove("selected-bg");
  number6.classList.remove("selected-bg");
};

// EVENT LISTENER
document.querySelector(".start").addEventListener("click", function () {
  intervalID = setInterval(() => {
    console.log("interval begins");
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
  }, 5000);
});

document.querySelector(".reset").addEventListener("click", function () {
  clearInterval(intervalID);
  labelScore.textContent = 0;
  selectedVariable.textContent = "none";
  removeBtnBg();
});
