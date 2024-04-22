'use strict';
/*
	WEB 230 Winter 2022
	Assignment 7
	{your name, student number, and date here}
	Name- Saurabh Chawla
	Student number- 0838092
	Date- 12 April 2024
	Assignment name- Forms assignment and assignment 7
*/
document.addEventListener("DOMContentLoaded", function(){
	// Step 1:-  Select the form element and save it in a variable.
	let form = document.querySelector('form');
	// the password input field in the HTML has a name attribute of "password".
	// Since, I am selecting it by its name attribute, that is the reason, I have used the below statement to target it.
	let pass = document.querySelector('input[name="password"]');
	// the below 2 lines, I am targeting it by their IDs.
	let city = document.getElementById('city');
	let comment = document.getElementById('comment');

	let name = document.querySelector('input[name="firstName"]');
	let show = document.getElementById('show');

	//for checkbox part
	let checkbox = document.querySelector('input[name="accept"]');
	let send = document.querySelector("button[name='send']");

	// Step 2. When the page loads do the following:
	// add the password value "monkey"
	pass.value = 'monkey';
	// select the favourite city "New York"
	city.value = 'New York';
	
	//clear the textarea
	comment.value='';

	// Step 3:- Add an event handler to the "name" field to change the background color of the "name" field to
	// green when the length of the string is at least 5 characters. Make sure the color is removed if the
	// count goes below 5. (Hint: input event)
	name.addEventListener('input', function(){
		if(name.value.length >= 5){
			name.style.background = 'green';
		}
		// if the count is below 5, the color will be removed.
		else {
			name.style.background = '';
		}
	});

	// Step 4:- Add an event handler to the "Show" button to display the password. When the password is
	// shown change the button to say "Hide" and visa versa. (Hint: change the field type to "text") Also,
	// prevent the form from submitting. 
	show.addEventListener('click', function (){
		if (pass.type === 'password'){
			pass.type = 'text';
			show.textContent = 'hide';
		}
		else {
			pass.type = 'password';
			show.textContent = 'Show';
		}
	});

	// Also prevent the form from submitting

	form.addEventListener('submit', function (event){
		event.preventDefault();
	
	});



	// Step 5. When the checkbox is checked enable the "Send Data" button, when unchecked disable it.
	// I have done the below step using the class exercise which our professor have told on 16 April 2024 in the class.
	checkbox.addEventListener('change', function(){
		send.disabled = !checkbox.checked;
	});

	form.addEventListener('submit', function (event){
        // Step 6. When the form submits: 
        // check that the favourite food is "Apple". If not, do not submit the form and show an alert
        // box that tells the user what food they should like. (Hint: remember that the value of a form field is always a string.)
        // See if any text is selected in the textarea. If it is, do not submit the form and show an alert
        // box asking the user why they selected that text.

        // Check favorite food
        let food = document.querySelector("input[name='food']:checked");
        if (!food || food.value !== "2"){
            event.preventDefault();
            alert("What food you should like?");
            return;
        }

        // checking if the any text is selected in the textarea and 
		// done the below part using the class exercise which our professor have told us. 
		let selectedText = window.getSelection().toString().trim();
		if(selectedText != ''){
			alert("Why did you selected that text?");
        	return;
    	}
        
		console.log('Form submitted successfully.');

    });

	// Step 7. When the user enters their first name (change event) save the value to localStorage. When the
	// page loads, check to see if there is a value stored. If so, fill in the first name with that value. (This
	// is tricky to test since most browsers will keep the form data over page refresh. To check if it is
	// working, open a new tab in your browser and copy the URL to the new tab. The first name
	// should be filled in.)

	// Save the first name to localStorage using change event
	name.addEventListener('change', function(){
		localStorage.setItem("firstName", name.value);
	});

	// checking here if there is a value stored.
	let valueStore = localStorage.getItem("firstName");
	if (valueStore) {
		name.value = valueStore;
	}

});

