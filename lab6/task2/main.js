"use strict"

const form = document.forms["login-form"];
const inputs = form.querySelectorAll('input');
const submitButton = form.lastElementChild;

submitButton.addEventListener('click', assertInputs);

function assertInputs(event) {
    event.preventDefault();

    for (let input of inputs) {
        const currentRegex = new RegExp(input.dataset.regexPattern, input.dataset.regexFlags || "");
        if (currentRegex.test(input.value)) {
            input.style.borderColor = 'lime';
            input.style.backgroundColor = 'rgba(0, 255, 0, 0.25)';
            input.parentElement.className = 'input--correct';
        } else {
            input.style.borderColor = 'red';
            input.style.backgroundColor = 'rgba(255, 0, 0, 0.25)';
            input.parentElement.className = 'input--wrong';
        }
    }
}