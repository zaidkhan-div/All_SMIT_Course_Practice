// What is Higher Order Function ?
// ✅ A function that takes another function as an argument, or returns a function.

// function sayHi() {
//   console.log("Hi");
// }

// function greet(callback) {
//   callback(); 
// }

// greet(sayHi); // "Hi"

// what is the Difference between Higher Order Function and CallBack ?

// Higher-Order Function (HOF)	A function that accepts another function as an argument or returns one.
// Callback Function	A function that is passed to another function to be called later.

function x() {
    console.log('This is CallBack Function')
}

function y(x) {
    x();
    // y is nwo the Higher Order Function
    console.log('Higher Order Function')
}
y(x);


const radius = [3, 4, 9, 6, 5];

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, logic) {
    let output = [];
    for (i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius,diameter))

// Array.prototype. to make anything in array access way