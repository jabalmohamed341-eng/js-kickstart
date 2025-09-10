// Maximum of Three Exercise
// Goal: Ask for three numbers and find the largest one

const prompt = require('prompt-sync')();

// TODO: Ask the user for three numbers
const num1Input = prompt("Enter the first number: ");
const num2Input = prompt("Enter the second number: ");
const num3Input = prompt("Enter the third number: ");
// Hint: You can use prompt() three times to get three separate inputs
// TODO: Convert each input to a number using Number()
const num1 = Number(num1Input);
const num2 = Number(num2Input);
const num3 = Number(num3Input);
// TODO: Use selection statements to determine which number is largest
let max = num1;
if (num2 > max) {
    max = num2;
}
if (num3 > max) {
    max = num3;
}
console.log("The largest number is: " + max);
// TODO: Display the maximum number
