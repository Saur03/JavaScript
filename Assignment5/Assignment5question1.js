/*
Author Name- Saurabh Chawla
Program- change the background color using random function and add the elements in the list
Date:- 5 March 2024
*/

// created the change background color function
function changeBackgroundRandomColor () {
    let colors = ["red", "green", "blue", "orange", "pink"];

    return colors[Math.floor(Math.random()*colors.length)]

}
// created the alter page function
function alterPage() {
    // When the "Alter Page" button is clicked, change the heading text to"Hello, [inputValue]!", where [inputValue] is the value entered in the input field.
    let user = document.getElementById('inputField').value;
    document.querySelector('h1').innerText = "Hello, " +user+"!";

    //Change the instruction text to "You entered: [inputValue]".
    document.getElementById("instruction").innerText = "You entered: "+user

    //Making the background a random color
    document.body.style.backgroundColor = changeBackgroundRandomColor();

    // Dynamic List Addition:- Add a new item to the list each time the button is clicked. The content of the new item should be "New Item [index]", where [index] is the number of items in the list
    let list = document.getElementById('list');

    //update list title 
    user.innerText="Updated shopping list";

    //create new li items
    let newItemOne = document.createElement('li');
    let newItemTwo = document.createElement('li');

    newItemOne.textContent='List Item 6';
    newItemTwo.textContent='List Item 7';

    list.appendChild(newItemOne);
    list.appendChild(newItemTwo);
}
let call = alterPage();
console.log(call);
