const numbers = [3, 7, 1, 9, 12, 4];
let maxNumber = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i]; 
  }
}

console.log("The maximum number is:", maxNumber);
