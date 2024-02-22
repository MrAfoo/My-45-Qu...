// Create an array of usernames (including 'admin')
const usernames = ['john', 'alice', 'admin', 'peter', 'susan'];

// Check if the array is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Remove all usernames from the array
    usernames.length = 0;
    console.log("All usernames removed.");
}
