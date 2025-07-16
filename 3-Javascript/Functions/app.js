// Function Statement
function declateFunction() {
    // This is simple Function Statement is
}

// Function Expression
let functionExpression = function () {
    // this is called function expression you can assign funtion to variable in Js
}

// Anonymous Function in ES6 function must have name other wise it throws a syntaxError 

// function () {

// }

// Named Function Expression
const namedFunction = function funcName() {
    // we can give name to both variable and Function
    // But we can't call the function by the name 
    console.log(funcName)
}

// Difference between Parameter & Arguement 


// First Class Function 
// Passed as arguments to other functions: Functions can be passed as arguments to other functions, enabling concepts like callbacks and higher-order functions
function executeCallback(callback) {
    callback();
}
executeCallback(greet); // Outputs: Hello!

// Arrow Function

let arrowFunc = () => { 
    alert('Arrow function')
}