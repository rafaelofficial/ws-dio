var array = ['valueOne', 'valueTwo', 'valueThree', 'valueFour', 'valueFive'];
var obj = { propOne : 'Object One', propTwo : 'Object Two', propThree : 'Object Three' };

for (var index = 0; index < array.length; index++) {
    console.log(`Index: ${index}`);
}

console.log('\n');

for (let index in array) {
    console.log(`Index: ${index}`);
}

console.log('\n');

for (index in obj) {
    console.log(`Object: ${obj[index]}`);
}

for (index of array) {
    console.log(index);
}

let a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

console.log('\n');

a = 1;
do {
    a++;
    console.log(a);
} while (a < 10);