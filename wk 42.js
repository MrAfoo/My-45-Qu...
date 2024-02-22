function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

// Example usage
const originalMagicians = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Derren Brown"];

// Create a new array with "the Great" added to each magician's name
const greatMagiciansArray = make_great(originalMagicians);

// Display the original and modified lists
console.log("Original Magicians:");
console.log(originalMagicians.join(", "));

console.log("\nGreat Magicians:");
console.log(greatMagiciansArray.join(", "));
