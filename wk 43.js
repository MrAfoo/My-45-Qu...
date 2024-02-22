function makeSandwich(...ingredients) {
    console.log("Sandwich Summary:");
    if (ingredients.length > 0) {
        console.log(`Your sandwich includes: ${ingredients}`);
    } else {
        console.log("No ingredients provided for the sandwich.");
    }
}

// Example calls
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich();
makeSandwich("Peanut Butter", "Jelly", "Banana", "Honey");
