// Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwish(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSandwish("Chicken", "Cheese", "Mayo","Egg");

makeSandwish("Bread", "Butter");

makeSandwish("Bread", "Butter","cheese");
