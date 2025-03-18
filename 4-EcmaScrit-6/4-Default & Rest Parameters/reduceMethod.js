// .reduce() => reduce the element of an array to a single value

let prices = [3, 4, 4, 3, 2, 22];
let total = prices.reduce(sum);// sum is a callback function

console.log('Total Price of array ' + total)

// function sum(previous, next) {
//     3 + 4 = 7
//     previous = 7  next = 4, 7 + 4 = 11
//     previous = 11 next = 3 ,11 + 3 = 14 
// }
function sum(accumulator, nextEelement) {
    return accumulator + nextEelement
}

// Finding Maximum number 
const grades = [34, 45, 50, 60, 86, 90, 95];
const maximumGrade = grades.reduce(getMaximum);
console.log('Maximum grade of a student ' + maximumGrade)
function getMaximum(accumulator, element) {
    return Math.max(accumulator, element)
}


const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), [],);

console.log(flatArray); // [1, 2, 3, 4, 5, 6]

