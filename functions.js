// Defining Our Own Functions
    // For each exercise below, write the function according to the requirements. 
    // Call each method at least twice and store the return value in a variable. 
    // Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return "Hello friend!";
}
//I know that 2 variables is redundant here, but the directions say to do this!
var greeting1 = greeting();
var greeting2 = greeting();
console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `Hello ${name}.`;
}

var callOne = customGreeting("Patrick");
var callTwo = customGreeting("Nicole");
console.log(callOne, callTwo);


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last) {
    return `${first} ${middle} ${last} is an awesome person.`;
}

var greetingA = greetPerson("Patrick", "Hall", "Eitel");
var greetingB = greetPerson("Erin", "Nicole", "Eitel");
console.log(greetingA);
console.log(greetingB);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
    return num * num;
}
var squareOfFive = square(5);
var squareOfTwelve = square(12);
console.log(`5 squared is ${squareOfFive}`);
console.log(`12 squared is ${squareOfTwelve}`);
//HOLY SHIT IT WORKED.

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(amount, item) {
   if (amount >= 4) { 
   console.log(`${item} is stocked`);
   } else if (amount > 0) {
    console.log(`${item} is running LOW`);
    } else { 
        console.log(`${item} OUT of stock!`);
     }
    }
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

//VICTORY!!!!!