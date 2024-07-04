// Creating a Guest List Aray
var guestList = ["Anas", "Usman", "Hafeez", "Zohaib"];
// making variable for those guest who cant come
var dontCome = guestList[0];
//Print the name of guest who cant come
console.log(dontCome, "Nai Ahh Skty Han");
//Add or Remove guest from guest List Array
guestList.splice(0, 1, "Amir");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Additing a new guest at starting index of array
guestList.unshift("Ali");
// Additing a new guest at ending index of array
guestList.push("Zain");
// Additing a new guest at middle index of array
var middleIndex = (guestList.length / 2);
// Additing a new guest to middle of array
guestList.splice(middleIndex, 0, "Osama");
//Print Message of Update List
console.log("Update List of our Guests");
//Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguests) { return console.log("Salam ".concat(oneguests, ", would you like to dinner with me")); });
