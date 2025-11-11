const add = (a,b) => {
    return a+ b;
}

const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return a / b;
}

const operate = (operator, a, b) => {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return null;
    }
}

let displayFirstNumber = document.getElementById('display');
let number = document.querySelectorAll('.number');

for (let i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        displayFirstNumber.textContent += number[i].textContent;
    })
}

let firstValueOfOperation = null;
let operatorOfOperation = null;

let operators= document.querySelectorAll('.operator');

for (let i=0; i<operators.length; i++){
    operators[i].addEventListener('click', function(){
        firstValueOfOperation = displayFirstNumber.textContent;
        operatorOfOperation = operators[i].textContent;
        displayFirstNumber.textContent = '';
    })
}