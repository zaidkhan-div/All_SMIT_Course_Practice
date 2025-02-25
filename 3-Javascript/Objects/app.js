function Obj(names,grade) {
    this.names = names;
    this.grade = grade;
}

const result = new Obj('Zaidkhan', 'Metric')
console.log(result.names);




const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    let value = compactObject(obj[key]); // Recursively process values
    if (Boolean(value)) { // Keep only truthy values
        result[key] = value;
    }
}


const arr = [10, 20, 30];

for (let index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}
// ⚠️ Warning: for...in is not ideal for arrays because it iterates over indexes as strings, which can cause unexpected behavior if the array has custom properties.

