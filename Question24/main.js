// QUESTION 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let mobile = "mobile";
// Test for equality
console.log("mobile is equal to mobile");
console.log(mobile == "mobile");
// Test for inequality
console.log("mobile is not equal to mobile");
console.log(mobile != "mobile");
// Test using the lower case function
let mango = "MANGO";
// Equilty
console.log("mango is equal to mango after lower case");
console.log(mango.toLowerCase() == "mango");
// Inequilty
console.log("mango is not equal to mango aftrer lower case");
console.log(mango.toLowerCase() != "mango");
// Numerical tests involving equality and inequality,
let nine = 9;
let six = 6;
// Equality
console.log("nine is equal to six");
console.log(nine == six);
// Inequality
console.log("nine is not equal six");
console.log(nine !== 6);
// Greater Than
console.log("nine is greater than six");
console.log(9 > 6);
// Less Than
console.log("nine is less than six");
console.log(9 < 6);
// Greater than or equal to
console.log("nine is greater than or equal to six");
console.log(9 >= 6);
// Less than or equal to
console.log("nine is less than or equal to six");
console.log(9 <= 6);
// Tests using "and" and "or" operators
// using && Operator
let a = 16;
let b = 15;
let c = 14;
console.log("a is greater than b and b is greater than c");
console.log((a > b) && (b > c));
console.log("a is equal b and b is greater than c");
console.log((a == b) && (b > c));
// Using || Operator
console.log("a is not equal c Or b greater than c");
console.log((a != c) || (b < c));
console.log("a is equal b Or b less than c");
console.log((a == b) || (b < c));
/// est whether an item is in a array
let favPlace = ["America", "Paris", "Turkey"];
console.log("Turkey is include in my favorite place");
console.log(favPlace.includes("Turkey"));
console.log("Turkey is not include in my favorite place");
console.log(!favPlace.includes("Turkey"));
export {};
