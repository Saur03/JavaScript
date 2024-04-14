/*
JavaScript Validation:
● 
● 
● 
Text Selection Check:
● Write JavaScript code to check if any text is selected on the webpage
when the form is submitted.
● If text is selected, prevent the form from submitting and display an alert
message asking the user to deselect the text.
*/

//Step 1: Get the form and add an event listener for submit
document.getElementById('myForm').addEventListener('submit',
function(event){
    //Step 2: Prevent default 
    event.preventDefault();

    //Step 3: Validate 

    let userNameInput = document.getElementById('username').value.trim();
    let emailInput = document.getElementById('email').value.trim();
    let passwordInput = document.getElementById('password').value.trim();

    //User name validation
    //Using Regex but you don't need to know this, you could 
    //do ASCII codes as well
    if(userNameInput.length < 3 || !/^[a-zA-Z0-9]+$/.test(userNameInput)){
        //IF one of these matches, we need to enables the error
        document.getElementById('usernameError').textContent ="Your username must be atleast 3 chars and be only alpha numeric"
    }else{
        document.getElementById('usernameError').textContent ="";
    }

    //Email validation 

    //TODO EMAIL VALIDATION 

    //Password validation

    if(passwordInput < 8 || !/[a-zA-Z0-9]/.test(passwordInput)){
        document.getElementById('passwordError').textContent="You password must be atleast 8 chars and have upper,  lower, nums and specials"
    } else{
        document.getElementById('passwordError').textContent="";
    }

    //Step 4: Check if text is selected 

    let selectedText = window.getSelection().toString().trim();

    if(selectedText != ''){
        alert("Please deselect the text before submitting the form")
        return;
    }

    //If all validation passes, we have to submit the form 

    alert("Form Submitted!")
    event.target.submit(); //submit the form

})