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