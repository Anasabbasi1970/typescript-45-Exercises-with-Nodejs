// Mixing a Array of Countries and Print its Orginal Order 
let countriesTovisit: string[] = ["China","Denmark","Brazil","Argentina"];
console.log("Orignal Order:", countriesTovisit);

// Print the Array in Alphabetical order withoAcyual Array List
console.log("Alphbetical Order:", [...countriesTovisit].sort());

// Show that the array is still in this Original Order
console.log("Still in Orignal Order:", countriesTovisit);

//Print the array in Reversed Order without modifing the Actual Array List 
console.log("Reverse Order:", [...countriesTovisit].reverse());

// show that the array is still in this Original Order
console.log("Still in Orignal Order:", countriesTovisit);

// We have Change the Original Array Order Now
console.log("Original Array Reversed:", countriesTovisit.reverse());

// Print the Array to show that it's back to its Original Order
console.log("Back to Original Order:", countriesTovisit.reverse());

//Print the array to show that its Order has been Changed in Alphabetical Order Now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());

// We have Change again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesTovisit.reverse());
