// Callback example:
const result = function(operation, numberOne, numberTwo) {
    return operation(numberOne, numberTwo);
}

const sum = function(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

const sub = function(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

const resultSum = result(sum, 1, 2);
const resultSub = result(sub, 1, 2);

console.log(resultSub);
console.log(resultSum);
