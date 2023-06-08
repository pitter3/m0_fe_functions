// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// PE: I will be commenting out the old code so it is there as a reference for each example.

// EX 1:
// function askForName() { console.log("Hello, what is your name?") }

// askForName()

function askForName() {
  console.log('Hello, what is your name?');
}

askForName();

// PE: The formatting of the code above was originally very ugly, it was hard to decipher where the function ended. I cleaned it up by adding proper punctuation. I also changed the Quotations ("") to Backticks(``) since that is a better practice when inside the body of a function. 



// EX 2:
// function addThreeNums(first, second, third) {
// var sum = first + second + third
// return sum;
//       }

// addThreeNums(1, 2, 3);
// addThreeNums(4, 2, 7);

function addThree(x, y, z) {
  var sum = x + y + z;
  return sum;
}

console.log(addThree(1, 2, 3));
console.log(addThree(4, 2, 7));

/* The were more formatting issues with the original code above. 
It was missing a semi colon on first line of code within the body of the function, so I added one.
I didn't really like the parameter names originally given, so I changed them to x, y, and z. 
The entire body of the function needed indentation. So I idented the body properly.
The closing squiggly line was out of place. I lined it up with the keyword "function" because that is proper practice.
It did do it's job originally of adding the three numbers it was given, but it did not display anything with the return value, so I made sure to add some console.log() statements so we can see our two sums in the terminal.
PS: Is this the correct way to implement a mult-line comment? This is the first time I am trying it! */



// EX 3:
// func makeFreshPesto(){
//   console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
//   console.log("Pulse basil and pine nuts");
//   console.log("Add garlic and cheeses");
//   console.log("Slowly pour in oil");
//   console.log("Season");    }

// makeFreshPesto();

function makeFreshPesto() {
  console.log(`1. Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper`);
  console.log(`2. Pulse basil and pine nuts`);
  console.log(`3. Add garlic and cheeses`);
  console.log(`4. Slowly pour in oil`);
  console.log(`5. Season`);
}

makeFreshPesto();

/* This one was not quite as bad as example two. 
The word func was used instead of function, that was the first fix.
The squiggly bracket after the function is declared didn't have a space, so I added one.
Again, there were quotations instead of backticks, since we are in the body of a function I changed all of them.
I added numbers to the outpout on each string, this was a purely stylistic choice.
The closing squiggly bracket was out of place, I put it where it belonged to make the code easier to read.
Now I want pesto, thanks guys...*/

//  EX 4:
// function average(num1, num2) 
//   {
// var sum = num1 + num2;
//     var avg = sum / 2;

// return avg
//   }

  function average(x, y) {
    var sum = x + y;
    var avg = sum / 2;
    return avg
  }

  console.log(average(100, 300));

  /* This code had more punctuation and spacing issues.
  The squiggly bracket should be right after the function is declared. It was originally underneath.
  I changed the parameters from num1 and num2 to x and y, a purely stylistic choice.
  The var sum line was not indented, I fixed that so it as more obvious that it was a part of the function body.
  The return avg line was spaced too far, it is a part of the function body, so I moved it up.
  the last squiggly bracket was out of place, I moved it to its proper position.
  Since this is another math function, it is not too useful without output, I created a console log with the arguments 100 and 300. The output is correctly spiiting out the average of the two, which is 200.
  If you can read this you don't need glasses */
