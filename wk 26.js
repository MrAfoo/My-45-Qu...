// Choose an alien color (you can change this value)
const alienColor = 'indigo'; // Try 'green' or 'red' as well

// Check the alien's color and provide points accordingly
if (alienColor === 'green') {
    console.log("You just earned 5 points for shooting the green alien.");
} else if (alienColor === 'yellow') {
    console.log("You just earned 10 points for shooting the yellow alien.");
} else if (alienColor === 'red') {
    console.log("You just earned 15 points for shooting the red alien.");
} else {
    console.log("Unknown alien color. No points awarded.");
}
