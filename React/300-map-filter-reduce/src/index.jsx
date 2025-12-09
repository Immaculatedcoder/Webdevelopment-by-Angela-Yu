var numbers = [3, 56, 2, 48, 5];

// Map -Create a new array by doing something with each item in an array.

console.log(numbers);
console.log(numbers.map(x => {return x*2}));


var newNumbers = [];
function double(x) {
    newNumbers.push(x*2);
}
numbers.forEach(double);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// Way 1
var newNumbers = numbers.filter( x => {return x > 10});
console.log(newNumbers)

// Way 2
function filterNumberOneDigit(numbers) {
    return numbers.filter((x) => x < 10);
}
var newNumbers = filterNumberOneDigit(numbers)
console.log(newNumbers)

//Reduce - Accumulate a value by doing something to each item in an array.
//  You can think of reduce as you adding up the total cost of your item in your cart

const totalN = numbers.reduce((previousN, x) =>  {
    console.log("previousValue = " + previousN)
    console.log("currentValue = " + x)
    return previousN + x}, 0)
console.log(totalN)

//Find - find the first item that matches from an array.

console.log(numbers.find(x => x > 10))

//FindIndex - find the index of the first item that matches.
console.log(numbers.findIndex(x => x > 10))

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
 
import emojipedia from "./emojipedia";
// Activity 1: 

function hundredChar(profile) {
    return profile.meaning.substring(0,100);
}

let meanings;

// meanings = emojipedia.map(hundredChar)
meanings = emojipedia.map( profile => profile.meaning.substring(0, 100))

console.log(meanings)