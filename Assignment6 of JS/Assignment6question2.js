// Initial Display:
// Upon loading the webpage, you'll see the title "Background Color Changer" along
// with a paragraph displaying the current background color, initially set to light blue "Initial color".
document.addEventListener("DOMContentLoaded", function() {
    // Now I am setting the initial color to light blue
    document.body.style.backgroundColor = "";
    // Now I will display the background color using textContent which we have learnt in DOM class
    let display = document.getElementById('colorDisplay');
    display.textContent = ""; //TODO call your rgb values 

    // RGB Input Fields:
    // Below the current background color display, you'll find three input fields labeled "Enter RGB values".
    // Each input field allows you to specify a value for one of the RGB components: Red, Green, and Blue.

    // I will do above 2 steps combine and use parseFloat to choose numeric values
    function colorChange (){
        let color1 = parseFloat(document.getElementById('redInput').value);
        let color2 = parseFloat(document.getElementById('greenInput').value);
        let color3 = parseFloat(document.getElementById('blueInput').value);

        changeValues (color1, color2, color3);

    // You can input numeric values between 0 and 255 for each RGB component.
    // These values will determine the new background color when you click the "Change Color" button.

    }


    // Changing the Background Color:
    // To change the background color, click the "Change Color" button located below the RGB input fields
    let button = document.getElementById('colorBtn');
    button.addEventListener('click', function () {
        // Upon clicking the button, the background color of the webpage will change based
        // on the RGB values specified in the input fields.
        // The new background color will be displayed above the input fields
        colorChange();
    });

    // Additional notes:-
    // Ensure that the RGB values you input are within the valid range of 0 to 255 
    // Experiment with different combinations of RGB values to create various colors for the background.
    // You can always modify the RGB values and click the "Change Color" button again to see the updated background color.

    // TODO another function to physically change the values on screen using your color1, color2, color3 values

    function changeValues (color1, color2, color3) {
        let result = document.getElementById('colorDisplay');
        result.textContent = (`Red ${color1}  Green ${color2} Blue ${color3}`);
        document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;

    }


});

