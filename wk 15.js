// Original guest list (from Exercise 16)
const guests = [
    "Marie Curie",
    "Audrey Hepburn",
    "Nelson Mandela",
    "Albert Einstein",
    "Marie Curie",
    "Isaac Newton"
  ];
  
  // Informing about the limited space
  console.log("Attention: Due to unforeseen circumstances, we can only invite two guests for dinner.\n");
  
  // Removing guests until only two names remain
  while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we regretfully inform you that we can't invite you to dinner.`);
  }
  
  // Print invitation messages for the remaining two guests
  console.log(`\nDear ${guests[0]},\nYou're still invited to our intimate dinner. Please join us on [24/2/2024] at [9 O'clock].\n`);
  console.log(`Dear ${guests[1]},\nYou're still invited to our intimate dinner. Please join us on [24/2/2024] at [9 O'clock].\n`);
  
  // Empty the list
  guests.length = 0;
  
  // Verify that the list is empty
  console.log("Updated guest list:", guests);
  