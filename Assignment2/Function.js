/*
Question1:- You are designing a simple codebreaker game in JavaScript. The game generates a secret
code of three digits. The player has to guess the code, and after each guess, the game provides
feedback.

1. Write a function called generateSecretCode that generates a random three-digit code.
The function should return this code.
● This should be done with the Math.random() function.

2. Implement a loop that allows a player to make up to three guesses. Inside the loop,
prompt the player to enter a three-digit guess.

3. Write a function called checkGuess that takes the player's guess and the secret code
as parameters. The function should return feedback to the player, indicating how many
digits are correct and in the correct position and how many digits are correct but in the
wrong position.

4. Use the checkGuess function inside the loop to provide feedback to the player after each guess.
*/


function generateSecretCode() {
    return Math.floor(Math.random() * 900) + 100;
}

function checkGuess(playerGuess, secretCode) {
    let correctDigitCount = 0;
    let correctPositionCount = 0;
    let feedback;
    
    if (playerGuess == secretCode){
        feedback = "You have guessed right!";
    }
    else{
        feedback ="You have guessed wrong!";
    }
    return feedback;
}

let code = generateSecretCode();

for (let i=0; i<3; i++) {
    playerGuess = prompt('Please enter a three digit Number');
    console.log(checkGuess(playerGuess, code));
    if (i==2){
        console.log("Sorry you lose!");
    }
}


/*
Question2:- You are organizing a cookie baking challenge where participants have to bake different types of cookies. 
Each participant is given a set of tasks, and they earn points based on the tasks completed.

1. Write a function called bakeCookies that takes two parameters: the type of cookie
(string) and the number of cookies to bake (number). The function should calculate
and return the total points earned for baking that type of cookie.
○ 3 Points per Chocolate Chip, 2 Points per oatmeal raisin, 1 point per peanut butter.

2. Implement a loop that allows a participant to choose up to three types of cookies to bake. 
Inside the loop, prompt the participant to enter the type and quantity of each cookie. 

3. Write a function called evaluateParticipants that takes the total points earned by a participant as a parameter. 
The function should provide feedback to the participant based on their performance.

● For example, if they earn more than 20 points, they receive a "Cookie Master"
title; if they earn between 10 and 20 points, they are a "Skilled Baker," and if they
earn less than 10 points, they get a "Novice Baker" title.
*/


function bakeCookies(typeOfCookies, numberOfCookiesToBake){
    points = 0;
    switch(typeOfCookies) {
        case "chocolate chip":
            points = 3 * numberOfCookiesToBake;
            break;
        case "oatmeal raisin":
            points = 2 * numberOfCookiesToBake;
            break;
        case "peanut butter":
            points = 1 * numberOfCookiesToBake;
            break;
        default:
            console.log("Invalid cookie type. Please enter valid cookie type!");
            break;
    }
    return points;

} 

function evaluateParticipant(totalPoints) {
    let feedback;

    if (totalPoints > 20) {
        feedback = "Cookie Master";
    } 
    else if (totalPoints >= 10 && totalPoints <= 20) {
        feedback = "Skilled Baker";
    } 
    else {
        feedback = "Novice Baker";
    }

    return feedback;
}

let totalPoints = 0;

for (let i=0; i<3; i++){
    let typeOfCookies = prompt("Enter the type of cookie (chocolate chip, oatmeal raisin, peanut butter): ");
    let numberOfCookiesToBake = Number(prompt("Enter the quantity of cookies to bake: "));
    let points = bakeCookies(typeOfCookies, numberOfCookiesToBake);

    totalPoints += points;

}

let title = evaluateParticipant(totalPoints);
console.log(`Congralutions! You earned  ${totalPoints} points. You are a ${title}.`);



/*
Question3:- You own a bookstore and want to implement a discount program for your customers. Each
customer is eligible for a discount based on the total amount they spend on books.

1. Write a function called calculateDiscount that takes the total amount spent by a
customer as a parameter. The function should calculate and return the discount
percentage. Assume the discount is as follows: 

○ 5% discount for spending between $50 and $100
○ 10% discount for spending between $101 and $200
○ 15% discount for spending over $2000

2. Implement a loop that allows a customer to purchase up to four books. Inside the loop,
prompt the customer to enter the price of each book. 

3. Write a function called evaluatePurchases that takes the discount percentage as a
parameter. The function should provide feedback to the customer based on their discount.
○ For example, if they receive a 15% discount, display "Congratulations! You've
earned a 15% discount." If they receive a 5% discount, display "Nice! You've
earned a 5% discount."
*/


function calculateDiscount(totalAmountSpent) {
    if (totalAmountSpent >= 50 && totalAmountSpent <= 100) {
        return 5;
    } 
    else if (totalAmountSpent > 101 && totalAmountSpent <= 200) {
        return 10;
    } 
    else if (totalAmountSpent > 200) {
        return 15;
    } 
    else {
        return 0;
    }
}

function evaluatePurchases(discountPercentage) {
    let feedbackMessage;

    switch (discountPercentage) {
        case 5:
            feedbackMessage = "Nice! You've earned a 5% discount.";
            break;
        case 10:
            feedbackMessage = "Great job! You've earned a 10% discount.";
            break;
        case 15:
            feedbackMessage = "Congratulations! You've earned a 15% discount.";
            break;
        default:
            feedbackMessage = "No discount earned for the given purchase amount.";
            break;
    }

    console.log(feedbackMessage);
}

let totalAmountSpent = 0;
for (let i=0; i<4; i++){
    let price = Number(prompt("Enter the price of the book: "));
    totalAmountSpent += price;    
}

let discountPercentage = calculateDiscount(totalAmountSpent);
evaluatePurchases(discountPercentage);
