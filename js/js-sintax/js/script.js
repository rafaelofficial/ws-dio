var trueOrFalse = false;
console.log(typeof(trueOrFalse));
// boolean

var anyNumber = 10;
console.log(typeof(anyNumber));
// number

var anyName = 'Rafael';
console.log(typeof(anyName));
// string

var anyFunction = function() {};
console.log(typeof(anyFunction));
// function

// variable types
var variableOne = 'Rafael';
variableOne = 'Sousa';
console.log(variableOne);

let variableTwo = 'Hello';
variableTwo = 'World';
console.log(variableTwo);

const variableThree = 'Jesus, love you!';
//variableThree = 'This is a constant';
console.log(variableThree);

// Scope
var globalScope = 'Global';
console.log(globalScope);

function localScope () {
    let internalLocalScope = 'Local';
    console.log(internalLocalScope);
} 

localScope();

// assignment
var assignment = 'Rafael';
console.log(assignment);

// comparison
var comparison = '0' == 0;
console.log(comparison);

// identical comparison 
var identicalComparison = '0' === 0;
console.log(identicalComparison);

// arithmetic operator
var sum = 10 + 10;
console.log(sum);

var subtract = 10 - 5;
console.log(subtract);

var multiply = 10 * 3;
console.log(multiply);

var divide = 3 / 6;
console.log(divide);

var mod = 5 % 2;
console.log(mod);

var power = 2 ** 5;
console.log(power);

// relational operator
var greaterThan = 2 > 1;
console.log(greaterThan);

var smallerThan = 3 < 5;
console.log(smallerThan);

var greaterThanAndEqual = 1 >= 2;
console.log(greaterThanAndEqual);

var smallerThanAndEqual = 3 <= 1;
console.log(smallerThanAndEqual);

// logical operator
var and = true && false;
console.log(and);

var or = false || true;
console.log(or);

var not = !false;
console.log(not);