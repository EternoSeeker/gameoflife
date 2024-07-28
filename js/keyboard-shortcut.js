// The following code will use the keyboard inputs to control the game

document.addEventListener("keydown", function (event) {
    // standardises the keyboard input to capital letters
    const keyPressed = event.key.toUpperCase();
  
    // Key mapping to functions
    const keyMap = {
      " " : startAnimation,
      P: startAnimation,
      ARROWRIGHT: fastForward,
      F: fastForward,
      ARROWLEFT: slowDown,
      S: slowDown,
      DELETE: clearGrid,
      D: clearGrid,
      R: randomGrid,
      ARROWUP: () => updateRandomValue(5),
      ARROWDOWN: () => updateRandomValue(-5),
      G: toggleGrid,
      M: toggleMusic,
      W: toggleWarp,
      1: () => drawHistory(1),
      2: () => drawHistory(2),
      3: () => drawHistory(3),
      4: () => drawHistory(4),
      5: () => drawHistory(5)
    };
  
    // Check if a function is mapped to the pressed key
    if (keyMap.hasOwnProperty(keyPressed)) {
      event.preventDefault();
      keyMap[keyPressed]();
    }
  });

  
function drawHistory(key) {
  const index = key - 1
  patterns = getPatternHistory(); //Get the array of all the patterns
  if (patterns.length < index) {
    console.log(key, "key pressed. There are ", patterns.length," histories yet.")
    return
  }
  pattern = patterns[index]
  // Set the cells array to the corresponding pattern
  if (!isAnimating && !isStarted) {
    cells = pattern;
    aliveCount = (cells.flat().filter(cell => cell === ALIVE).length);
  }
  drawCells();
}