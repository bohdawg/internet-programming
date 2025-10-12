"use strict"

const nonStringInputError = new TypeError("Input is not a string");

const stringInput = document.querySelector('#string-input');
const substrOutput = document.querySelector('#substr-output');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    substrOutput.textContent = mostFrequentSubstring(stringInput.value);
})

function mostFrequentSubstring(string) {
    if (typeof string !== 'string' && !(string instanceof String)) {
        throw nonStringInputError;
    }

    const substrCount = new Map();
    const length = string.length;
    let maxCount = 0;
    let result = '';

    for (let start = 0; start < length; start++) {
        for (let end = start + 3; end <= length; end++) {
            const substr = string.slice(start, end);

            if (substr === string) continue;

            const count = (substrCount.get(substr) || 0) + 1;
            substrCount.set(substr, count);

            if (
                count > maxCount ||
                (count === maxCount && substr.length > result.length)
            ) {
                maxCount = count;
                result = substr;
            }
        }
    }
    
    if (maxCount <= 1) {
        return "Немає повторюваних підрядків";
    }

    return result;
}
