// Making a function
function make_shirt(size : string = "Large", printMessage : string = "I love TypeScript"){
    console.log(` Creating a ${size} shirt with the ${printMessage} print on shirt`)
}

// Calling a Fuction with by default values
make_shirt();

// Calling a Function now with Medium shirt and default messaage
make_shirt("Meduim");

// Caaling a Function now with Small Size and also Different Print Message
make_shirt("small", "I love JavaScript");
