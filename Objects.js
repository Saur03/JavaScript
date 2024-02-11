function createUserProfile(username,email,age){
    //Return an object without a name to caller
    return {
        username : username,
        email : email,
        age : age
    };
}
// Create a function to display user info
function displayUserInfo(userProfile){
    console.log(`Username: ${userProfile.username}\n
    Email: ${userProfile.email}\n
    Age: ${userProfile.age}`);
    console.log("-----------------------------");
}
//Create a function to update the users age
function updateUserAge(userProfile,newAge){
    userProfile.age = newAge;
}
//Create some test data

let userOne = createUserProfile("Mathew Haug","mhaug@stclaircollege.ca",28);
let userTwo = createUserProfile("Bob Smith","Fake@email.com",199);

displayUserInfo(userOne);
displayUserInfo(userTwo)

updateUserAge(userOne,99)
displayUserInfo(userOne)