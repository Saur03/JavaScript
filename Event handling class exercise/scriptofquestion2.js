//Matt Haug
//March 22nd 2024
//Inclass Question 2 

//Event listener for when the webpage is finished loading 
document.addEventListener("DOMContentLoaded",function(){
    let firstNameInput = document.getElementById('firstNameInput');
    let lastNameInput = document.getElementById('lastNameInput');
    let emailInput = document.getElementById('emailInput');
    let phoneInput = document.getElementById('phoneInput');
    let submitButton = document.getElementById('submitBtn');
    let outputDisplay = document.getElementById('outputDisplay');

    //function to display the helper message info
    function displayHelperMessage(inputFieldId,message){
        let helperDiv = document.getElementById(`${inputFieldId}Helper`);
        helperDiv.textContent=message;
    }

    //Eventlistener for when a field gains focus
    firstNameInput.addEventListener("focus",function(){
        displayHelperMessage('firstName','Enter only your first name');
    })
    firstNameInput.addEventListener("blur",function(){
        displayHelperMessage('firstName',"")
    }) 
    lastNameInput.addEventListener("focus",function(){
        displayHelperMessage('lastName','Enter only your last name');
    }) 
    lastNameInput.addEventListener("blur",function(){
        displayHelperMessage('lastName','');
    })
    emailInput.addEventListener("focus",function(){
        displayHelperMessage('email','Enter only your email');
    }) 
    emailInput.addEventListener("blur",function(){
        displayHelperMessage('email','');
    }) 
    phoneInput.addEventListener("focus",function(){
        displayHelperMessage('phone','Enter only your phone Number');
    }) 
    phoneInput.addEventListener("blur",function(){
        displayHelperMessage('phone','');
    }) 

    //function to process the form submission (Stop the form submission)
    function processForm(event){
        event.preventDefault();

        let firstName = firstNameInput.value.trim();
        let lastName = lastNameInput.value.trim();
        let email = emailInput.value.trim();
        let phone = phoneInput.value.trim();

        if(firstName === "" || lastName === "" || email ==="" ||phone ===""){
            alert('Please fill out all fields and try again');
            return
        }
        outputDisplay.textContent= `First Name ${firstName}\n
        Last Name: ${lastName}\n
        Email: ${email}\n
        Phone Number: ${phone}`;
    }

    submitButton.addEventListener("click",processForm)
    //Retrive values from the input fields and ensure they are filled and not empty 

    //Display the processed information

    //Add an evenetlistener that will listen for when the submit button is clicked
    
    
})