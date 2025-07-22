let x = { name: "Jhon" };
let y = x;
x.name = 'zaid';
x = { name: "anus" }
console.log(y.name);


const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);

console.log(result);  // Output: { a: 1, b: 3, c: 5, d: 6 }
console.log(target);  // Output: { a: 1, b: 3, c: 5, d: 6 }

const target1 = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target1, source);

console.log(target1);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target1);
// Expected output: true

// ?. Optional Chaining
// Purpose: Safely access deeply nested properties without causing an error if a property is null or undefined.
const user = { profile: null };
console.log(user.profile?.name); // undefined (does NOT throw error)

// ?? — Nullish Coalescing
// Purpose: Provide a default value when the left-hand side is null or undefined (but not when it’s 0, false, or '').

let names = null;
console.log(names ?? "Default"); // "Default"

let score = 0;
console.log(score ?? 10); // 0 (not 10!)


let arr = [1, 2, 3, 5, 6, 7, 8, 9];
console.log(arr.slice(-1));

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    f: 5
}
const result2 = Object.values(obj); // Object.keys
console.log(result2, " Object");