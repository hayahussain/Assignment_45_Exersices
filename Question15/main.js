// QUESTION 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
// new set of invitations. You’ll have to think of someone else to invite.
let guestName = ["Azlan", "Zoha", "Zohan"];
let unableAttend = guestName.splice(1, 1);
console.log(`${unableAttend}, not invited for dinner`);
// Push
guestName.push("kishwer");
// New Invitation
guestName.forEach(guest => {
    console.log(`Dear ${guest}, you are invited for dinner`);
});
export {};
