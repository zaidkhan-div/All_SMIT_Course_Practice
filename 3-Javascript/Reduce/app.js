// .reeuce() = reduce the element of an array to a single value
const employees = [
    { name: "Ali", age: 25, salary: 40000 },
    { name: "Sara", age: 28, salary: 45000 },
    { name: "Ahmed", age: 30, salary: 50000 },
    { name: "Zainab", age: 24, salary: 42000 },
    { name: "Bilal", age: 27, salary: 48000 }
];

let output = employees.reduce((acc, curr) => {
    // if (curr.age > 25) {
    //     acc.push(curr)
    // }
    // return acc;

    return acc + curr.age

}, 0) // [] initial-Value
console.log(output);


let nums = [1, 24, 5, 5, 13, 5, 6, 9, 6];
let numsOutput = nums.reduce((acc, curr) => {
    return acc + curr
}, 0);

console.log(numsOutput);

let maxNum = nums.reduce((prev, next) => {
    // console.log("prev:", prev, "next:", next);

    // return next > prev ? next : prev // maxValue
    // return next < prev ? next : prev // minValue

    // if (next > prev) {
    //     return next
    // }
    // else return prev // maxValue

    if (next < prev) {
        return next
    }
    else return prev

}, 9);

console.log(maxNum, "MaxNum");
// prev: 0 next: 1
// prev: 1 next: 24
// prev: 24 next: 5
// prev: 5 next: 5
// prev: 5 next: 13
// prev: 13 next: 5
// prev: 5 next: 6
// prev: 6 next: 9
// prev: 9 next: 6
// next 6