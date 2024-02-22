// Original guest list (from Exercise 15)
const guests = ["Nelson Mandela", "Audrey Hepburn", "Marie Curie"];

// Add a new guest to the beginning
guests.unshift("Albert Einstein");

// Add a new guest to the middle
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Marie Curie");

// Use push() to add a guest to the end
guests.push("Isaac Newton");

// Print invitation messages
guests.forEach((guest) => {
  console.log(`Dear ${guest},\n\nYou are cordially invited to an enchanting dinner at my home. Let's discuss ideas, share stories, and celebrate life. Please join us on [24/2/2024] at [9 O'clock].\n\nWarm regards,\n[Affan Ali]\n`);
});
