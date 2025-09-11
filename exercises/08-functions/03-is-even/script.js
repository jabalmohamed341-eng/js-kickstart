// Is Even Exercise
// Goal: Create a function that determines if a number is even or odd

// TODO: Define a function called 'isEven' that:
function isEven(number) {
    return number % 2 === 0;
}
// - Takes one parameter: number
// - Returns true if the number is even, false if it's odd

// - Use the modulo operator (%) to check if number % 2 === 0

// TODO: Test your function by calling it with different numbers
console.log(isEven(4));  // Should output: true
console.log(isEven(7));
console.log(isEven(0));  // Should output: true
console.log(isEven(-2));
console.log(isEven(-3));
//console.log("Replace this with your solution!");  // Should output: false
// Example: console.log(isEven(4));  // Should output: true
// Example: console.log(isEven(7));  // Should output: false

//