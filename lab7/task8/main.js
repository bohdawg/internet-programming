"use strict"

const nonStringInputError = new TypeError("Input is not a string");

const input = document.getElementById('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (checkPalindrome(input.value)) {
        input.style.color = 'lime';
    } else {
        input.style.color = 'red';
    }
});

function checkPalindrome(string) {
    if (typeof string !== 'string' && !(string instanceof String)) {
        throw nonStringInputError;
    }
    return string.toLowerCase().replaceAll(' ', '') === string.toLowerCase().split('').reverse().join('').replaceAll(' ', '');
}