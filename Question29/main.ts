                    // QUESTION 29

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
// that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
// is in your array, the if block should print a statement, such as You really like bananas!

// Creating Array

let favorite_fruits:string[] = ["Cherry", "Mango", "Grapes"]

if(favorite_fruits.includes("Cherry")){
    console.log("I Really like Cherry.")
}
if(favorite_fruits.includes("Mango")){
    console.log("I Really like Mango.")
}
if(favorite_fruits.includes("Grapes")){
    console.log("I Really like Grapes.")
}
if(favorite_fruits.includes("Orange")){
    console.log("I Really like Orange.")
}
if(favorite_fruits.includes("kiwi")){
    console.log("I Really like kiwi.")
}