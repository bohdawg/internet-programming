"use strict"

const regex = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)*$/i;

const inputEmail = document.getElementById('input-email');
const outputContainer = document.getElementById('output-container')

inputEmail.addEventListener('change', parseEmail);

function parseEmail() {
    outputContainer.innerHTML = '';
    const inputValue = inputEmail.value;
    const matched = inputValue.match(regex);
    for (let i = 0; i < matched.length; i++) {
        const group = matched[i];
        if (group) {
            const groupElement = `<span class="regex-group">${matched[i]}</span>`;
            outputContainer.insertAdjacentHTML('beforeend', `${groupElement}`);
        }
    }
}