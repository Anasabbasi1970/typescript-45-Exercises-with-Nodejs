// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array og magicians names
var magicians_names = ["Ali", "Anas", "Usman"];
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
