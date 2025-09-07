// document elements
const calcInput = document.getElementById("calc-input");

const btnClear = document.getElementById("btnClear");
const btnDelete = document.getElementById("btnDelete");
const btnEquals = document.getElementById("btnEquals");
const btnDecimal = document.getElementById("btnDecimal");

const btnDigits = [...document.querySelectorAll(".digitBtn")];
const btnOps = [...document.querySelectorAll(".opsBtn")];
// innerText on screen
let firstNumber;
let operator;
let secondNumber;
let storedNumber;

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
    let firstNumberDisplay = firstNumber || firstNumber === "0" ? Number(parseFloat(firstNumber).toPrecision(6)).toString() : "";
    let secondNumberDisplay = secondNumber || secondNumber === "0" ? Number(parseFloat(secondNumber).toPrecision(6)).toString() : "";
    
    calcInput.innerText = secondNumberDisplay ? secondNumberDisplay : firstNumberDisplay;
    
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
    firstNumber = operate(parseFloat(firstNumber), operator, secondNumber ? parseFloat(secondNumber) : parseFloat(storedNumber));
    storedNumber = secondNumber ? secondNumber : storedNumber;
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

const deleteFunction = () => {
    if (!secondNumber) {
        firstNumber = firstNumber ? firstNumber.slice(0, -1) : "" ;
    } else {
        secondNumber = secondNumber.slice(0, -1);
    }

    populate();
}


// Event Listeners / Button Logic
btnDigits.forEach(btn => {
    btn.addEventListener("click", () => logDigitInput(btn.innerText))
})

btnOps.forEach(btn => {
    btn.addEventListener("click", () => logOperatorInput(btn.innerText))
})

btnEquals.addEventListener("click", equalsOperator);
btnClear.addEventListener("click", () => {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    populate();
})

btnDecimal.addEventListener("click", () => {
    const firstNumberHasDecimal = firstNumber?.includes(".");
    const secondNumberHasDecimal = secondNumber?.includes(".");

    if (!firstNumber) {
        firstNumber = "0.";
    } else if (firstNumber && !operator && !firstNumberHasDecimal) {
        firstNumber += ".";
    } else if (operator && !secondNumber) {
        secondNumber = "0.";
    } else if (operator && secondNumber && !secondNumberHasDecimal) {
        secondNumber += ".";
    }

    populate();
})

btnDelete.addEventListener("click", deleteFunction);