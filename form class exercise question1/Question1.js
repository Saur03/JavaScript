/*
● 
● Inside the event listener:
● 
● .
● 
● Retrieve the input values (name, gender, country) from the
form fields.
● Validate the input data to ensure all fields are filled out.
● If validation passes:
● Save the form data to local storage (localStorage).
● Display a success message using alert().
● Optionally, reset the form fields using form.reset().

*/


//Step 1: Use DOM Content Loaded to ensure JS will only run after HTML compiles 

document.addEventListener("DOMContentLoaded", () => {
//Step 2: Get our form elements 

    //Form, nameInput, genderInput,CountrySelect 
    let form = document.getElementById('user-form');
    let nameInput = document.getElementById('name');
    let genderMaleInput = document.getElementById('gender-male');
    let genderFemaleInput = document.getElementById('gender-female');
    let genderOtherInput = document.getElementById('gender-other');
    let countrySelect = document.getElementById('country');

    //Step 3: Check to see if there is content saved 
    let savedName = localStorage.getItem('name');
    let savedGender = localStorage.getItem('gender');
    let savedCountry = localStorage.getItem('country');

    //IF the values exist, apply them 
    if(savedName){ // if true
        nameInput.value == savedName
    }

    if (savedGender === 'male'){
        genderMaleInput.checked = true;
    } else if (savedGender === 'female'){
        genderFemaleInput.checked = true;
    } else if(savedGender === 'other'){
        genderOtherInput.checked = true;
    }

    if (savedCountry){
        countrySelect.value == savedCountry;
    }

    //Step 4: Add submit event listener
    form.addEventListener('submit', (event) => {
        event.preventDefault() //stops the form from being submitted

        //Step 5: get form data 
        let name = nameInput.value.trim();
        let gender = form.querySelector('input[name=gender]:checked');
        let country = countrySelect.value;

        //step 6, ensure everything is filled out

        if(!name || !gender || !country){
            alert("Please fill out all form fields. k thanks");
            return;
        }

        //Step 7: If the items exist, save them

        localStorage.setItem('name', name);
        localStorage.setItem('gender',gender);
        localStorage.setItem('country',country);

        //Step 8: Alert and clear the form

        alert("Form submitted sucessfully! ")
        form.reset();

    })

});