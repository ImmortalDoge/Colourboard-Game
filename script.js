const board = document.querySelector("#board");
const timeEl = document.querySelector(".time");
const pointsEl = document.querySelector(".points");
const startButton = document.querySelector("#start");
const timeList = document.querySelector("#time-list");
const boardSizeList = document.querySelector("#board_size-list");
const screens = document.querySelectorAll(".screen");
// const coloredSquares = document.;
let points = 0;
let time = 20;
let boardSize = "";
let squaresNum = 700;

// const getRandomColour = () => {
//   let colourArray = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "0",
//     "A",
//     "B",
//     "C",
//     "D",
//     "F",
//   ];
//   let hexColour = "";
//   let randomNumber = 0;

//   for (let i = 0; i < 6; i++) {
//     randomNumber = Math.floor(Math.random() * colourArray.length);
//     hexColour += colourArray[randomNumber];
//   }

//   return hexColour;
// };

const getRandomColour = () => {
  const colours = [
    "aqua",
    "violet",
    "crimson",
    "gold",
    "darkgreen",
    "springgreen",
    "teal",
    "blue",
    "stateblue",
    "indigo",
  ];
  let randomNumber = Math.floor(Math.random() * colours.length);
  let hexColour = colours[randomNumber];
  return hexColour;
};

let colour = getRandomColour();

const setColour = (elem) => {
  const squares = document.querySelectorAll(`div[style]`);
  points = squares.length;
  elem.style.backgroundColor = `${colour}`;
  elem.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`;
  pointsEl.innerHTML = `Points: ${points}`;
};

// const removeColour = (elem) => {
//   elem.style.backgroundColor = "#1a1a1a";
//   elem.style.boxShadow = "0 0 2px #000";
// };

const createBoard = () => {
  for (let i = 0; i < squaresNum; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColour(square));
    square.addEventListener("click", () => setColour(square));

    // square.addEventListener("mouseleave", () => removeColour(square));

    board.append(square);
  }
};

const setTime = (value) => {
  timeEl.innerHTML = `Time: 00:${value}`;
};

const descreaseTime = () => {
  if (time === 0 || points === squaresNum - 1) {
    finishGame();
  } else {
    let current = --time;
    current < 10 ? (current = `0${current}`) : current;
    setTime(current);
  }
};

const finishGame = () => {
  board.classList.add("hide");
  timeEl.classList.add("hide");
  pointsEl.classList.add("hide");
  board.outerHTML = `<h1>Score: ${points}</h1>`;
};

const startGame = () => {
  setInterval(descreaseTime, 1000);
  setTime(time);
  createBoard();
};

timeList.addEventListener("click", (event) => {
  time = parseInt(event.target.getAttribute("value"));
});

boardSizeList.addEventListener("click", (event) => {
  boardSize = event.target.getAttribute("value");
  console.log(boardSize);
  switch (boardSize) {
    case "small":
      squaresNum = 400;
      break;
    case "big":
      squaresNum = 700;
      break;
    case "huge":
      squaresNum = 1000;
      break;
  }
});

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
  startGame();
});

// Func for autohovering)
function ezGame() {
  const square = document.querySelectorAll(".square");
  let i = 0;
  const clicker = () => {
    if (i < square.length) {
      square[i].click();
      i++;
    }
  };
  setInterval(clicker, 10);
}
