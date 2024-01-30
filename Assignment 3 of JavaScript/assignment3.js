/*
Question1:- St. Clair has asked you to develop a simple product inventory management system to keep
track of textbooks. They have asked you to complete this using JavaScript and OOP principles.

Print to console “St. Clair Inventory Management Systems”

You must implement an Inventory object with the following features:
1. Initialize an empty inventory.
2. Add a product to the inventory.
3. Remove a product from the inventory.
4. Calculate the total value of all products in the inventory.

Each product is represented as an object with properties name, price, and quantity. The Inventory object should have the following methods:

● addProduct(product): Adds a product to the inventory. If the product already exists, update its quantity. Alert that it already exists
● removeProduct(productName): Removes a product from the inventory by name.
● calculateTotalValue(): Calculates and returns the total value of all products in the inventory.
*/
/*

//Print to console “St. Clair Inventory Management Systems”
console.log("St. Clair Inventory Management Systems");

//Initialize an empty inventory
let inventory = [];

//Add a product to the inventory
function addProductInventory(name, price, quantity){
    let existingProduct = null;

    // Check if the product already exists in the inventory
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name == name) {
        existingProduct = inventory[i];
        }
    }
    
    if (existingProduct){
        // Product already exists, update its quantity
        existingProduct.quantity += quantity;
        console.log(`Product "${name}" already exists. Quantity updated. `)
    }
    else {
        let product = {name, price, quantity};
        inventory.push(product);
    }
}

// Removes a product from the inventory by name
function removeProduct(productName){
    //the product has not been found in the inventory.
    let productIndex = -1;

    // Find the index of the product with the given name
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].name == productName) {
        productIndex = i;
      }
    }
  
    if (productIndex !== -1) {
      // Remove the product at the found index
      inventory = inventory.slice(0, productIndex).concat(inventory.slice(productIndex + 1));
      console.log(`Product "${productName}" removed from the inventory.`);
    } 
    else {
      console.log(`Product "${productName}" not found in the inventory.`);
    }
}


// Calculates and returns the total value of all products in the inventory.
function calculateTotalValue(){
    let total = 0;
    for(let product of inventory){
        total = product.price * product.quantity;
    }
    return total;
}

// Main program
addProductInventory('Book A', 10, 5);
addProductInventory('Book B', 15, 3);
addProductInventory('Book A', 10, 2);

removeProduct('Book A');

let totalValue = calculateTotalValue();
console.log(`Total Value: $${totalValue}`);

*/

/*
Question2:- You are given an array of positive integers. Write a function, filterAndMultiply(arr, num), that
takes an array and a number as parameters. The function should filter out all the elements in
the array that are less than num and then multiply the remaining elements by number. Finally, the function should return the modified array.
*/

/*
// Created a function of filter and Multiply
function filterAndMultiply(arr, num){
    let array = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= num){
            array.push(arr[i]*num);    
        }
    }
    return array;
}

// Main Program
let inputArray = [3, 46, 32, 6, 7, 3];
let number = 7;
let result = filterAndMultiply(inputArray, number);
console.log(result);
*/

/*
Question3:- Write a JavaScript program that takes a sentence as input from the user and reverses the order
of each word in the sentence while keeping the words themselves unchanged. The program
should then display the modified sentence. 

You will need two functions:
Function wordReverser() {
// Get input sentence from the user
// Call the reverseWords function and display the modified sentence
}
function reverseWords(sentence) {
// Split the sentence into an array of words
// Reverse the order of characters in each word
// Join the modified words back into a sentence
// Return the modified sentence
}
Your task is to complete the reverseWords function to reverse the order of characters in each
word while keeping the words themselves unchanged. 

The program should then display the modified sentence. For example:

*/


function wordReverser(){
    let inputSentence = prompt("Please enter the sentence: ");
    let modifiedSentence = reverseWords(inputSentence);

    console.log("Original: " + inputSentence);
    console.log("Modified: " + modifiedSentence);
}

function reverseWords(sentence){
        
    //Split the sentence into an array of words
    let words = sentence.split(" ");
    console.log(words);
    // Reverse the order of characters in each word
    let stringReverse = " ";
    for (let i = sentence.length - 1; i >= 0; i--) {
        stringReverse += sentence[i];
    }
    console.log(stringReverse);
    
    // Join the modified words back into a sentence
    console.log(words.join("."));
    
    // Return the modified sentence
    return stringReverse;
}

wordReverser();

