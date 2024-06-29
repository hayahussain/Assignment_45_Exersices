                 // QUESTION 16

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
// you found a bigger dinner table.

// • Add one new guest to the beginning of your array.


// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list

let guestName:string[] = ["Azlan", "Zoha", "Kishwer"];
console.log("Guys good news, we found a bigger table");


// UNSHIFT

guestName.unshift("Zohan")


// SPLICE

guestName.splice(2,0,"Ali")


// PUSH

guestName.push("Saif")


// print message

guestName.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited for dinner`)
});





