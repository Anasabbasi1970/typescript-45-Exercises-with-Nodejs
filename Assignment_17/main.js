// Creating a guest list array
var guestList = ["Anas", "Usman", "Hafeez", "Zohaib"];
// Storing the name of the guest who can't come
var dontCome = guestList[0];
// Printing the name of the guest who can't come
console.log(dontCome, "cannot come.");
// Updating the guest list due to someone else joining
guestList.splice(0, 1, "Amir");
// Notifying of a larger table being available
console.log("Good News! We have found a bigger table for dinner.");
// Adding a new guest at the beginning of the array
guestList.unshift("Ali");
// Adding a new guest at the end of the array
guestList.push("Zain");
// Calculating the middle index of the array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest in the middle of the array
guestList.splice(middleIndex, 0, "Osama");
// Printing an update message for the guest list
console.log("Updated list of our guests:");
// Sending invitation messages to all guests
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, ", would you like to have dinner with me?")); });
// Informing that only two guests can be invited due to time constraints
console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two guests to dinner.");
// Using a while loop to remove guests from the array until only two remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Inviting the last two guests
console.log("Invitations to the last 2 guests:");
guestList.forEach(function (lastTwo) { return console.log("Luckily ".concat(lastTwo, ", you are still invited to dinner.")); });
// Removing the last two guests from the list
guestList.pop();
guestList.pop();
// Displaying the empty guest list
console.log("Empty List:", guestList);
