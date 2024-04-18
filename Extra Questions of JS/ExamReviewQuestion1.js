/*
Instructions:
HTML Setup:
● Create an HTML file with a form containing the following fields:
● Name (input type: text)
● Email (input type: email)
● Address (input type: text)
● Agreement Checkbox (input type: checkbox)
● Submit Button
● Ensure each input field has an appropriate label and ID attribute.
Form Submission Handling:
● Write JavaScript code to prevent the default form submission behavior.
Get Form Fields:
● Using JavaScript, retrieve the values entered by the user in all form fields.
Checkbox Validation:
● Disable the submit button initially.
● Enable the submit button only when the agreement checkbox is checked.
Form Field Validation:
● Upon form submission, check if all form fields (Name, Email, Address) are
filled out and the agreement checkbox is checked.
● If any field is empty or the agreement checkbox is unchecked, display an
alert prompting the user to fill out all fields and agree to the terms.
DOM Manipulation:
● If the name entered by the user is longer than 8 characters, change the
color of the name input Field to red.
*/



document.addEventListener('DOMContentLoaded', function(){

    //Get my fields
    let form = document.getElementById('myForm');
    let submitButton = document.getElementById('submitButton');
    let email = document.getElementById('email')
    let name = document.getElementById('name');
    let address = document.getElementById('address');
    let agree = document.getElementById('agree')//This is our checkbox 

    //Enable the submit button if checkbox is true (checked)
    agree.addEventListener('change', function(){
        submitButton.disabled = !agree.checked // Either true or false
    });

    //prevent default on submit
    form.addEventListener('submit',function(event){
        event.preventDefault();//Prevent the form being submmited so we 
        //can do validation on it 
        alert("Submit prevented")
    });

    //Form Validation 
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let addValue = address.value.trim();

    //Validate that each field is filled
    if(!nameValue || !emailValue || !addValue || !agree.checked){
        alert("Please fill out all fields")
        return;
    }

    //manipulate content based on length 
    if(nameValue.length > 8){
        //Adding class list but can just change background color to red 
        name.classList.add('error');
    } else{
        name.classList.remove('error')
    }

    event.target.submit();
    
});