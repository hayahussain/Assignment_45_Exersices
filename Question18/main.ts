                       // QUESTION 18

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
// has changed.

let favoritePlace:string[] = ["Turkey", "Paris", "Maldives", "Switzerland", "America"]
console.log("Original Order:", favoritePlace);

// Print Alphabetical Order

console.log("alphabetical Order:" , favoritePlace.slice().sort());

// Original Order

console.log("Original order:", favoritePlace);

// Reverse

console.log("Reverse alphabetical Order:" , favoritePlace.slice().sort().reverse());

// Original Order

console.log("Original order:", favoritePlace);

// Reverse Order List

favoritePlace.reverse()
console.log("Reverse Order:", favoritePlace);

// Reverse order list again

favoritePlace.reverse()
console.log("Back to Original Order:", favoritePlace);


//  Sort your array so it’s stored in alphabetical order

console.log("Sorted in alphabetical Order:", favoritePlace.sort());

//  Sort to change array so it’s stored in reverse alphabetical order

favoritePlace.sort().reverse()
console.log("Sorted in Reverse Order:", favoritePlace);

