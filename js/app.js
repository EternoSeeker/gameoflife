// const { get } = require("animejs");
let WIDTH = 60;
let HEIGHT = 30;

let ALIVE_COLOR = "#00246B";
let DEAD_COLOR = "#CADCFC";

const ALIVE = 1;
const DEAD = 0;


// 2D array to hold cell states
// let cells = new Array(HEIGHT);
// for (let i = 0; i < HEIGHT; i++) {
//   cells[i] = new Array(WIDTH);
// }
let cells = Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(DEAD));//added for change in grid size


let animationSpeed = 400;
let randomValue = 20;
let isAnimating = false;
let isStarted = false;
let areEventListenersAdded = true;
let isWarpEnabled = true;
let isGridVisible = true;
let generation = 0;
let aliveCount = 0;
let birthCount = 0;
let deathCount = 0;
let startTime = null;


function initializeGrid() {
  const gridContainer = document.getElementById("main-grid");

  gridContainer.style.gridTemplateRows = `repeat(${HEIGHT}, calc(100% / ${HEIGHT}))`;
  gridContainer.style.gridTemplateColumns = `repeat(${WIDTH}, calc(100% / ${WIDTH}))`;

  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener("click", () => toggleCellState(i, j));
      gridContainer.appendChild(cell);
    }
  }

  drawCells();
}

function drawCells() {
  const gridContainer = document.getElementById("main-grid");
  const cellElements = gridContainer.getElementsByClassName("cell");

  Array.from(cellElements).forEach(cell => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    cell.style.backgroundColor = cells[row][col] === ALIVE ? ALIVE_COLOR : DEAD_COLOR;
  });
}

function toggleCellState(row, col) {
  cells[row][col] = cells[row][col] === ALIVE ? DEAD : ALIVE;
  drawCells();
}
function updateInfoDisplay() {
  document.getElementById("generation").innerText = generation;
  document.getElementById("alive").innerText = aliveCount;
  document.getElementById("births").innerText = births;
  document.getElementById("deaths").innerText = deaths;
}
function changeGridSize() {
  const newHeight = parseInt(document.getElementById("new-height").value);
  if (isNaN(newHeight) || newHeight <= 0) {
    alert("Please enter a valid height value.");
    return;
  }

  const newWidth = newHeight * 2;
  WIDTH = newWidth;
  HEIGHT = newHeight;

  cells = Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(DEAD));

  const gridContainer = document.getElementById("main-grid");
  gridContainer.style.gridTemplateRows = `repeat(${HEIGHT}, calc(100% / ${HEIGHT}))`;
  gridContainer.style.gridTemplateColumns = `repeat(${WIDTH}, calc(100% / ${WIDTH}))`;

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  initializeGrid();
}




function onResizeAboveThreshold() {
  const thresholdWidth = 750;
  const currentWidth = window.innerWidth;

  if (currentWidth >= thresholdWidth) {
    document.querySelector(".sidenav").style.left = "0px"
  }else{
    document.querySelector(".sidenav").style.left = "0px"
  }
}
// onResizeAboveThreshold();
// window.addEventListener('resize', onResizeAboveThreshold);


document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidenav").style.left = "0px"
})



document.querySelector(".cross").addEventListener("click", () => {
  document.querySelector(".sidenav").style.left = "0px"
})

var slider = document.getElementById("randomVal");
var output = document.getElementById("randomValOutput");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  randomValue = this.value;
};

document.addEventListener("DOMContentLoaded", function () {
  // Generate the grid
  const gridContainer = document.getElementById('main-grid');
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
  drawCells();
  addEventListenersToCells();
  handleDropdowns();
  onResizeAboveThreshold();
  window.addEventListener('resize', onResizeAboveThreshold);

  // Start updating the time counter every second
  setInterval(updateTimeCounter, 1000);
});



// draw the cells according to the state
// using style of "cell" class to change the color of the cell, iterate over it
function drawCells() {
  const gridContainer = document.getElementById('main-grid');
  const cellElements = gridContainer.querySelectorAll(".cell");
  cells.forEach((row, i) => {
    row.forEach((cell, j) => {
      const cellDiv = cellElements[i * WIDTH + j];
      const newColor = cell === ALIVE ? ALIVE_COLOR : DEAD_COLOR;
      // Only update if colour changes
      if (cellDiv.style.backgroundColor !== newColor) {
          cellDiv.style.backgroundColor = newColor;
      }
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

  if(cells[row][col] == ALIVE) aliveCount++;
  else aliveCount--;

  // Redraw cells
  drawCells();
}

function updateInfoDisplay() {
  document.getElementById("generation").innerText = generation;
  document.getElementById("alive").innerText = aliveCount;
  document.getElementById("births").innerText = births;
  document.getElementById("deaths").innerText = deaths;
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
            aliveCount++;
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
      const backgroundContainer = document.body; // Change this to the appropriate container if needed

      for (const key in theme) {
        root.style.setProperty(key, theme[key]);
      }

      // Check if the theme contains a gradient
      if (theme["background-image"]) {
        backgroundContainer.style.backgroundImage = theme["background-image"];
        backgroundContainer.style.backgroundColor = ''; // Reset background color
      } else {
        backgroundContainer.style.backgroundImage = 'none'; // Remove gradient
        backgroundContainer.style.backgroundColor = theme["background-color"]; // Apply solid color
        var container = document.querySelector('.game');
        container.style.background = '';
      }

      root.style.setProperty('--scrollbar-color', theme['--primary-color']);
      ALIVE_COLOR = theme["ALIVE_COLOR"];
      DEAD_COLOR = theme["DEAD_COLOR"];
      let reverse_button = document.getElementById('fast-reverse-button');
      let forward = document.getElementById('fast-forward-button');
      let pause_button = document.getElementById('play-pause-button');

      if (theme["DEAD_COLOR"] == "#80ffff") {
        reverse_button.innerHTML = "<img class=icon id=fast-reverse-icon src=./images/Fast-Reverse-Button-Dark.svg alt=Play />";
        forward.innerHTML = "<img class=icon id=fast-forward-icon src=./images/Fast-Forward-Button-Dark.svg alt=Fast />";
        pause_button.innerHTML = "<img class=icon id=play-pause-icon src=./images/Play-Button-Dark.svg alt=Slow />";
      } else {
        reverse_button.innerHTML = "<img class=icon id=fast-reverse-icon src=./images/Fast-Reverse-Button.svg alt=Play />";
        forward.innerHTML = "<img class=icon id=fast-forward-icon src=./images/Fast-Forward-Button.svg alt=Fast />";
        pause_button.innerHTML = "<img class=icon id=play-pause-icon src=./images/Play-Button.svg alt=Slow />";
      }

      // If switching from a gradient theme to a solid color theme, reset the background
      if (!theme["background-image"]) {
        backgroundContainer.style.backgroundImage = 'none';
      }
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
  return (aliveCount==0);
}

function startAnimation() {
  // Initialize startTime only if it's null
  if (!startTime) {
    startTime = performance.now(); // Performance API to get high-resolution timestamps
  } 
  // check if the grid is empty,
  // if not then start the animation and start the game
  if (areEventListenersAdded) {
    removeEventListenersFromCells();
    areEventListenersAdded = false;
  }
  const playPauseIcon = document.getElementById("play-pause-icon");
  if (isEmpty()) {
    playPauseIcon.src = DEAD_COLOR=="#80ffff"?"./images/Play-Button-Dark.svg": "./images/Play-Button.svg";
    // playPauseIcon.src = "./images/Play-Button.svg";
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
      // storePattern(cells);
      storePattern(cells, aliveCount);
      appendPatternButtons();
    }
    // change the icon according to the state
    if(DEAD_COLOR=="#80ffff"){
      console.log('ggggg')
      playPauseIcon.src=isAnimating
      ? "./images/Pause-Button-Dark.svg"
      : "./images/Play-Button-Dark.svg";
    }else{
      playPauseIcon.src = isAnimating
        ? "./images/Pause-Button.svg"
        : "./images/Play-Button.svg";
    }
  }
  if (isAnimating) {
    animate();
  }
}


function toggleWarp() {
  isWarpEnabled = !isWarpEnabled;
}

//randomGrid()
function randomGrid() {
  // if the game is not started and not animating
  // then allow user to set the cells to random state
  aliveCount = 0;
  if (!isStarted && !isAnimating) {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        cells[i][j] = Math.random() * 100 < randomValue ? ALIVE : DEAD;
        if(cells[i][j] == ALIVE) aliveCount++;
      }
    }
    drawCells();
  }
}

function clearGrid() {
  // if the game is paused
  // then allow user to clear the grid
  if (!isAnimating) {
    aliveCount = 0;
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

function countNeighbors(cells, x, y, wrapEdges) {
  const positions = [
    [-1,-1], [-1, 0], [-1, 1],
    [ 0,-1],          [ 0, 1],
    [ 1,-1], [ 1, 0], [ 1, 1]
  ];

  return positions.reduce((acc, [dx, dy]) => {
    const nx = wrapEdges ? (x + dx + HEIGHT) % HEIGHT : x + dx;
    const ny = wrapEdges ? (y + dy + WIDTH) % WIDTH : y + dy;
    if (nx >= 0 && nx < HEIGHT && ny >= 0 && ny < WIDTH && cells[nx][ny] === ALIVE) {
      acc++;
    }
    return acc;
  }, 0);
}

function calculateNextGeneration(cells, wrapEdges) {
  let nextGeneration = Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(DEAD));
  let aliveCountTemp = 0;
  let birthsTemp = 0;
  let deathsTemp = 0;

  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      const numNeighbors = countNeighbors(cells, i, j, wrapEdges);
      const isAlive = cells[i][j] === ALIVE;

      if ((isAlive && (numNeighbors === 2 || numNeighbors === 3)) || (!isAlive && numNeighbors === 3)) {
        nextGeneration[i][j] = ALIVE;
        aliveCountTemp++;
        if (!isAlive) {
          birthsTemp++;
        }
      } else {
        if (isAlive) {
          deathsTemp++;
        }
      }
    }
  }

  aliveCount = aliveCountTemp;
  births = birthsTemp;
  deaths = deathsTemp;
  return nextGeneration;
}


function animate() {
  // If animation is starting, capture the start time
  if (!startTime) {
    startTime = performance.now(); // Performance API to get high-resolution timestamps
  }

  cells = calculateNextGeneration(cells, isWarpEnabled);
  generation++; // Increment generation counter
  setTimeout(() => {
    drawCells();
    if (isAnimating) {
      requestAnimationFrame(animate);
    }
    updateInfoDisplay(); // Call updateInfoDisplay after drawing cells
    updateTimeCounter(); // Call updateTimeCounter after drawing cells
  }, animationSpeed);
}
function updateTimeCounter() {
  const currentTime = performance.now(); // Get the current time
  const elapsedTime = currentTime - startTime; // Calculate the elapsed time
  const seconds = Math.floor(elapsedTime / 1000); // Convert milliseconds to seconds
  const minutes = Math.floor(seconds / 60); // Calculate the minutes
  const hours = Math.floor(minutes / 60); // Calculate the hours

  // Format the time as HH:MM:SS
  const formattedTime = `${pad(hours)}:${pad(minutes % 60)}:${pad(seconds % 60)}`;

  // Update the time counter display
  document.getElementById("time-counter").innerText = formattedTime;
}


// Helper function to pad single digits with leading zeros
function pad(num) {
  return num.toString().padStart(2, "0");
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
      if (!isAnimating && !isStarted) {
        cells = pattern;
        aliveCount = (cells.flat().filter(cell => cell === ALIVE).length);
      }
      drawCells(); // Assuming drawCells is a function you have that draws the cells on the screen
    });
    historyContainer.appendChild(button);
  });
}

document.querySelectorAll('[data-tooltip]').forEach(elem => {
  let tooltipTimeout;

  elem.addEventListener('mouseenter', function() {
    tooltipTimeout = setTimeout(() => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.innerText = elem.getAttribute('data-tooltip');
      document.body.appendChild(tooltip);

      const rect = elem.getBoundingClientRect();
      tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';

      elem._tooltip = tooltip;
    }, 500); // Delay of 500ms
  });

  elem.addEventListener('mouseleave', function() {
    clearTimeout(tooltipTimeout);
    if (elem._tooltip) {
      elem._tooltip.remove();
      elem._tooltip = null;
    }
  });
});

// Function to show tooltip
function showTooltip(event) {
  const tooltip = event.currentTarget.querySelector('.tooltip-text');
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = '1';
}

// Function to hide tooltip
function hideTooltip(event) {
  const tooltip = event.currentTarget.querySelector('.tooltip-text');
  tooltip.style.visibility = 'hidden';
  tooltip.style.opacity = '0';
}

// Attach event listeners to all buttons with tooltips
document.querySelectorAll('.tooltip-container').forEach(container => {
  container.addEventListener('mouseenter', showTooltip);
  container.addEventListener('mouseleave', hideTooltip);
});


const gridContainer = document.getElementById("main-grid");

const showGraphButton = document.getElementById('showGraphButton');
const overlay = document.getElementById('overlay');
const closeGraphButton = document.getElementById('closeGraphButton');
const populationGraph = document.getElementById('populationGraph').getContext('2d');
const birthDeathGraph = document.getElementById('birthDeathGraph').getContext('2d');
showGraphButton.addEventListener('click', () => {
  overlay.style.display = 'flex';
  updateGraphs(); // Function to update the graphs with data
});

closeGraphButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

function updateGraphs() {
  // Sample data for demonstration
  const generations = Array.from({ length: 100 }, (_, i) => i);
  const aliveData = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
  const birthData = Array.from({ length: 100 }, () => Math.floor(Math.random() * 50));
  const deathData = Array.from({ length: 100 }, () => Math.floor(Math.random() * 50));


  // Population graph (alive stats)
  new Chart(populationGraph, {
      type: 'line',
      data: {
          labels: generations,
          datasets: [{
              label: 'Alive',
              data: aliveData,
              borderColor: 'black',
              backgroundColor: 'rgba(0,0,0,0.5)',
              fill: false
          }]
      },
      options: {
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Generation'
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Population'
                  }
              }
          }
      }
  });

  // Birth/Death graph
  new Chart(birthDeathGraph, {
      type: 'line',
      data: {
          labels: generations,
          datasets: [
              {
                  label: 'Births',
                  data: birthData,
                  borderColor: 'green',
                  backgroundColor: 'rgba(0, 255, 0, 0.5)',
                  fill: false
              },
              {
                  label: 'Deaths',
                  data: deathData,
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  fill: false
              }
          ]
      },
      options: {
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Generation'
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Count'
                  }
              }
          }
      }
  });
}
