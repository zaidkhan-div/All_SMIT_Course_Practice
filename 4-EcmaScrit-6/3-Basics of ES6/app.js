// Variale Scoping 
// Local Scope & Global Scope

// A closure is when a function remembers and can access variables from its outer scope even after the outer function has finished executing. 🚀

function outerFunction() {
    let count = 0;  // This variable is inside outerFunction's scope

    return function innerFunction() {
        count++; // innerFunction can still access 'count'
        console.log(count);
    };
}

const counter = outerFunction(); // outerFunction runs and returns innerFunction
counter(); // 1
counter(); // 2
counter(); // 3
