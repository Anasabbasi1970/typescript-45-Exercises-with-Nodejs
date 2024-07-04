// Array of Current_Users
var current_users = ["Usama", "Ali", "Anas", "Zain", "Haider"];
// Array of New_Users
var new_users = ["Ali", "Hashir", "Mohid", "zain", "Zamin"];
// Loop through new_users to check for avaibility
new_users.forEach(function (new_one_user) {
    // Making a Condition already exist and save in ur_Condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print Different message using If-Else statments
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already talent!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
