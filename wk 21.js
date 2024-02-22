// Example conditional tests
let car = 'subaru';

// Test 1: Is car equal to 'subaru'?
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Expected output: true

// Test 2: Is car equal to 'honda'?
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // Expected output: false

// Test 3: Is car not equal to 'toyota'?
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // Expected output: true

// Test 4: Is car length greater than 5?
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5); // Expected output: false

// Test 5: Is car length less than or equal to 7?
console.log("Is car.length <= 7? I predict True.");
console.log(car.length <= 7); // Expected output: true

// Test 6: Is car uppercase?
console.log("Is car uppercase? I predict False.");
console.log(car === car.toUpperCase()); // Expected output: false

// Test 7: Is car lowercase?
console.log("Is car lowercase? I predict True.");
console.log(car === car.toLowerCase()); // Expected output: true

// Test 8: Is car a string?
console.log("Is car a string? I predict True.");
console.log(typeof car === 'string'); // Expected output: true

// Test 9: Is car a number?
console.log("Is car a number? I predict False.");
console.log(typeof car === 'number'); // Expected output: false

// Test 10: Is car undefined?
console.log("Is car undefined? I predict False.");
console.log(car === undefined); // Expected output: false
