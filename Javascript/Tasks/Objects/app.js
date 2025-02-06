let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (let key in obj) {
    console.log(`This is key ${key} Value is ${obj[key]}`);
}