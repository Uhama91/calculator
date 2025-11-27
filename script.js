const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return null;
    }
}

let displayNumber = document.getElementById('display');
let number = document.querySelectorAll('.number');
let shouldResetDisplay = false;
let backspaceButton = document.querySelector('.backspace')

backspaceButton.addEventListener('click', ()=>{
    let str = displayNumber.textContent;
    displayNumber.textContent = `${str.slice(0,-1)}`;
})

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        if (shouldResetDisplay) {
            displayNumber.textContent = '';
            firstValueOfOperation = null;
            operatorOfOperation = null;
            secondValueOfOperation = null;
            shouldResetDisplay = false;
        }
        
        if(number[i].textContent === '.' && displayNumber.textContent === ''){
            return displayNumber.textContent += '0.'
        }

        if(number[i].textContent === '.' && displayNumber.textContent.includes('.')){
            return
        } else {
            displayNumber.textContent += number[i].textContent;
        }
    })
}

let firstValueOfOperation = null;
let operatorOfOperation = null;

let operators = document.querySelectorAll('.operator');

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        firstValueOfOperation = displayNumber.textContent;
        operatorOfOperation = operators[i].textContent;
        displayNumber.textContent = '';
    })
}

let secondValueOfOperation = null;

let equalButton = document.querySelector('.equal');

equalButton.addEventListener('click', () => {
    secondValueOfOperation = displayNumber.textContent;
    if (operatorOfOperation === '÷' && secondValueOfOperation === '0') {
        displayNumber.textContent = 'Impossible to divide by 0';
        shouldResetDisplay = true;
    } else {
        let result = operate(operatorOfOperation, Number(firstValueOfOperation), Number(secondValueOfOperation));
        displayNumber.textContent = result;
        shouldResetDisplay = true;
    }
})

let clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    displayNumber.textContent = '';
    firstValueOfOperation = null;
    operatorOfOperation = null;
})