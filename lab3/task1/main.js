"use strict"

const heightInput = document.getElementById('rhombus-height');
const sideInput = document.getElementById('rhombus-side');
const output = document.querySelector('output');

function calculateArea() {
    let height = heightInput.value;
    let side = sideInput.value;
    output.textContent = height * side;
}