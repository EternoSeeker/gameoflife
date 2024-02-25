const WIDTH = 120;
const HEIGHT = 60;
const CELL_SIZE = 8;

const canvas = document.getElementById("mainGrid");
const ctx = canvas.getContext("2d");
const gridSize = 20; // size of each cell
const numRows = 20; // number of rows
const numCols = 20; // number of columns

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "black";

  for (let i = 0; i <= numRows; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * gridSize);
    ctx.lineTo(canvas.width, i * gridSize);
    ctx.stroke();
  }

  for (let j = 0; j <= numCols; j++) {
    ctx.beginPath();
    ctx.moveTo(j * gridSize, 0);
    ctx.lineTo(j * gridSize, canvas.height);
    ctx.stroke();
  }
}

drawGrid();

// Define colors
// const ALIVE_COLOR = "#ffffff"; // white color for living cells
// const DEAD_COLOR = "#000000"; // black color for dead cells

// // use anime.js to animate the cell

// const canvas = document.getElementsByName("canvas");
// const ctx = canvas.getContext("2d");

// const ALIVE = 1;
// const DEAD = 0;

// let cells = [];
// let nextCells = [];

// // Function to initialize an empty grid
// function initGrid() {
//   cells = Array.from({ length: WIDTH * HEIGHT }, () => DEAD);
// }

// // Function to draw the grid
// function drawGrid() {
//   ctx.strokeStyle = "#282828"; // Grid color
//   for (let x = 0; x <= WIDTH; x++) {
//     ctx.beginPath();
//     ctx.moveTo(x * CELL_SIZE, 0);
//     ctx.lineTo(x * CELL_SIZE, HEIGHT * CELL_SIZE);
//     ctx.stroke();
//   }
//   for (let y = 0; y <= HEIGHT; y++) {
//     ctx.beginPath();
//     ctx.moveTo(0, y * CELL_SIZE);
//     ctx.lineTo(WIDTH * CELL_SIZE, y * CELL_SIZE);
//     ctx.stroke();
//   }
// }

// // Function to draw cells
// function drawCells() {
//   for (let x = 0; x < WIDTH; x++) {
//     for (let y = 0; y < HEIGHT; y++) {
//       if (cells[y * WIDTH + x] === ALIVE) {
//         ctx.fillStyle = ALIVE_COLOR;
//       } else {
//         ctx.fillStyle = DEAD_COLOR;
//       }
//       ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
//     }
//   }
// }

// // Function to start the animation
// function startAnimation() {
//   // Toggle animation state
//   isAnimating = !isAnimating;

//   // Change button icon
//   const playPauseIcon = document.getElementById("playPauseIcon");
//   playPauseIcon.src = isAnimating ? "./images/Microsoft-Fluentui-Emoji-Mono-Pause-Button.svg" : "./images/Microsoft-Fluentui-Emoji-Mono-Play-Button.svg";

//   if (isAnimating) {
//     // Start animation loop
//     animate();
//   }
// }

// // Function to handle animation loop
// function animate() {
//     // Clear the canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw the grid
//     drawGrid();

//     // Update the state of cells using animejs
//     anime({
//       targets: cells,
//       duration: 500,
//       easing: 'linear',
//       update: function() {
//         // Draw cells after each update
//         drawCells();
//       },
//       complete: function() {
//         // Call the animation recursively
//         if (isAnimating) {
//           requestAnimationFrame(animate);
//         }
//       }
//     });

//     // Update the state of cells
//     for (let x = 0; x < WIDTH; x++) {
//       for (let y = 0; y < HEIGHT; y++) {
//         const left = (x - 1 + WIDTH) % WIDTH;
//         const right = (x + 1) % WIDTH;
//         const above = (y - 1 + HEIGHT) % HEIGHT;
//         const below = (y + 1) % HEIGHT;

//         let numNeighbors = 0;
//         if (cells[above * WIDTH + left] === ALIVE) numNeighbors++;
//         if (cells[above * WIDTH + x] === ALIVE) numNeighbors++;
//         if (cells[above * WIDTH + right] === ALIVE) numNeighbors++;
//         if (cells[y * WIDTH + left] === ALIVE) numNeighbors++;
//         if (cells[y * WIDTH + right] === ALIVE) numNeighbors++;
//         if (cells[below * WIDTH + left] === ALIVE) numNeighbors++;
//         if (cells[below * WIDTH + x] === ALIVE) numNeighbors++;
//         if (cells[below * WIDTH + right] === ALIVE) numNeighbors++;
//         if (
//           cells[y * WIDTH + x] === ALIVE &&
//           (numNeighbors === 2 || numNeighbors === 3)
//         ) {
//           // living cells with 2 or 3 neighbors stay alive
//           nextCells[y * WIDTH + x] = ALIVE;
//         } else if (cells[y * WIDTH + x] === DEAD && numNeighbors === 3) {
//           // Dead cells with 3 neighbors become alive
//           nextCells[y * WIDTH + x] = ALIVE;
//         } else {
//           // Everything else dies or stays dead
//           nextCells[y * WIDTH + x] = DEAD;
//         }
//       }
//     }

//     // Swap cells and nextCells
//     [cells, nextCells] = [nextCells, cells];

//   // Request animation frame if animation is running
//   if (isAnimating) {
//     requestAnimationFrame(animate);
//   }
// }

// // Event listener for play/pause button click
// document.getElementById("playPauseButton").addEventListener("click", startAnimation);

// initGrid();

// drawGrid();
