// Array of Current_Users
let current_users = ["Usama","Ali","Anas","Zain","Haider"]

// Array of New_Users
let new_users = ["Ali","Hashir","Mohid","zain","Zamin"]

// Loop through new_users to check for avaibility
new_users.forEach(new_one_user => {
    
    // Making a Condition already exist and save in ur_Condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // print Different message using If-Else statments
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already talent!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
    })