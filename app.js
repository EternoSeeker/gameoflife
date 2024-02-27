const WIDTH = 70;
const HEIGHT = 35;

const ALIVE_COLOR = "#c6e6ee";
const DEAD_COLOR = "#000000";

const ALIVE = 1;
const DEAD = 0;

const gridContainer = document.getElementById("main-grid");
let cells = []; // 2D array to hold cell states

let animationInterval;
let animationSpeed = 400;

let isAnimating = false;
let isStarted = false;

document.addEventListener("DOMContentLoaded", function () {
  // Generate the grid
  for (let i = 0; i < HEIGHT; i++) {
    cells.push([]); // Push an empty array for each row
    for (let j = 0; j < WIDTH; j++) {
      cells[i].push(Math.random() < 0.2 ? ALIVE : DEAD); // Initialize cell state
      // Create a new cell element
      const cell = document.createElement("div");
      cell.classList.add("cell");
      // Append the cell to the grid container
      gridContainer.appendChild(cell);
    }
  }

  gridContainer.style.gridTemplateRows = `repeat(${HEIGHT}, calc((100%) / ${HEIGHT}))`;
  gridContainer.style.gridTemplateColumns = `repeat(${WIDTH}, calc((100%) / ${WIDTH}))`;
  // set grid container size according to ratio
  gridContainer.style.minHeight = "30vw";
  gridContainer.style.minWidth = "60vw";
  drawCells();
});

// draw the cells according to the state
// we're using style of "cell" class to change the color of the cell, iterate over it
function drawCells() {
  const cellElements = gridContainer.querySelectorAll(".cell");
  cells.forEach((row, i) => {
    row.forEach((cell, j) => {
      cellElements[i * WIDTH + j].style.backgroundColor =
        cell === ALIVE ? ALIVE_COLOR : DEAD_COLOR;
    });
  });
}

function increaseSpeed() {
  if (animationSpeed > 1) {
    animationSpeed /= 1.1;
  }
}

function decreaseSpeed() {
  animationSpeed *= 1.1;
}

function startAnimation() {
  isAnimating = !isAnimating;
  const playPauseIcon = document.getElementById("play-pause-icon");
  playPauseIcon.src = isAnimating
    ? "./images/Microsoft-Fluentui-Emoji-Mono-Pause-Button.svg"
    : "./images/Microsoft-Fluentui-Emoji-Mono-Play-Button.svg";
  if (isAnimating) {
    animate();
  }
}

//randomGrid()
//clearGrid()


function animate() {
  const nextGeneration = [];

  for (let i = 0; i < HEIGHT; i++) {
    nextGeneration.push([]);
    for (let j = 0; j < WIDTH; j++) {
      const left = (j - 1 + WIDTH) % WIDTH;
      const right = (j + 1) % WIDTH;
      const above = (i - 1 + HEIGHT) % HEIGHT;
      const below = (i + 1) % HEIGHT;

      let numNeighbors = 0;
      if (cells[above][left] === ALIVE) numNeighbors++;
      if (cells[above][j] === ALIVE) numNeighbors++;
      if (cells[above][right] === ALIVE) numNeighbors++;
      if (cells[i][left] === ALIVE) numNeighbors++;
      if (cells[i][right] === ALIVE) numNeighbors++;
      if (cells[below][left] === ALIVE) numNeighbors++;
      if (cells[below][j] === ALIVE) numNeighbors++;
      if (cells[below][right] === ALIVE) numNeighbors++;

      if (cells[i][j] === ALIVE && (numNeighbors === 2 || numNeighbors === 3)) {
        nextGeneration[i][j] = ALIVE;
      } else if (cells[i][j] === DEAD && numNeighbors === 3) {
        nextGeneration[i][j] = ALIVE;
      } else {
        nextGeneration[i][j] = DEAD;
      }
    }
  }

  cells = nextGeneration; // Update cells with the new generation
  setTimeout(() => {
    drawCells(); // Draw cells after a delay
    if (isAnimating) {
      requestAnimationFrame(animate); // Keep animating
    }
  }, animationSpeed);
}
