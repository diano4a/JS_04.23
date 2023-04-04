'use stict';

//task 1

let value = prompt('Введите число');

while (isNaN(value) || !Number.isInteger(+value) || value.trim() === "" || +value < 0) {
  console.log("Incorrect input!");
  value = prompt("Введите число");
}

const num = parseInt(value);
let factorial = num;
let delimiters = [num];
let isPrime = false;

for (let i = num - 1; i > 0; i--) {
  factorial *= i;

  if (num % i === 0) {
    delimiters.push(i);
  }
}
if (delimiters.length === 2 && delimiters[0] === num && delimiters[1] === 1) {
  isPrime = true;
}

console.log(`Number: ${num}`);
console.log(`Factorial: ${factorial}`);
console.log(`Square: ${num ** 2}`);
console.log(`isPrime: ${isPrime}`);
console.log(`isEven: ${num % 2 === 0}`);
console.log(`Delimiters: ${delimiters.join(', ')}`);
