const inputField = document.getElementById('speedInput');


// Function to convert input field value to a number and ensure it doesn't become a negative or invalid value
function getInputFieldValue() {
    return parseFloat(inputField.value) || 1;
}


/*
The value inside the input container shows the multiplier,
the animation speed denotes the time interval for each animation,
Hence a increase in animation speed results in a slower animation, and vice versa and hence we multiply animation speed with the inverse of multiplier.

The increment and decrement happens in a step of 0.25 for values above 0.75 and the step changes to 0.10 for values of multiplier below 0.75.

For zero division error, we have limited the minimum speed to 0.15x and maximum speed to 25x
*/



document.getElementById('fast-reverse-button').addEventListener('click', function() {
    let currentValue = getInputFieldValue();
    if (currentValue > 0.75) {
        inputField.value = (currentValue - 0.25).toFixed(2);  // Subtract 0.25 and limit to 2 decimal places
        animationSpeed = 400 * (1 / currentValue);
    } else if ( currentValue > 0.15) {
        inputField.value = (currentValue - 0.10).toFixed(2);  // Subtract 0.25 and limit to 2 decimal places
        animationSpeed = 400 * (1 / currentValue);
    }
});

document.getElementById('fast-forward-button').addEventListener('click', function() {
    let currentValue = getInputFieldValue();
    if (currentValue < 0.75) {
        inputField.value = (currentValue + 0.10).toFixed(2);  // Subtract 0.25 and limit to 2 decimal places
        animationSpeed = 400 * (1 / currentValue);
    } else if ( currentValue < 25) {
        inputField.value = (currentValue + 0.25).toFixed(2);  // Add 0.25 and limit to 2 decimal places
        animationSpeed = 400 * (1 / currentValue);
    }
});