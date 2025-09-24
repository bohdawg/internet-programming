"use strict"

const calculatorConsole = document.getElementById('calculator-console');
const LED = document.getElementById('calculator-display');
const buttons = calculatorConsole.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', addExpression));

function addExpression(event) {
    const btnText = event.target.textContent;

    if (btnText === '<=') {
        LED.value = LED.value.slice(0, -1);
    } else if (btnText === '=') {
        try {
            let expression = LED.value.replace(/,/g, '.').replace(/\^/g, '**');
            let result = eval(expression);
            LED.value = String(result).replace(/\./g, ',');
        } catch {
            LED.value = 'Error';
        }
    } else if (btnText === 'CE') {
        LED.value = '';
    } else {
        LED.value += btnText;
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Backspace') {
        LED.value = LED.value.slice(0, -1);
    }
    else if (key === 'Delete') {
        LED.value = '';
    }
    else if (key === 'Enter' || key === '=') {
        try {
            let expression = LED.value.replace(/,/g, '.').replace(/\^/g, '**');
            let result = eval(expression);
            LED.value = result.toString().replace(/\./g, ',');
        } catch {
            LED.value = 'Error';
        }
    }
    else if (/[0-9+\-*/^(),.]/.test(key)) {
        if (key === '.') {
            LED.value += ',';
        } else {
            LED.value += key;
        }
    }
    event.preventDefault();
});
