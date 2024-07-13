// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  const customThemeBtn = document.getElementById('custom-theme-btn');
  const customColorsContainer = document.getElementById('custom-colors-container');
  const applyCustomThemeBtn = document.getElementById('apply-custom-theme-btn');
  const resetThemeBtn = document.getElementById('reset-theme-btn');
  
// Define default colors
const defaultColors = {
  '--primary-color': '#0f045a',
  '--theme-color1': '#7582b2',
  '--theme-color2': '#036c96',
  '--theme-color3': '#ebf2ff',
  '--shadow-color1': '#352a7e',
  '--shadow-color2': '#101536',
  '--border-color1': '#080126',
  '--background-col': '#c6cede',
  '--scrollbar-color': '#77bdec',
  'ALIVE_COLOR': '#00246B',
  'DEAD_COLOR': '#CADCFC' 
};

  function loadColors() {
    const root = document.documentElement;
    Object.keys(defaultColors).forEach(key => {
      const color = localStorage.getItem(key) || defaultColors[key];
      root.style.setProperty(key, color);
    });
  }

  function saveColors() {
    const root = document.documentElement;
    Object.keys(defaultColors).forEach(key => {
      localStorage.setItem(key, root.style.getPropertyValue(key));
    });
  }

  function applyColors() {
        removeGradient(); // Reset Gradient Background
    
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
  
    initializeGrid();

    const root = document.documentElement;

    root.style.setProperty('--primary-color', document.getElementById('primary-color').value);
    root.style.setProperty('--theme-color1', document.getElementById('theme-color1').value);
    root.style.setProperty('--theme-color2', document.getElementById('theme-color2').value);
    root.style.setProperty('--theme-color3', document.getElementById('theme-color3').value);
    root.style.setProperty('--shadow-color1', document.getElementById('shadow-color1').value);
    root.style.setProperty('--shadow-color2', document.getElementById('shadow-color2').value);
    root.style.setProperty('--border-color1', document.getElementById('border-color1').value);
    root.style.setProperty('--background-col', document.getElementById('background-col').value);
    root.style.setProperty('--scrollbar-color', document.getElementById('scrollbar-color').value);
    ALIVE_COLOR = document.getElementById('alive-color').value;
    DEAD_COLOR = document.getElementById('dead-color').value;

    drawCells();

    saveColors();
    title.style.color = isDark(color1) ? '#ffffff' : '#000000';
  }

  function resetColors() {
    const root = document.documentElement;
    removeGradient(); // Reset gradient Background
    Object.keys(defaultColors).forEach(key => {
      root.style.setProperty(key, defaultColors[key]);
      localStorage.removeItem(key);
    });
    ALIVE_COLOR = "#00246B";
    DEAD_COLOR = "#CADCFC";
    loadColorInputs();  // Update the color pickers to reflect default values
    document.getElementById('custom-colors-container').style.display = 'none'; //Hide the Container if reset to default
    drawCells();
  }


  function loadColorInputs() {
    document.getElementById('primary-color').value = localStorage.getItem('--primary-color') || defaultColors['--primary-color'];
    document.getElementById('theme-color1').value = localStorage.getItem('--theme-color1') || defaultColors['--theme-color1'];
    document.getElementById('theme-color2').value = localStorage.getItem('--theme-color2') || defaultColors['--theme-color2'];
    document.getElementById('theme-color3').value = localStorage.getItem('--theme-color3') || defaultColors['--theme-color3'];
    document.getElementById('shadow-color1').value = localStorage.getItem('--shadow-color1') || defaultColors['--shadow-color1'];
    document.getElementById('shadow-color2').value = localStorage.getItem('--shadow-color2') || defaultColors['--shadow-color2'];
    document.getElementById('border-color1').value = localStorage.getItem('--border-color1') || defaultColors['--border-color1'];
    document.getElementById('background-col').value = localStorage.getItem('--background-col') || defaultColors['--background-col'];
    document.getElementById('scrollbar-color').value = localStorage.getItem('--scrollbar-color') || defaultColors['--scrollbar-color'];
    document.getElementById('alive-color').value = ALIVE_COLOR;
    document.getElementById('dead-color').value = DEAD_COLOR;    
  }

  customThemeBtn.addEventListener('click', function () {
    customColorsContainer.style.display = customColorsContainer.style.display === 'none' ? 'block' : 'none';
  });

  applyCustomThemeBtn.addEventListener('click', applyColors);
  resetThemeBtn.addEventListener('click', resetColors);

  // Load colors on page load
  loadColors();
  loadColorInputs();
}
);


function isDark(color) {
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  const r = parseInt(rgb[1], 16);
  const g = parseInt(rgb[2], 16);
  const b = parseInt(rgb[3], 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}


slopeSlider.addEventListener('input', function() {
  ALIVE_COLOR = document.getElementById('color1').value;
  DEAD_COLOR = document.getElementById('color2').value;
  drawCells();
});

// Event listener for the Apply Gradient button
document.getElementById('apply-gradient-btn').addEventListener('click', function() {
  ALIVE_COLOR = document.getElementById('color1').value;
  DEAD_COLOR = document.getElementById('color2').value;
  drawCells();
});

document.getElementById('remove-cell-color-btn').addEventListener('click', function() {
  ALIVE_COLOR = document.getElementById('alive-color').value;
  DEAD_COLOR = document.getElementById('dead-color').value;
  drawCells();
});