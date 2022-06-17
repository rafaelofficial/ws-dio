// Example of variable

const PRICE = 2;
var discount = 0.2;

var total = PRICE - discount;

// Example of function
function sum(a, b) {
    return a + b; // 16
}

sum(4, 12);

// Example object in JavaScript
const people = {
    name : 'Rafael',
    age : 33,
    location : 'Nova Odessa - SP'
}

let result = `Name: ${people.name}, Age ${people.age} and Location: ${people.location}`;

// Examples console

console.log("Hello world!");

function returnEvenValues(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
            console.log(`${array[i]} - is even`)
        } else {
            console.log(`${array[i]} - not even`);
        }
    }
    return evenNumbers;
}

console.log('Numbers: ');
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

returnEvenValues(array);
