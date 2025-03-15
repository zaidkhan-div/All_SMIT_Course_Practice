// Default Parameters
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, undefined!

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, undefined!

// Example 3: Default Parameters with Multiple Arguments
function sum(a = 5, b = 10) {
    return a + b;
}

console.log(sum());        // 15 (uses default values)
console.log(sum(7));       // 17 (7 + 10)
console.log(sum(7, 3));    // 10 (7 + 3)


// 2️⃣ Rest Parameter (...) (For Handling Multiple Arguments)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

function introduce(firstName, ...hobbies) {
    console.log(`Hi, I'm ${firstName} and I love ${hobbies.join(", ")}.`);
}

introduce("Zaid", "coding", "football", "photography");
// Output: Hi, I'm Zaid and I love coding, football, photography.


// Rest paramter in destructuring

const [first, second, ...rest] = [10, 20, 30, 40, 50];

console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]
