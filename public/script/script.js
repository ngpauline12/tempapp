
// PART 2: TEMPERATURE CONVERSION APP
// Directions: In the index.html file take a look at the two paragraph tags, and note that one has an id="celcius" and the other has an id="message". Use what you've learned about JavaScript so far to make an app that does the following things:


// Ask the user for the temperature in Fahrenheit via a prompt.

// Convert the number to Celcius and display that number in the first paragraph tag in index.html.
    // The equation to get the degrees in Celcius is: 
    // °C = 5 / 9(°F - 32).

// In the second paragraph tag, display a message based on the temperatrue the user entered. 
    // If the degrees in Fahrenheit is less than 65, the message should be: `Oh, that's cold!`
    // If the degrees in Fahrenheit is greater than or equal to 65, the message should be: `The temperature is not too cold for me!`
    // Otherwise, if neither of those conditions is true, the message should be: `That's not a temperature. Refresh and enter the degrees in Fahrenheit as a number.`

// First, think about each step. Write pseudocode with comments to plan out the steps you'll need to take to build the app. Remember to test your code throughout the process by using console.logs and checking the browser and the console.

// For hints on building this app, scroll down.

let degFahren = Number(prompt("Enter the degrees in Fahrenheit."));
// let degCel = (5 / 9) * (degFahren - 32);
// let celciusToDisplay = `${degFahren}\xB0 Fahrenheit is ${degCel}\xB0 Celcius`;
// let messageToDisplay;

function degCel(degFahren) {
    return ((5/9) * (degFahren - 32));  
};
console.log(degCel(degFahren));

let celciusToDisplay = `${degFahren}\xB0 Fahrenheit is ${degCel(degFahren)}\xB0 Celcius`;
let messageToDisplay;

if (degFahren < 65) {
    messageToDisplay = `Oh, that's cold!`;
} else if (degFahren >= 65) {
    messageToDisplay = `The temperature is not too cold for me!`;
} else {
    celcius = "";
    messageToDisplay = `That's not a temperature. Refresh and enter the degrees in Fahrenheit as a number.`;
}

document.getElementById('celcius').innerHTML = celciusToDisplay;
document.getElementById('message').innerHTML = messageToDisplay;

































// Hint 1: 
// Check to see if your equation looks like this:
// (5 / 9) * (fahrVar - 32)















// Hint 2:
// To display the two things you need to, you will need to use document.getElementById('id').innerHTML using the ids that are already on the paragraph tags in the index.html file.