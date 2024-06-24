// Function to apply gradient theme
function applyGradientTheme(color1, color2, direction) {
  var container = document.querySelector('.game');
  container.style.backgroundImage = ('linear-gradient('+direction+'deg, ' + color1 + ', ' + color2 + ')');
  var title = document.querySelector('.heading');
  title.style.color = isDark(color1) ? '#ffffff' : '#000000';
  // document.getElementById('alive-color').value = ALIVE_COLOR;
  // document.getElementById('dead-color').value = DEAD_COLOR;  
}

// Event listener for the gradient theme button
document.getElementById('gradient-theme-btn').addEventListener('click', function() {
  var colorsContainer = document.getElementById('gradient-colors-container');
  colorsContainer.style.display = (colorsContainer.style.display === 'block') ? 'none' : 'block';
});

// Event Listener to listen to the current set angle value and colour Value
var slopeSlider = document.getElementById('slopeSlider');
var angleValue = document.getElementById('angleValue');
slopeSlider.addEventListener('input', function() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    angleValue.textContent = slopeSlider.value;
    applyGradientTheme(color1, color2, slopeSlider.value);
});

// Event listener for the Apply Gradient button
document.getElementById('apply-gradient-btn').addEventListener('click', function() {
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  applyGradientTheme(color1, color2, slopeSlider.value);
});

function removeGradient() {
  var container = document.querySelector('.game');
  container.style.backgroundImage = 'none';

  document.getElementById('gradient-colors-container').style.display = 'none'; //Hide the Container if reset to default
}

// Event listener for the Remove Gradient button
document.getElementById('remove-gradient-btn').addEventListener('click', removeGradient);

// Event listener for the Remove Cell Color button is under customTheme.js

// Function to check the brightness of a color
function isDark(color) {
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  const r = parseInt(rgb[1], 16);
  const g = parseInt(rgb[2], 16);
  const b = parseInt(rgb[3], 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}