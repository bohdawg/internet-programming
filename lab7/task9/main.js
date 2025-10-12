"use strict"

const nonStringInputError = new TypeError("Input is not a string");

const stringInput = document.querySelector('#char-replace-string-input');
const charOldInput = document.querySelector('#char-replace-char-old-input');
const charNewInput = document.querySelector('#char-replace-char-new-input');
const output = document.querySelector('#char-replace-output');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    output.textContent = replaceFirst(stringInput.value, charOldInput.value, charNewInput.value);
})

function replaceFirst(string, charOld, charNew) {
    if (
        typeof string !== 'string' && !(string instanceof String)
        && typeof charOld !== 'string' && !(charOld instanceof String)
        && typeof charNew !== 'string' && !(charNew instanceof String)) {
        throw nonStringInputError;
    }
    return string.replace(charOld, charNew);
}