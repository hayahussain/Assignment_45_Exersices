                             // QUESTION 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
// have one parameter that collects as many items as the function call provides, and it should print a summary 
// of the sandwich that is being ordered. Call the function three times, using a different number of arguments
// each time.

function Sandwich(...items: string[]){
    console.log("\nMaking the Sandwich with the following items: \n")
    items.forEach(singleItem =>
console.log(singleItem)
    )
        
    
}
Sandwich("Bread", "chicken")
Sandwich("Egg", "Butter", "Mayonise")
Sandwich("Tomoto", "Lettuce", "ketchup", "Cheese")