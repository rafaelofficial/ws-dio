// Arrays
let array = ['string', 1, true, 'ArrayOne', 'ArrayTwo', 'ArrayThree'];
console.log(array[4]);

// Arrays manipulation
array.forEach(function(item, index) {
    console.log(`Index: ${index}, Item: ${item}`);
});

array.push('New Item');
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift('Start new item');
console.log(array);

console.log(array.indexOf(true));

array.splice(0, 3);
console.log(array);

let newArray = array.slice(0, 3);
console.log(newArray);

// Objects
let object = { string : 'string', number : 1, boolean : true, array : ['arrayOne', 'arrayTwo'], objectInternal : { obj : 'Object Internal' } };
console.log(object);
console.log(object.objectInternal);

var string = object.string;
console.log(string);

var arrayInternal = object.array;
console.log(arrayInternal);

var { string, boolean, objectInternal } = object;
console.log(string, boolean, objectInternal);