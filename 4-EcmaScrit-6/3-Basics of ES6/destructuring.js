// Destructuring
const person = { boy: "Zaid", age: 22 };

// Extracting values using destructuring
const { boy, age } = person;

console.log(boy); // Zaid
console.log(age);  // 22


// Array Destructuring

const numbers = [10, 20, 30];

// Extracting values using destructuring
const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third)

// 1️⃣ Default Values (Avoid Undefined)

const numbers = [10, 20, 30];

// Extracting values using destructuring
const [first, second] = numbers;

console.log(first);  // 10
console.log(second); // 20

// 2️⃣ Renaming Variables
const person = { fullName: "Zaid Khan" };
const { fullName: name } = person;

console.log(name); // Zaid Khan


// 3️⃣ Nested Destructuring
const user = { name: "Zaid", address: { city: "Karachi", country: "Pakistan" } };
const { address: { city } } = user;

console.log(city); // Karachi


// 4️⃣ Function Parameter Destructuring
function greet({ name }) {
    console.log(`Hello, ${name}!`);
}

const user = { name: "Zaid", age: 22 };
greet(user); // Hello, Zaid!

// 5️⃣ Skipping Values in Array Destructuring     
const numbers = [10, 20, 30, 40];
const [, second, , fourth] = numbers;  // Skipping 1st and 3rd value

console.log(second); // 20
console.log(fourth); // 40


// Nested Destructuring

const user = {
    name: "Zaid",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

// Extract nested values
const { address: { city, country } } = user;

console.log(city);    // Karachi
console.log(country); // Pakistan


