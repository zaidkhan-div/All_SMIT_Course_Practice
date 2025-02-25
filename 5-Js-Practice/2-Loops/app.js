// Fibonnaci 
function fibonnaci(n) {
    var a = 0;
    var b = 1;

    for (i = 0; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
        console.log(b);
    }

}
// fibonnaci(10)

// Find largest value from an array 

let nums = [1, 3, 4, 2, 4, 5, 3, 2, 99]
let compare = 0;

for (i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (item > compare) {
        compare = item;
    }
}
// console.log(compare);



// sum of all array numbers 

var numbers = [289, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var count = 0;
for (var i = 0; i < numbers.length; i++) {
    var item = numbers[i];
    count = count + item;
}
// console.log(count);