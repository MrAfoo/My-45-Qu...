// Modify the make_shirt function to have default values
function make_shirt(size = 'large', message = 'I love TypeScript.') {
    console.log(`I'm going to make a ${size} shirt. It will say, "${message}"`);
}

// Create shirts with different sizes and messages
make_shirt(); // Large shirt with default message
make_shirt('medium'); // Medium shirt with default message
make_shirt('small', 'Hello World!'); // Small shirt with custom message
