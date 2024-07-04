// Define Variables
var apple = "apple";
var uppercaseApple = "Apple";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Test for Equility with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
// Test for Inequility with strings
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
// Test Using Lowercase Function
console.log("\nIs Apple is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs Apple is  not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Tests
// Equal to
console.log("\n Is ten is equal to twenty");
console.log(ten == twenty);
// Not Equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\n Is ten is greater than zaer?");
console.log(ten > 0);
// Less than
console.log("\n Is twenty is less than 10");
console.log(twenty < 10);
// Greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// Smaller than or equal to
console.log("\n Is twenty is less than or equal to 10");
console.log(twenty <= 10);
// Tests using "and" & "or" operators
// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 30 and twenty is greater than 30");
console.log(twenty != 30 && twenty > 30);
// Using || (or)
console.log("\n 20 is greater than 50 OR 20 is eqaual to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is  not eqaual to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is incclude in array
console.log("\n Is orange include in my fruits araay");
console.log(fruits.includes("orange"));
// Not Include
console.log("\n Is orange not include in my fruits array");
console.log(!fruits.includes("orange"));
