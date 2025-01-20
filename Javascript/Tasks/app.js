let arr = [1, 2, 7, 99, 9, 9, 9, 6, 5, 5, 74, 86, 57];

// let reducMehod = arr.reduce((sum, num) => sum + num, 0);
// console.log(reducMehod);


// Sum entire Entire Array

// let total = 0;
// for (let index = 0; index < arr.length; index++) {
//     total += arr[index]

// }
// console.log(total);

let paragraph = 'lorem ipmsum zaid khan how are you doing khan';
let result = '';
for (let index = 0; index < paragraph.length; index++) {
    let para = paragraph[index];
    // let result = para.split(' ');
    if (index === 0 || paragraph[index - 1] === ' ') {
        result += para.toUpperCase();
    }
    else {
        result += para
    }
}
console.log(result);
