// Define a function to create a car object a car object with optional options..
function create_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Intialize a car object with manufacture and model
    var car = {
        manufacture: manufacture,
        model: model
    };
    // Add additional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call te function to create a car object
var my_car = create_car("Toyota", "Corrolla", "colour : Black", "Sunroof : True", "Year : 2024");
// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
