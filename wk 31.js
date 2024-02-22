// Create a list of current usernames
const current_users = ['john', 'alice', 'admin', 'peter', 'susan'];

// Create a list of new usernames (including some from current_users)
const new_users = ['john', 'mary', 'susan', 'james', 'emma'];

// Check if each new username is already used (case insensitive)
for (let i = 0; i < new_users.length; i++) {
    const newUserLower = new_users[i].toLowerCase();
    if (current_users.includes(newUserLower)) {
        console.log(`Username '${new_users[i]}' is not available. Please choose another username.`);
    } else {
        console.log(`Username '${new_users[i]}' is available.`);
    }
}
