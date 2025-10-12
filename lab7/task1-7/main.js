"use strict"

const nonStringInputError = new TypeError("Input is not a string");

const task = document.querySelectorAll('section');
const task1Input = task[0].querySelector('#string-length-input');
const task1Output = task[0].querySelector('#string-length-output');

task1Input.addEventListener('change', (event) => {
    task1Output.textContent = getStringLength(event.target.value);
});

function getStringLength(string) {
    if (typeof string !== 'string' && !(string instanceof String)) {
        throw nonStringInputError;
    }
    return string.length;
}

const task2Input = task[1].querySelector('#string-case-input');
const task2UpperOutput = task[1].querySelector('#string-case-uppercase-output');
const task2LowerOutput = task[1].querySelector('#string-case-lowercase-output');

task2Input.addEventListener('change', (event) => {
    const caseModesObj = caseSwitch(event.target.value);
    task2UpperOutput.textContent = caseModesObj.upper;
    task2LowerOutput.textContent = caseModesObj.lower;
});


function caseSwitch(string) {
    if (typeof string !== 'string' && !(string instanceof String)) {
        throw nonStringInputError;
    }
    return {
        upper: string.toUpperCase(),
        lower: string.toLowerCase()
    }
}

const task3StringInput = task[2].querySelector('#char-index-string-input');
const task3CharInput = task[2].querySelector('#char-index-char-input');
const task3Output = task[2].querySelector('#char-index-output');
const task3Button = task[2].querySelector('button');

task3Button.addEventListener('click', () => {
    task3Output.textContent = getCharIndex(task3StringInput.value, task3CharInput.value);
});

function getCharIndex(string, char) {
    if (
        typeof string !== 'string' && !(string instanceof String)
        && typeof char !== 'string' && !(char instanceof String)) {
        throw nonStringInputError;
    }
    return string.indexOf(char);
}

const task4StringInput = task[3].querySelector('#char-count-string-input');
const task4CharInput = task[3].querySelector('#char-count-char-input');
const task4Output = task[3].querySelector('#char-count-output');
const task4Button = task[3].querySelector('button');

task4Button.addEventListener('click', () => {
    task4Output.textContent = getCharCount(task4StringInput.value, task4CharInput.value);
});

function getCharCount(string, char) {
    if (
        typeof string !== 'string' && !(string instanceof String)
        && typeof char !== 'string' && !(char instanceof String)) {
        throw nonStringInputError;
    }

    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) count++;
    }
    return count;
}

const task5StringInput = task[4].querySelector('#string-pair-reverse-input');
const task5StringOutput = task[4].querySelector('#string-pair-reverse-output');

task5StringInput.addEventListener('change', (event) => {
    task5StringOutput.textContent = reversePairs(event.target.value);
});

function reversePairs(string) {
    if (typeof string !== 'string' && !(string instanceof String)) {
        throw nonStringInputError;
    }
    let array_of_chars = string.split('');
    for (let i = 0; i < array_of_chars.length - 1; i += 2) {
        let j = i + 1;
        let temp = array_of_chars[i];
        array_of_chars[i] = array_of_chars[j];
        array_of_chars[j] = temp;
    }
    return array_of_chars.join('');
}

const task6StringInput = task[5].querySelector('#spam-check-input');
const task6StringOutput = task[5].querySelector('#spam-check-output');
const task6Button = task[5].querySelector('button');

const spamRegex = /100%|безкоштовно|збільшення продажів|тільки сьогодні|не видаляйте/ui;

task6Button.addEventListener('click', () => {
    if (testForSpam(task6StringInput.value)) {
        task6StringOutput.textContent = "Спам!";
    } else {
        task6StringOutput.textContent = "Не спам";
    }
});

function testForSpam(string) {
    if (typeof string !== 'string' && !(string instanceof String)) {
        throw nonStringInputError;
    }
    return spamRegex.test(string);
}

const task7StringInput = task[6].querySelector('#string-truncation-string-input');
const task7LengthInput = task[6].querySelector('#string-truncation-length-input');
const task7Output = task[6].querySelector('#string-truncation-output');
const task7Button = task[6].querySelector('button');

task7Button.addEventListener('click', () => {
    task7Output.textContent = truncate(task7StringInput.value, parseInt(task7LengthInput.value));
});

function truncate(string, maxLength) {
    if (typeof string !== 'string' && !(string instanceof String)) {
        throw nonStringInputError;
    }
    if (typeof maxLength !== 'number' || maxLength < 0) {
        throw new Error('Максимальна довжина має бути невід’ємним числом');
    }
    if (string.length <= maxLength) {
        return string;
    }
    if (maxLength <= 3) {
        return '.'.repeat(maxLength);
    }
    return string.slice(0, maxLength - 3) + '...';
}