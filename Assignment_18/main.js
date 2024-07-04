var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Mixing a Array of Countries and Print its Orginal Order 
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesTovisit);
// Print the Array in Alphabetical order withoAcyual Array List
console.log("Alphbetical Order:", __spreadArray([], countriesTovisit, true).sort());
// Show that the array is still in this Original Order
console.log("Still in Orignal Order:", countriesTovisit);
//Print the array in Reversed Order without modifing the Actual Array List 
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
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
