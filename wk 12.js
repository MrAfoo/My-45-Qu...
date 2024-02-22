
// List of dinner guests 
const dinnerGuests = [
    {
        name: "Leonardo da Vinci",
        message: `Dear Leonardo, your genius in art, science, and invention has always fascinated me. I'd be honored if you could join me for dinner to discuss your masterpieces and unravel the mysteries of your mind. 🎨🔍`,
    },
    {
        name: "Marie Curie",
        message: `Dear Marie, your groundbreaking work in radioactivity and your resilience as a female scientist inspire me. Let's share a meal and delve into the wonders of the universe. 🌟⚛️`,
    },
    {
        name: "Nelson Mandela",
        message: `Dear Madiba, your unwavering commitment to justice, equality, and forgiveness has left an indelible mark on humanity. Join me for dinner, and let's discuss the path to a better world. 🌍✊`,
    },
];
// Sending invitations
dinnerGuests.forEach((guest) => {
    console.log(`Inviting ${guest.name}:\n${guest.message}\n`);
});

//The guest who cannot attend party
console.log("Unfortunately,Leonardo da Vinci regrets that he won’t be able to attend.🙁");