// The following code will use the keyboard inputs to control the game

document.addEventListener("keydown", function (event) {
    // standardises the keyboard input to capital letters
    const keyPressed = event.key.toUpperCase();
  
    // Key mapping to functions
    const keyMap = {
      " " : startAnimation,
      P: startAnimation,
      ARROWRIGHT: increaseSpeed,
      F: increaseSpeed,
      ARROWLEFT: decreaseSpeed,
      S: decreaseSpeed,
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

function decreaseSpeed() {
  let currentValue = getInputFieldValue();
  if (currentValue <= 0.15) {
      swal(
          "You have reached the minimum speed",
          "The speed cannot be decreased any further",
      );
  }


  if (currentValue > 0.75) {
      inputField.value = (currentValue - 0.25).toFixed(2);  // Subtract 0.25 and limit to 2 decimal places
      animationSpeed = 400 * (1 / currentValue);
  } else if ( currentValue > 0.15) {
      inputField.value = (currentValue - 0.10).toFixed(2);  // Subtract 0.25 and limit to 2 decimal places
      animationSpeed = 400 * (1 / currentValue);
  }

  // Change tooltip text after updating the current value
  let newValue = getInputFieldValue();
  document.getElementById("increase-speed-tooltip").innerHTML = "Increase Speed";
  let reduce = document.getElementById("reduce-speed-tooltip");
  reduce.innerHTML = "Reduce Speed";
  console.log(currentValue)
  if (newValue <= 0.15) {
      reduce.innerHTML = "Speed cannot be reduced any further" ;
  }

};

function increaseSpeed() {
  let currentValue = getInputFieldValue();
  if (currentValue >= 10) {
      swal(
          "You have reached the maximum speed",
          "The speed cannot be increased any further",
      );
  }
  if (currentValue < 0.75) {
      inputField.value = (currentValue + 0.10).toFixed(2);  // Subtract 0.25 and limit to 2 decimal places
      animationSpeed = 400 * (1 / currentValue);
  } else if ( currentValue < 10) {
      inputField.value = (currentValue + 0.25).toFixed(2);  // Add 0.25 and limit to 2 decimal places
      animationSpeed = 400 * (1 / currentValue);
  }

  // Change tooltip text after updating the current value
  let newValue = getInputFieldValue();
  document.getElementById("reduce-speed-tooltip").innerHTML = "Reduce Speed";
  let increase = document.getElementById("increase-speed-tooltip");
  increase.innerHTML = "Increasee Speed";
  if (newValue >= 10) {
      increase.innerHTML = "Speed cannot be increased any further" ;
  }

};