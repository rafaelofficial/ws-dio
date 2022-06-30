function demoFunctionWithoutParams() {
    console.log('This is a function without parameter');
}

demoFunctionWithoutParams();

function demoFunctionWithParams(message) {
    console.log(message);
}

demoFunctionWithParams('This is a function with parameter');

// functions type

var demoFunctionExpression = function() {
    console.log('This is a message on declarative function');
}  

demoFunctionExpression();

var arrowFunction = () => {
    console.log('This is a Arrow Function');
}

arrowFunction();
