//Tests for equality and inequality with strings:
let favoriteColor = 'blue';

console.log("Is favoriteColor equal to 'blue'? I predict True.");
console.log(favoriteColor === 'blue'); // Expected output: true

console.log("Is favoriteColor not equal to 'green'? I predict True.");
console.log(favoriteColor !== 'green'); // Expected output: true

// Numerical tests
const age1 = 25;
console.log(age1 < 18); // Expected output: false
console.log(age1 >= 18); // Expected output: true


//Numerical tests:
let age = 25;
if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18) {
    console.log("You are an adult.");
}


//Tests using the lowercase function:
const fruits = ['apple', 'banana', 'orange'];
if (fruits.includes('banana')) {
    console.log("Banana is in the list of fruits.");
}

//Test whether an item is not in an array:
const vegetables = ['carrot', 'spinach', 'broccoli'];
if (!vegetables.includes('tomato')) {
    console.log("Tomato is not in the list of vegetables.");
}

// Tests using "and" and "or" operators
const temperature = 28;

// Check if temperature is between 30 and 40 (warm day)
if (temperature > 30 && temperature < 40) {
    console.log("It's a warm day.");
} else {
    console.log("It's not a warm day.");
}

// Check if temperature is less than 10 or greater than 40 (extreme weather conditions)
if (temperature < 10 || temperature > 40) {
    console.log("Extreme weather conditions.");
} else {
    console.log("Weather conditions are within the normal range.");
}



