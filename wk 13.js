
// List of dinner guests      
const dinnerGuests = [
    {
        name: "Audrey Hepburn", //guest changed
        message: `Dear Audrey Hepburn,\n\nYour elegance, grace, and philanthropic spirit continue to inspire generations. It would be an absolute delight to have you as our guest for an enchanting dinner. Let's discuss art, life, and the magic of Kindness`,
    },
    {
        name: "Marie Curie",
        message: `Dear Marie Curie,\n\nYour groundbreaking work in radioactivity and your resilience as a female scientist inspire me. Let's share a meal and delve into the wonders of the universe. 🌟⚛️`,
    },
    {
        name: "Nelson Mandela",
        message: `Dear Nelson Mandela,\n\nYour unwavering commitment to justice, equality, and forgiveness has left an indelible mark on humanity. Join me for dinner, and let's discuss the path to a better world. 🌍✊`,
    },
];
// Sending invitations
dinnerGuests.forEach((guest) => {
    console.log(`Inviting ${guest.name}:\n${guest.message}\n`);
});


console.log("I’ve found a bigger dinner table! 🎉. Let's update our guest list to accommodate more remarkable individuals");  //Expanding guest list