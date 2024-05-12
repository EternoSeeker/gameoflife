// Function to apply gradient theme
function applyGradientTheme(color1, color2) {
    var container = document.querySelector('.game'); // Selecting the container where you want to apply the gradient theme
    var title = document.querySelector('.heading'); // Selecting the title element
    var direction = document.getElementById('gradient-direction').value; // Getting the selected gradient direction

    // Create gradient string
    var gradientString = 'linear-gradient(' + direction + ', ' + color1 + ', ' + color2 + ')';

    // Apply gradient background to the container
    container.style.background = gradientString;

    // Adjust title color based on the brightness of the first color
    title.style.color = isDark(color1) ? '#ffffff' : '#000000';

    // Hide the color selection container after applying the gradient
    document.getElementById('gradient-colors-container').style.display = 'none';
}

// Event listener for the gradient theme button
document.getElementById('gradient-theme-btn').addEventListener('click', function() {
    var colorsContainer = document.getElementById('gradient-colors-container');
    // Toggle color selection container
    colorsContainer.style.display = (colorsContainer.style.display === 'block') ? 'none' : 'block';

    // Hide other elements when the color selection container is displayed
    if (colorsContainer.style.display === 'block') {
        // Hide other elements
        // You can add more elements here if needed
        // For example:
        // document.getElementById('apply-gradient-btn').style.display = 'none';
    }
});

// Event listener for the Apply Gradient button
document.getElementById('apply-gradient-btn').addEventListener('click', function() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    applyGradientTheme(color1, color2); // Apply gradient theme with selected colors
});

// Function to check the brightness of a color
function isDark(color) {
    // Convert color to RGB
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    const r = parseInt(rgb[1], 16);
    const g = parseInt(rgb[2], 16);
    const b = parseInt(rgb[3], 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Check if the color is dark
    return luminance < 0.5;
}

