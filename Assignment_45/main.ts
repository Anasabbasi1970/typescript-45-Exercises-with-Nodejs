// Define a function to create a car object a car object with optional options..

function create_car(manufacture, model, ...options){
    // Intialize a car object with manufacture and model
    let car ={
        manufacture: manufacture,
        model: model
    };

    // Add additional option to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

// Call te function to create a car object
let my_car = create_car("Toyota", "Corrolla", "colour : Black","Sunroof : True", "Year : 2024");

// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);