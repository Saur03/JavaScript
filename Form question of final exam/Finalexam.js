document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('myForm');
    let errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let age = document.getElementById('age').value.trim();

        errorMessages.innerHTML = ''; // Clear previous error messages

        let isValid = true;

        if (name === '') {
            displayError('Name cannot be empty.');
            isValid = false;
        }

        if (!isValidEmail(email)) {
            displayError('Invalid email format.');
            isValid = false;
        }

        let ageNum = parseInt(age);
        if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
            displayError('Age must be a number between 18 and 100.');
            isValid = false;
        }

        if (isValid) {
            let formData = {
                name: name,
                email: email,
                age: ageNum
            };
            console.log(formData);
            form.reset(); // Clear form fields
        }
    });

    function isValidEmail(email) {
        // Very basic email validation without regex
        let atIndex = email.indexOf('@');
        let dotIndex = email.lastIndexOf('.');
        return atIndex > 0 && dotIndex > atIndex;
    }

    function displayError(message) {
        let error = document.createElement('p');
        error.textContent = message;
        errorMessages.appendChild(error);
    }
});
