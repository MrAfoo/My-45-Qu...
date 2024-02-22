function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Example usage
const magiciansArray = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Derren Brown"];

// Modify the array
make_great(magiciansArray);

// Display the modified list
console.log("Modified Magicians:");
for (const magician of magiciansArray) {
    console.log(magician);
}
