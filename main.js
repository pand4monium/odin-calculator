// document elements
const calcLog = document.getElementById("calc-log");
const calcInput = document.getElementById("calc-input");

const btnClear = document.getElementById("btn-clear");
const btnDelete = document.getElementById("btn-delete");

const btnDigits = [...document.querySelectorAll(".digitBtn")];
const btnOps = [...document.querySelectorAll(".opsBtn")];
// innerText on screen
let firstNumber;
let operator;
let secondNumber;

/* Calculator States:
0 = No previous input
1 = Editing first Number
2 = Editing Operator
3 = Editing second Number
*/
let currentState = 0;

const updateState = (log) => {
    if (log === "") {
        currentState = 0;
    } else if (!/[+\-x÷]/.test(log)) {
        currentState = 1;
    } else if (log[log.length - 1].match(/[+\-x÷]/)) {
        currentState = 2;
    } else {
        currentState = 3;
    }
}

// calculator functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;

const operate = (num1, operator, num2) => {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

const populate = () => {
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
}

const logDigitInput = input => {
    if (!firstNumber || !operator) {
        firstNumber = firstNumber ? firstNumber + input : input;
    } else {
        secondNumber = secondNumber ? secondNumber + input : input;
    }
    populate();
}

const equalsOperator = () => {
    firstNumber = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
    operator = undefined;
    secondNumber = undefined;
    populate();
}

const logOperatorInput = input => {
    if (secondNumber) {
        equalsOperator();
        operator = input
    } else if (operator || firstNumber) {
        operator = input;
    }
    populate();
}

logOperatorInput("+");
logDigitInput("1");
logDigitInput("2");
logDigitInput("3");
logOperatorInput("÷");
logOperatorInput("+");
logOperatorInput("÷");
logDigitInput("3");
logOperatorInput("+");
logDigitInput("3");