// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The .includes() method works on arrays and strings. In the below example it is called on the string "Hello World"
// The argument "Hello" is passed to the method; this is because the .includes() method searched the string and found "Hello" is indeed, included.
// The return value is "true"
"Hello World".includes("Hello");

// The .endswith() method works on strings only. In the below example it is called on the string "Hello World"
// No arguments are passed; this is because the .endswith() method searched for the last characters of the "Hello World" string and found that it does not end with 
//The return value is "false"
"Hello World".endsWith("Hello");

//The .endswith() method works on strings only. In the below example it is called on the string "Hello World"
// The argument "rld" is passed to the method; this is because the .endswith() method searched for the last characters of the "Hello World" string and found that it does indeed end with "rld" 
//The return value is "true"
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
// var firstName = "Jeff";
// console.log(firstName.startsWith("J"));

// First, I declare 2 variables, stringX and stringY, stored to the strings "     Can you dig it?" and "You shall not pass!"

// I want to log my result to the console, to make sure my JavaScript method is working properly. So I add console.log() to start.
// I call the trimStart() method on stringX.
// An argument is passed to the method; this method trims any empty spaces within a string, since my string has empty spaces in it,it is trimmed.
// My first output is "Can you dig it?"

// I want to log my result to the console, to make sure my JavaScript method is working properly. So I add console.log() to start.
// I call the toUpperCase() method on stringY.
// No arguments are passed, this method simply takes a string and capitalizes every letter within it.
// My second output is "YOU SHALL NOT PASS!"

var stringX = "     Can you dig it?";
var stringY = "You shall not pass!";

console.log(stringX.trimStart());
console.log(stringY.toUpperCase());



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// First I declare two arrays, stored to the variables arrayAlpha and arrayBeta.

// I want to log my result to the console, to make sure my JavaScript method is working properly. So I add console.log() to start.
// I call the .push() method on arrayAlpha.
// The .push() method allows me to add specific elements to the end of my array, I choose the strings "Strings are for Guitars!", "Macs are better than PCs!", "Ikea ROCKS!" as my elements.
// No arguments are passed; this method simply adds my strings to the end of the array in order.
// My new strings are addded to the array, and the new array is printed to the console.

// I want to log my result to the console, to make sure my JavaScript method is working properly. So I add console.log() to start.
// I call the .reverse method on arrayBeta.
// The .reverse() method allows me to reverse the order of indexes within my array. 
// No arguments are passed; this method simply reverses the order of my array.
// My array is reversed, and the new array is printed to the console.

var arrayAlpha = ["Random Phrases Suck!", "Hello World!", "Coding is fun!", "My name is Patrick!"];
var arrayBeta = ["Callie F", "Kylo M", "Nova F", "Simon M", "Heidi F"];

arrayAlpha.push("Strings are for Guitars!", "Macs are better than PCs!", "Ikea ROCKS!" );
console.log(arrayAlpha);

arrayBeta.reverse();
console.log(arrayBeta);


