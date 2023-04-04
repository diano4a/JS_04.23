'use stict';

//task 1

let value = prompt('Введите число');

while (isNaN(value) || !Number.isInteger(+value) || value.trim() === '' || +value < 0) {
  console.log('Incorrect input!');
  value = prompt('Введите число');
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

// task 2

let firstInput = prompt('Введите любой набор до трех символов включительно');
while (firstInput === null || firstInput.trim().length === 0 || firstInput.trim().length > 3) {
  console.log('Incorrect input!');
  firstInput = prompt('Введите любой набор до трех символов включительно');
}

let secondInput = parseFloat(prompt('Введите любое число не меньше 1 и не больше 10'));
while (isNaN(secondInput) || secondInput <= 0 || secondInput >= 10) {
  console.log('Incorrect input!');
  secondInput = parseFloat(prompt('Введите любое число не меньше 1 и не больше 10'));
}

let charArray = new Array(secondInput).fill(firstInput);
let charString = charArray.join(' ');

let gridString = '';

for (let i = 0; i < secondInput; i++) {
  gridString += `${charString}\n`;
}

console.log(gridString);