// Greet User Exercise
// Ask for the user's name and provide a personalized greeting

const prompt = require('prompt-sync')();

// TODO: Ask for the user's name
const name = prompt("What is your name? ");
console.log(name);

// TODO: Create and display a personalized greeting
console.log("Hello, " + name + "! Welcome to JavaScript programming!");