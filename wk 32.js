// Create an array of numbers from 1 to 9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array and print the proper ordinal ending for each number
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    let ordinal;

    if (num === 1) {
        ordinal = 'st';
    } else if (num === 2) {
        ordinal = 'nd';
    } else if (num === 3) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }

    console.log(`${num}${ordinal}`);
}
