//Matt Haug
//3/22/2024
//In class Dom Practice Question 1 

//Add an event Listener to get all objects, once everything is loaded
document.addEventListener("DOMContentLoaded", function(){
    let lengthInput = document.getElementById('lengthInput');
    let widthInput = document.getElementById('widthInput');
    let calcButton = document.getElementById('calculateBtn');
    let resultDisplay = document.getElementById('resultDisplay');

    //Keep the whole program nested as if we are missing somthing, the program
    // becomes useless

    //Function to calc the area of a rectangle 
    function calcArea(){
        let length = parseFloat(lengthInput.value);
        let width = parseFloat(widthInput.value);
        let area = length * width;
        return area;

    }

    // Function to display the caculated area 
    function displayArea(){
        let area = calcArea();
        resultDisplay.textContent=`Area: ${area}`;
    }

    calcButton.addEventListener("click", function(){
        displayArea();
    })

})





// Event listener to listen for button clicks