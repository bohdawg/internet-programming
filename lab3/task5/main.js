"use strict"

let operations = ['+', '-', '*', '/'];

const checkResultBtn = document.getElementById('check-result-btn');
const form = document.getElementById('main-form');
const result = document.getElementById('result');
const label = form.children[0];
let correctResult;
let questionCount = 0;
let correctCount = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shake() {
    document.getElementById('expression')?.remove();
    const a = getRandomInt(10);
    const b = getRandomInt(10);
    const operation = operations[getRandomInt(operations.length)];
    const expression = `${a} ${operation} ${b}`;
    const expressionNode = document.createElement('span');
    expressionNode.textContent = expression + ' = ';
    expressionNode.id = 'expression';
    console.log(typeof expressionNode);
    correctResult = parseFloat(eval(expression).toFixed(2));
    result.before(expressionNode);
    label.children[2].textContent = ++questionCount;
}

function check() {
    const resultInput = document.getElementById('result');
    const userAnswer = parseFloat(parseFloat(resultInput.value).toFixed(2));
    const oldFeedback = document.getElementById('feedback');
    if (oldFeedback) oldFeedback.remove();

    const feedback = document.createElement('div');
    feedback.id = 'feedback';
    if (userAnswer === correctResult) {
        feedback.textContent = "✅ Правильно!";
        label.children[1].textContent = ++correctCount;
    } else {
        feedback.textContent = `❌Не правильно! Правильна відповідь: ${correctResult}\n`;
    }
    label.children[0].textContent = `${((correctCount / questionCount) * 100).toFixed(1)}%`;
    resultInput.after(feedback);
    resultInput.value = '';
}
