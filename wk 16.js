// Original list of places to visit
const placesToVisit = [
  "Kashmir",
  "Glacier National Park",
  "Saudia Arabia",
  "India",
  "Maldives"
];

// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order (without modifying the list)
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Verify that the original order is still intact
console.log("\nStill in original order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order (without changing the original list)
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Verify that the original order is still intact
console.log("\nStill in original order:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("\nBack to original order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
