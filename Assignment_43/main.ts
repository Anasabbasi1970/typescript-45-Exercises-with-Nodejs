// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through.map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array og magicians names
let magicians_names = ["Ali","Anas","Usman"];

// Making a copy of Orignal array through.slice() function

let copy_magician_names = magicians_names.slice()

// Modify the copied array to include "The Great" with their names
 let copy_great_magicians = make_great(copy_magician_names);

// Show both array Orignal and Copied

// Orignal
console.log("Orignal Array\n")
show_magicians(magicians_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);
