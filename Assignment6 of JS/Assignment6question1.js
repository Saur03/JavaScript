// Question1:- You are tasked with creating a simple to-do list application. Below is the provided HTML structure for the application. 
// Your task is to implement the JavaScript functionality for this to-do list. 
// The application should meet the following requirements:

// Users should be able to input tasks into the text field (#taskInput) and add them to the list by clicking the "Add Task" button (#addTaskBtn).
document.addEventListener("DOMContentLoaded", function () {
    let inputTask = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
    let btn = document.getElementById('addTaskBtn');

    function add(){
        let enter = inputTask.value;
        // Create a list
        let list = document.createElement('li');
        list.textContent = enter;
        taskList.appendChild(list);

        // Created a checkbox
        // When a task is added, it should be displayed in the list with a checkbox beside it. 
        // Users should be able to mark tasks as completed by checking the checkbox

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

         // in this line, I am adding a eventlistener on checkbox for the change event
         // the event object which is passed in function contain information about the event, including which event triggered the event.
         checkbox.addEventListener('change', function(event) {
            // in this I have used event.target because it refer to checkbox element that is changed
            // also took help from the textbook where target was used. 
            let checkboxElement = event.target;

            // I have used google to learn this .checked in this line because it is property of checkbox element 
            // which returns a boolean value indicating whether the checkbox is checked('true') or unchecked('false')
            // because yesterday, you told me that it should be printed that whether we have selected the checkbox or not.
          if (checkboxElement.checked) {
            console.log('You have selected the checkbox.');
            } else {
                console.log('You have not selected the checkbox.');
            }
        });

        // Additionally, each task item should have a "Delete" button appended to it. 
        // Clicking this button should remove the respective task from the list.

        // i have created the delete button by using create Element
        let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

        // in this , i am adding an eventlistener to the deleteButton for the click event
        deleteButton.addEventListener('click', function() {
            // In this , I have used the remove property to remove an element from the list
            list.remove();
        });    

        list.appendChild(checkbox);
        list.appendChild(deleteButton);
    }

    btn.addEventListener("click", function() {
        add();
    });
    
});

 