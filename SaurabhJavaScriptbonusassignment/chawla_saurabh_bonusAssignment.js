document.addEventListener("DOMContentLoaded", function(){
    let add = document.getElementById('btnAdd');
    let remove = document.getElementById('btnRemove');
    let changeColor = document.getElementById('btnChangeColor');
    let changeText = document.getElementById('btnChangeText');
    let resetButton = document.getElementById('btnReset');
    let list = document.getElementById('list');
    let container = document.getElementById('container');

    // I have try this to make so that each added item has a unique identifier or label.
    // in the question given that it is starting from 1, that is the reason, I have taken count=1.
    let count=1;

    // Add Element Button (btnAdd):
    // When clicked, this button should add a new <li> element to the list with text content "Item N", 
    // where N is a sequential number starting from 1.
    // Ensure that each added item has a unique identifier or label.
    function addList () {
        let list1 = document.createElement('li');
        // I have done the below step by looking at the class exercise at this example:-resultDisplay.textContent=`Area: ${area}`;
        list1.textContent = `item ${count}`;
        list.appendChild(list1);
        count++;
    }

    add.addEventListener('click', function(){
        addList();
    });

    // Remove Element Button (btnRemove):
    // When clicked, this button should remove the last <li> element from the list.
    // If the list is empty, no action should be taken

    function removeList() {
        // using the same logic which I have used in assignment 5 to remove the last element and also showed to our professor.
        let lastElement = list.lastElementChild;
        // Check if there is a last added element
        if (lastElement) {
            // Remove the child node
            list.removeChild(lastElement);
            console.log('Element Removed');
        }
        else {
            console.log('no action taken');
        }
    }

    remove.addEventListener('click', function () {
        removeList();
    });

    // Change Color Button (btnChangeColor):
    // When clicked, this button should change the background color of the
    // container (<div id="container">) to a random color from a predefined set. 
    // Use JavaScript to dynamically update the container's background color

    function changeBackgroundRandomColor () {
        let colors = ["red", "green", "blue", "orange", "pink"];
        // to change th background color of the container, I have used the container.style.backgroundColor 
        container.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

    }
    
    changeColor.addEventListener('click', function() {
        changeBackgroundRandomColor();

    });

    // Change Text Button (btnChangeText):
    // When clicked, this button should change the text content of the "Add Element" button (btnAdd) to a predefined new text.
    function changeButtonText() {
        add.textContent = "Hello Saurabh";
    }

    changeText.addEventListener('click', function() {
        changeButtonText();

    });

    // Reset Button (btnReset):
    // When clicked, this button should reset the list to its initial empty state and
    // restore the original text content of the "Add Element" button (btnAdd).
    // Additionally, reset the background color of the container to its default value.


    function reset() {
        // reset the list to its initial empty state
        list.innerHTML = '';
        // restore the original text content of the "Add Element" button (btnAdd).
        add.textContent = "Add Element";
        //reset the background color of the container to its default value. we have to use "container"
        container.style.backgroundColor='';

    }

    resetButton.addEventListener('click', function() {
        reset();
    });



});