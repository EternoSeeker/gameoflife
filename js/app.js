// const { get } = require("animejs");

const WIDTH = 60;
const HEIGHT = 30;

let ALIVE_COLOR = "#00246B";
let DEAD_COLOR = "#CADCFC";

const ALIVE = 1;
const DEAD = 0;

const gridContainer = document.getElementById("main-grid");

// 2D array to hold cell states
let cells = new Array(HEIGHT);
for (let i = 0; i < HEIGHT; i++) {
  cells[i] = new Array(WIDTH);
}

let animationSpeed = 400;
let randomValue = 20;
let isAnimating = false;
let isStarted = false;
let areEventListenersAdded = true;
let isWarpEnabled = true;
let isGridVisible = true;

var slider = document.getElementById("randomVal");
var output = document.getElementById("randomValOutput");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  randomValue = this.value;
};

document.addEventListener("DOMContentLoaded", function () {
  // Generate the grid
  for (let i = 0; i < HEIGHT; i++) {
    // Push an empty array for each row
    for (let j = 0; j < WIDTH; j++) {
      cells[i][j] = DEAD; // Initialize cell state
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
  handleDropdowns();
  addEventListenersToCells();
  drawCells();
});

// draw the cells according to the state
// using style of "cell" class to change the color of the cell, iterate over it
function drawCells() {
  const cellElements = gridContainer.querySelectorAll(".cell");
  cells.forEach((row, i) => {
    row.forEach((cell, j) => {
      cellElements[i * WIDTH + j].style.backgroundColor =
        cell === ALIVE ? ALIVE_COLOR : DEAD_COLOR;
    });
  });
}

// Map to store event listener functions for each cell
const cellEventListeners = new Map();

function addEventListenersToCells() {
  const cellElements = document.querySelectorAll(".cell");
  cellElements.forEach(function (cell, index) {
    const listener = function () {
      handleClick(index);
    };
    cellEventListeners.set(cell, listener);
    cell.addEventListener("click", listener);
  });
}

function removeEventListenersFromCells() {
  const cellElements = document.querySelectorAll(".cell");
  cellElements.forEach(function (cell) {
    const listener = cellEventListeners.get(cell);
    if (listener) {
      cell.removeEventListener("click", listener);
      cellEventListeners.delete(cell);
    }
  });
}

function handleClick(i) {
  const row = Math.floor(i / WIDTH);
  const col = i % WIDTH;
  // Toggle cell state
  cells[row][col] = cells[row][col] === ALIVE ? DEAD : ALIVE;
  // Redraw cells
  drawCells();
}

async function getPresets() {
  try {
    const response = await fetch("../data/presets.json");
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

async function drawPresetPattern(presetName) {
  try {
    const presetsList = await getPresets();
    if (!presetsList) {
      return;
    }
    const preset = presetsList[presetName];
    if (preset) {
      if (!isStarted && !isAnimating) {
        // Clear the grid
        clearGrid();
        preset.forEach((coord) => {
          let [x, y] = coord;
          // Ensure coordinates are within the bounds of the cells array
          if (x >= 0 && x < HEIGHT && y >= 0 && y < WIDTH) {
            cells[x][y] = ALIVE;
          }
        });
        // Call drawCells to update the grid
        drawCells();
      }
    }
    drawCells();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getThemes() {
  try {
    const response = await fetch("../data/themes.json");
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

async function selectTheme(themeName) {
  try {
    const themesList = await getThemes();
    if (!themesList) {
      return;
    }

    const theme = themesList[themeName];
    if (theme) {
      const root = document.documentElement;
      for (const key in theme) {
        root.style.setProperty(key, theme[key]);
      }
      ALIVE_COLOR = theme["ALIVE_COLOR"];
      DEAD_COLOR = theme["DEAD_COLOR"];
    } else {
      console.error("Theme not found");
    }
    drawCells();
  } catch (error) {
    console.error("Error:", error);
  }
}

function increaseSpeed() {
  // increase the speed of the animation
  if (animationSpeed > 1) {
    animationSpeed /= 1.1;
  }
}

function decreaseSpeed() {
  // decrease the speed of the animation
  animationSpeed *= 1.1;
}

function isEmpty() {
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      if (cells[i][j] === ALIVE) {
        return false;
      }
    }
  }
  return true;
}

function startAnimation() {
  // check if the grid is empty,
  // if not then start the animation and start the game
  if (areEventListenersAdded) {
    removeEventListenersFromCells();
    areEventListenersAdded = false;
  }
  const playPauseIcon = document.getElementById("play-pause-icon");
  if (isEmpty()) {
    playPauseIcon.src = "./images/Play-Button.svg";
    if (!areEventListenersAdded) {
      addEventListenersToCells();
      areEventListenersAdded = true;
    }
    isAnimating = false;
    isStarted = false;
  } else {
    // if game is not started, set it to true
    // if pause is clicked, pause the game
    isAnimating = !isAnimating;
    // check if the game is started
    // if not, set it to true
    if (isStarted == false) {
      isStarted = true;
      storePattern(cells);
      appendPatternButtons();
    }
    // change the icon according to the state
    playPauseIcon.src = isAnimating
      ? "./images/Pause-Button.svg"
      : "./images/Play-Button.svg";
  }
  if (isAnimating) {
    animate();
  }
}

//randomGrid()
function randomGrid() {
  // if the game is not started and not animating
  // then allow user to set the cells to random state
  if (!isStarted && !isAnimating) {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        cells[i][j] = Math.random() * 100 < randomValue ? ALIVE : DEAD;
      }
    }
    drawCells();
  }
}

function clearGrid() {
  // if the game is paused
  // then allow user to clear the grid
  if (!isAnimating) {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        cells[i][j] = DEAD;
      }
    }
    drawCells();
  }
  isStarted = false;
  if (!areEventListenersAdded) {
    addEventListenersToCells();
    areEventListenersAdded = true;
  }
}
function shareGame() {
  // Check if the Web Share API is supported by the browser
  if (navigator.share) {
    // Call the share() method of the navigator object
    navigator.share({
      title: "Share Conway's Game of Life",
      text: "Check out this awesome game!",
      url: window.location.href // Share the current URL of the page
    })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
  } else {
    // Fallback for browsers that do not support the Web Share API
    alert('Sharing is not supported in this browser.');
  }
}


function toggleWarp() {
  isWarpEnabled = !isWarpEnabled;
}

function toggleGrid() {
  isGridVisible = !isGridVisible;
  var root = document.documentElement;
  // Get the computed styles of the root element
  var style = getComputedStyle(root);
  // get border-color1 from the root
  let borderColor = style.getPropertyValue("--border-color1");
  let borderVal = isGridVisible ? `solid 0.001rem ${borderColor}` : "none";
  const cellElements = gridContainer.querySelectorAll(".cell");
  cellElements.forEach((cell) => {
    cell.style.border = borderVal;
  });
}

function warpOnEdges(cells) {
  const nextGeneration = [];

  for (let i = 0; i < HEIGHT; i++) {
    nextGeneration.push([]);
    for (let j = 0; j < WIDTH; j++) {
      const left = (j - 1 + WIDTH) % WIDTH;
      const right = (j + 1) % WIDTH;
      const above = (i - 1 + HEIGHT) % HEIGHT;
      const below = (i + 1) % HEIGHT;

      let numNeighbors = 0;
      // Check all 8 neighbors
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

  return nextGeneration;
}

function noWarpOnEdges(cells) {
  const nextGeneration = [];
  for (let i = 0; i < HEIGHT; i++) {
    nextGeneration.push([]);
    for (let j = 0; j < WIDTH; j++) {
      const left = j - 1;
      const right = j + 1;
      const above = i - 1;
      const below = i + 1;

      let numNeighbors = 0;
      // Check all 8 neighbors
      if (j > 0 && cells[i][left] === ALIVE) numNeighbors++;
      if (j < WIDTH - 1 && cells[i][right] === ALIVE) numNeighbors++;
      if (i > 0 && cells[above][j] === ALIVE) numNeighbors++;
      if (i < HEIGHT - 1 && cells[below][j] === ALIVE) numNeighbors++;
      if (i > 0 && j > 0 && cells[above][left] === ALIVE) numNeighbors++;
      if (i > 0 && j < WIDTH - 1 && cells[above][right] === ALIVE)
        numNeighbors++;
      if (i < HEIGHT - 1 && j > 0 && cells[below][left] === ALIVE)
        numNeighbors++;
      if (i < HEIGHT - 1 && j < WIDTH - 1 && cells[below][right] === ALIVE)
        numNeighbors++;

      if (cells[i][j] === ALIVE && (numNeighbors === 2 || numNeighbors === 3)) {
        nextGeneration[i][j] = ALIVE;
      } else if (cells[i][j] === DEAD && numNeighbors === 3) {
        nextGeneration[i][j] = ALIVE;
      } else {
        nextGeneration[i][j] = DEAD;
      }
    }
  }

  return nextGeneration;
}

function animate() {
  // Update cells with the new generation
  if (isWarpEnabled) {
    cells = warpOnEdges(cells);
  } else {
    cells = noWarpOnEdges(cells);
  }
  setTimeout(() => {
    drawCells(); // Draw cells after a delay
    if (isAnimating) {
      requestAnimationFrame(animate); // Keep animating
    }
  }, animationSpeed);
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
function handleDropdowns() {
  var themesDropdown = document.getElementsByClassName("color-themes");
  var presetsDropdown = document.getElementsByClassName("presets");
  var historyDropdown = document.getElementsByClassName("history");
  for (let i = 0; i < themesDropdown.length; i++) {
    themesDropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
  for (let i = 0; i < presetsDropdown.length; i++) {
    presetsDropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
  for (let i = 0; i < historyDropdown.length; i++) {
    historyDropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}

let historyCount = 0;

function storePattern(pattern) {
  // Convert the 2D array to a JSON string
  const patternJson = JSON.stringify(pattern);

  // Retrieve the current history from session storage
  let history = sessionStorage.getItem("patternHistory");
  if (history) {
    history = JSON.parse(history);
  } else {
    history = [];
  }

  // Add the new pattern to the history
  history.unshift(patternJson); // Add to the beginning

  // Check if the history exceeds 5 patterns
  if (history.length > 5) {
    // Remove the oldest pattern
    history.pop();
  }
  historyCount = history.length;

  // Store the updated history back in session storage
  sessionStorage.setItem("patternHistory", JSON.stringify(history));
}

function getPatternHistory() {
  // Retrieve the pattern history from session storage
  const historyJson = sessionStorage.getItem("patternHistory");
  if (historyJson) {
    // Parse the JSON string back into an array
    const history = JSON.parse(historyJson);
    // Convert each pattern JSON string back into a 2D array
    return history.map((patternJson) => JSON.parse(patternJson));
  }
  return [];
}

function appendPatternButtons() {
  const historyContainer = document.querySelector(".history-container");
  const patterns = getPatternHistory(); // Retrieve the pattern history

  // Clear the container first
  historyContainer.innerHTML = "";

  // Loop through the patterns and create a button for each
  patterns.forEach((pattern, index) => {
    const button = document.createElement("button");
    button.textContent = `${index + 1}`; // Button names start from the most recent
    button.addEventListener("click", () => {
      // When a button is clicked, set the cells array to the corresponding pattern
      if(!isAnimating && !isStarted){
        cells = pattern;
      }
      drawCells(); // Assuming drawCells is a function you have that draws the cells on the screen
    });
    historyContainer.appendChild(button);
  });
}
