const WIDTH = 80;
const HEIGHT = 50;
const CELL_SIZE = 8;

const ALIVE_COLOR = "#ffffff";
const DEAD_COLOR = "#000000";

const ALIVE = 1;
const DEAD = 0;

const cells = new Array(WIDTH * HEIGHT).fill(DEAD);
const nextCells = new Array(WIDTH * HEIGHT).fill(DEAD);
let isAnimating = false; // Declaration of isAnimating variable

document.addEventListener("DOMContentLoaded", function () {
  // Get the grid container
  const gridContainer = document.getElementById("main-grid");

  // Generate the grid
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      // Create a new cell element
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // Append the cell to the grid container
      gridContainer.appendChild(cell);
    }
  }

  gridContainer.style.gridTemplateRows = `repeat(${HEIGHT}, calc((100%) / ${HEIGHT}))`;
  gridContainer.style.gridTemplateColumns = `repeat(${WIDTH}, calc((100%) / ${WIDTH}))`;
  // set grid container size according to ratio of rows and cols
  gridContainer.style.minHeight = "30vw";
  gridContainer.style.minWidth = "48vw";
  initGrid();
  drawCells();
});

// set some cells as alive randomly as 20% chance
function initGrid() {
  for (let i = 0; i < WIDTH * HEIGHT; i++) {
    cells[i] = Math.random() < 0.2 ? ALIVE : DEAD;
  }
}

// draw the cells according to the state
// we're using style of "cell" class to change the color of the cell, iterate over it
function drawCells() {
  const gridContainer = document.getElementById("main-grid");
  const cellElements = gridContainer.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cellElements[i].style.backgroundColor =
      cells[i] === ALIVE ? ALIVE_COLOR : DEAD_COLOR;
  }
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

function animate() {
  // Update the state of cells
  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      const left = (x - 1 + WIDTH) % WIDTH;
      const right = (x + 1) % WIDTH;
      const above = (y - 1 + HEIGHT) % HEIGHT;
      const below = (y + 1) % HEIGHT;

      let numNeighbors = 0;
      if (cells[above * WIDTH + left] === ALIVE) numNeighbors++;
      if (cells[above * WIDTH + x] === ALIVE) numNeighbors++;
      if (cells[above * WIDTH + right] === ALIVE) numNeighbors++;
      if (cells[y * WIDTH + left] === ALIVE) numNeighbors++;
      if (cells[y * WIDTH + right] === ALIVE) numNeighbors++;
      if (cells[below * WIDTH + left] === ALIVE) numNeighbors++;
      if (cells[below * WIDTH + x] === ALIVE) numNeighbors++;
      if (cells[below * WIDTH + right] === ALIVE) numNeighbors++;
      if (
        cells[y * WIDTH + x] === ALIVE &&
        (numNeighbors === 2 || numNeighbors === 3)
      ) {
        nextCells[y * WIDTH + x] = ALIVE;
      } else if (cells[y * WIDTH + x] === DEAD && numNeighbors === 3) {
        nextCells[y * WIDTH + x] = ALIVE;
      } else {
        nextCells[y * WIDTH + x] = DEAD;
      }
    }
  }

  // Swap cells and nextCells
  [cells, nextCells] = [nextCells, cells];

  // Clear the grid

  // Draw the grid and cells
  // Request animation frame if animation is running
  if (isAnimating) {
    requestAnimationFrame(animate);
  }
}

document
  .getElementById("play-pause-button")
  .addEventListener("click", startAnimation);

// Ensure the canvas size matches the grid dimensions
canvas.width = WIDTH * CELL_SIZE;
canvas.height = HEIGHT * CELL_SIZE;

initGrid();
drawGrid();
