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
    };
  
    // Check if a function is mapped to the pressed key
    if (keyMap.hasOwnProperty(keyPressed)) {
      event.preventDefault();
      keyMap[keyPressed]();
    }
  });