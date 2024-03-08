/*
Author Name- Saurabh Chawla
Program- add the elements, remove the elements, clear the form and update the paragraphs, heading and buttons.
Date:- 7 March 2024
*/

// add the element
function addElement(){

    // Add Elements:
    // When the "Add Element" button is clicked, dynamically add an element to the elementContainer div based on the user-selected element type (paragraph, heading, or button). 
    // The content of the element should be the text entered in the input field.
    
    // getting the input value of button
    let element = document.getElementById('elementContainer');
    let input = document.getElementById('elementType').value;
    console.log(input);
    let enter = document.getElementById('elementContent').value;
    console.log(enter);
    let newElement;
    switch(input) {
        case 'paragraph':
            newElement = document.createElement('p');
            newElement.textContent=enter;
            element.appendChild(newElement);
            break;
        case 'heading':
            newElement = document.createElement('h1');
            newElement.textContent=enter;
            element.appendChild(newElement);
            break;
        case 'button':
            newElement = document.createElement('button');
            newElement.textContent=enter;
            element.appendChild(newElement); 
            break;
    }
}

   // Removal
   // Implement a feature to remove an individual element when its associated remove button is clicked. 
   // Include a "Remove" button or similar next to each dynamically added element once the element is removed, you must print to the console "Element Removed".
   function removeElement() {
    let element1 = document.getElementById('elementContainer');

    // in this line, It retrieve the last child element of the 'element1' element and assign it to the lastElement
    // lastElementChild property return the last child element of the specific elements
    let lastElement = element1.lastElementChild;

    // Check if there is a last added element
    if (lastElement) {
        // Remove the lastElement from its parent Element
        lastElement.remove();
        console.log('Element Removed');
    }

    //calling the clear form function
    clearForm();

    //calling the updateElements function
    updateElements();
}

   
    // Clear Form
    // Implement a feature to clear the form fields after an element is added, You must use the alert function to say that the form cleared sucessfully.
    function clearForm(){
        let clear = document.getElementById('elementForm');
        clear.reset();
        alert('Form cleared successfully');
    }

    // Update Element Counts:
    // Display the current count of each type of element at the end of the elementContainer. For example, "Paragraphs: 3, Headings: 2, Buttons: 1, Separate each element with a ;.
    function updateElements(){
        let para = document.querySelectorAll('p').length;
        let head = document.querySelectorAll('h1').length;
        let btn = document.querySelectorAll('button').length;
        console.log(`Paragraphs: ${para}, Headings: ${head}, Buttons: ${btn}`)
    }




