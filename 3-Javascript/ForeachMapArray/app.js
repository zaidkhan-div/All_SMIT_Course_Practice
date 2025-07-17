// =========== Map() ===========
// The map() method loops through an array adn return a new array with transformed elements. It does'nt modify the original array.

let numbers = [2, 3, 5, 4, 3, 5, 2];

// const doubledArray = numbers.map(num => num * 2);

// ========== Foreach ===========
// The forEach() method loops through an array and executes a function on each element but does not return new array 

let newArray = numbers.forEach((num) => {
    // return num * 2
    console.log(num * 2)
    // .forEach() does not return anything — it returns undefined.

    // It's used only to perform side effects (like console.log, pushing to another array, etc.)
});

console.log(newArray, " NewArray") // unDefined 

