"'use strict";

const display = document.getElementById('display');
const buttons = document.querySelectorAll("button");

let firstOperand = "";
let operator = "";
let secondOperand = "";
let result = "";

display.value = "0";

display.addEventListener('input', () => {
  if (display.value.length > 16) {
    display.value = display.value.slice(0, 16);
  }
});

function updateDisplay(value) {
  if (value === "") {
    display.value = "0";
  } else if (value === ".") {
    display.value += ".";
  } else {
    if (display.value === "0") {
      display.value = value;
    } else if (display.value.length < 16) {
    display.value = value;
    }
  }
}

function reset() {
  firstOperand = "";
  operator = "";
  secondOperand = "";
  result = "";
  updateDisplay("");
}

function calculate() {
  let result = "";
  const first = parseFloat(firstOperand);
  const second = parseFloat(secondOperand);
  
  if (operator === "/" && second === 0) {
    updateDisplay("Error");
    return;
  }
  
  switch (operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "*":
      result = first * second;
      break;
    case "/":
      result = first / second;
      break;
  }

  if (result.toString().includes(".")) {
    result = parseFloat(result.toFixed(8));
  }

  updateDisplay(result);
  firstOperand = result;
  operator = "";
  secondOperand = "";
}

function buttonClick(event) {
  event.preventDefault();
  const value = event.target.value;

  if (!isNaN(value)) {
    if (operator === "") {
      if (firstOperand.includes(".") && value === ".") {
        return;
      }
      firstOperand += value;
      updateDisplay(firstOperand);
    } else {
      if (secondOperand.includes(".") && value === ".") {
        return;
      }
      secondOperand += value;
      updateDisplay(secondOperand);
    }
  } else if (value === ".") {
    if (operator === "") {
      if (firstOperand.includes(".")) {
        return;
      }
      firstOperand += value;
      updateDisplay(firstOperand);
    } else {
      if (secondOperand.includes(".")) {
        return;
      }
      secondOperand += value;
      updateDisplay(secondOperand);
    }
  } else if (value === "C") {
    reset();
  } else if (value === "+/-") {
    if (display.value === "0") {
      return;
    } else {
      if (operator === "") {
        firstOperand = (parseFloat(firstOperand) * -1).toString();
        updateDisplay(firstOperand);
      } else {
        secondOperand = (parseFloat(secondOperand) * -1).toString();
        updateDisplay(secondOperand);
      }
    }
  } else if (value === "DEL") {
    if (operator === "") {
      firstOperand = firstOperand.slice(0, -1);
      updateDisplay(firstOperand);
    } else {
      secondOperand = secondOperand.slice(0, -1);
      updateDisplay(secondOperand);
    }
  } else if (value === "=") {
    calculate();
  } else {
    operator = value;
  }
}

buttons.forEach(button => button.addEventListener('click', buttonClick));
