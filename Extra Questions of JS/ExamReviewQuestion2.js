//Create an event listener to content being loaded 

document.addEventListener('DOMContentLoaded', function(){
    //get our elements 
    let form = document.getElementById('myForm');
    let submit = document.getElementById('submitButton');
    let fullName = document.getElementById('fullName');
    let email = document.getElementById('email');
    let street = document.getElementById('street');
    let agree = document.getElementById('agree');
    
    //Disable submie button by default 
    //submit.disabled = true;

    //Logic for if the agree is checked, enable submit box 

    agree.addEventListener('change',function(){
        submit.disabled = !agree.ariaChecked; //Lets see if this works
    });

    //Listener for preventing submit 
    submit.addEventListener('submit',function(event){
        event.preventDefault();
    });

    //Validate our forms 
    let fullNameInput = fullName.value.trim();
    let emailValue = email.value.trim();
    let streetValue = street.value.trim();
    //Check to make sure everything is entered 
    if(!fullNameInput){
        alert("Please enter your full name");
        return; //Ugly way of doing this but it works 
    }
    else if (!emailValue){
        alert("Please enter your email");
        return;
    }
    else if (!streetValue){
        alert("please enter your street ")
        return;
    } else if (!agree.checked){
        alert("Please check the checkbox to accept the terms");
        return;
    }
    //Using regex, so I wont be asking this
    if(fullName.length > 16 && /^[a-zA-Z]+$/.test(fullName)){
        fullName.style.color='green';
    }
})