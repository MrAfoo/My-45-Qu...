// Create an array of usernames (including 'admin')
const usernames = ['john', 'alice', 'admin', 'peter', 'susan'];

// Loop through the array and print greetings
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
