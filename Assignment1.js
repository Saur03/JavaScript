/* 
Program Name:-Single digit program
Purpose:- To check if the current number is divisible by the number given by the user. 
Name:- Saurabh Chawla
StudentID- 0838092
Date- 12 January 2024
*/

/*
let num = Number(prompt('Enter a single digit number: '));
for (let i =1; i<= 100; i++){
    if(i%num == 0){
        console.log(i)
    }
}
*/

/* 
Program Name:-Single digit program
Purpose:- To check if the user entered a valid number and use the user input in do-while loop
Name:- Saurabh Chawla
StudentID- 0838092
Date- 12 January 2024
*/

/*
do {
    let num = Number(prompt('Enter a single digit number: '));
    if(!isNaN(num)){
        for (let i =1; i<= 100; i++){
            if(i%num == 0){
                console.log(i)
            }
        }
        break;
    }
}while(true)    
*/

/*
Program Name:- User Personal information program
Purpose:- To concatenate the strings
Name:- Saurabh Chawla
StudentID- 0838092
Date- 12 January 2024
*/

/*
let a = prompt('Enter the first name: ');
let b = prompt('Enter the last name: ');
let c = prompt('Enter your favourite food: ');
console.log(a+" "+b+"\n"+"Your favourite food is: "+c);
*/

/*
Program Name:- Ask the user for a String
Purpose:- To use the toUpperCase() function
Name:- Saurabh Chawla
StudentID- 0838092
Date- 12 January 2024
*/

/*
let string = prompt('Enter the String');
console.log(string);
console.log(string.toUpperCase());
*/

/*
Program Name:- basic calculator
Purpose:- To perform some mathematical functions using the switch case.
Name:- Saurabh Chawla
StudentID- 0838092
Date- 12 January 2024
*/

while(true){
    let a = Number(prompt('Hi. Please select a number: '));
    let b = Number(prompt('Please Select a second number: '));
    let operations = prompt('What operation would you like to perform? Please select one of the following: (+, -, *, /, %, **): ');
    let result;
    
    switch(operations) {
        case '+' :
            result = a + b;
            console.log('The result is: ' + result);
            break;
    
        case '-' :
            result = a - b;
            console.log('The result is: ' + result);
            break;
    
        case '*' :
            result = a * b;
            console.log('The result is: ' + result);
            break;
        
        case '/' :
            result = a / b;
            console.log('The result is: ' + result);
            break;

        case '%' :
            result = a % b;
            console.log('The result is: ' + result);
            break;

        case '**' :
            result = a ** b;
            console.log('The result is: ' + result);
            break;    
    
        default:
            console.log('Invalid Operator');
            continue;
        }
        let askForContinuation = prompt('Would you like to perform another calculation? (y/n): ');

        if (askForContinuation != 'y') {
            console.log('Bye!');
            break;
        }
    }

