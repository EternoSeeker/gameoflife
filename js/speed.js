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


currentValue = getInputFieldValue();
if (currentValue <= 0.15) {
    document.getElementById("reduce-speed-tooltip").innerHTML = "Speed cannot be reduced any further";
} else if (currentValue >=10) {
    document.getElementById("increase-speed-tooltip").innerHTML = "Speed cannot be increased any further";
}


document.getElementById('fast-reverse-button').addEventListener('click', function() {
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

});

document.getElementById('fast-forward-button').addEventListener('click', function() {
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

});