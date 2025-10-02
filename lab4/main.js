"use strict"

let questions = [
    {
        question: "Яка столиця Франції?",
        answer: [
            "Брно",
            "Мадрид",
            "Париж",
            "Рим",
        ],
        rightAnswer: [2],
        type: "radio",
    },
    {
        question: "Як розшифровується акронім JSON?",
        answer: [
            "JavaScript Object Notation",
            "Java Simple Object Network",
            "Just Some Obnoxious Nonsense",
            "JavaScript Ordinary Notation",
        ],
        rightAnswer: [0],
        type: "radio",
    },
    {
        question: "Які з наведених мов програмування є компільованими?",
        answer: [
            "Python",
            "Java",
            "C",
            "C++",
        ],
        rightAnswer: [2, 3],
        type: "checkbox",
    },
    {
        question: "Які з перелічених тварин є ссавцями?",
        answer: [
            "Акула",
            "Кит",
            "Слон",
            "Черепаха",
        ],
        rightAnswer: [1, 2],
        type: "checkbox",
    },
    {
        question: "Оберіть країну Скандинавії",
        answer: [
            "Данія",
            "Фінляндія",
            "Естонія",
            "Швеція",
        ],
        rightAnswer: [3],
        type: "select-single",
    },
    {
        question: "Серед наведених кольорів оберіть ті, що є базовими в моделі RGB",
        answer: [
            "Червоний",
            "Жовтий",
            "Зелений",
            "Білий",
        ],
        rightAnswer: [0, 2],
        type: "select-multiple",
    },
    {
        question: "Введіть прізвище першого президента Української Центральної Ради",
        answer: null,
        rightAnswer: "Грушевський",
        type: "text",
    },
];

let userAnswers = new Array();

let question_number = 0;
const testingForm = document.forms[0];
const testingHeader = document.getElementById('testing-header');
const testingBody = document.getElementById('testing-body').children[1];
const nextButton = document.getElementById('next');

nextButton.addEventListener('click', () => {
    getAnswer();
    question_number++;
    parseQuestion() || getResults();
});

function parseQuestion() {
    if (question_number >= questions.length) return false;
    if (question_number == questions.length - 1) nextButton.classList.add('next-end');
    Array.from(testingBody.children).forEach(child => child.remove());
    testingHeader.children[0].textContent = `Завдання №${question_number + 1}`;
    testingHeader.children[1].textContent = questions[question_number].question;
    const currentQuestion = questions[question_number];
    if (currentQuestion.type == "radio" || currentQuestion.type == "checkbox") {
        for (let answer of currentQuestion.answer) {
            let markValue = +currentQuestion.rightAnswer.includes(currentQuestion.answer.indexOf(answer));
            testingBody.insertAdjacentHTML('beforeend', 
                `
                <label class="answer">
                    <input type="${currentQuestion.type}" name="question${question_number}" value="${answer}" data-mark="${markValue}">
                    ${answer}
                </label>
                `
            );
        }
    }
    else if (currentQuestion.type == "select-single" || currentQuestion.type == "select-multiple") {
        const select = document.createElement('select');
        select.name = `question${question_number}`;
        select.id = `question${question_number}`;
        select.size = '4';
        testingBody.append(select);
        for (let answer of currentQuestion.answer) {
            let markValue = +currentQuestion.rightAnswer.includes(currentQuestion.answer.indexOf(answer));
            select.insertAdjacentHTML('beforeend', 
                `
                    <option value="${answer}" class="answer" data-mark="${markValue}">${answer}</option>
                `
            );
        }
        if (currentQuestion.type == "select-multiple") select.multiple = true;
    }
    else {
        testingBody.insertAdjacentHTML('beforeend', `<input type="text" class="answer" name="question${question_number}" data-value="${currentQuestion.rightAnswer}">`);
        testingBody.querySelector("input").focus();
    }
    return true;
}

function getAnswer() {
    userAnswers.push(Array.from(testingForm.elements).filter(
        element => {
            return element.checked || element.tagName == 'SELECT' || element.type == 'text';
        }
    ));
    console.log(userAnswers);
}

function getResults() { 
    testingForm.remove(); 
    document.body.firstElementChild.textContent = "Результати"; 
    const resultTable = document.createElement('table'); 
    resultTable.id = 'result-table'; 
    const thead = resultTable.createTHead(); 
    const headerRow = thead.insertRow(); 
    ['№', 'Завдання', 'Відповіді', 'Результат'].forEach(
        text => {
            const th = document.createElement('th'); 
            th.textContent = text; 
            headerRow.appendChild(th); 
        }); 
    const tbody = document.createElement('tbody');
    let generalResult = 0; 
    resultTable.appendChild(tbody); 
    userAnswers.forEach((answerGroup, index) => {
        const questionText = questions[index].question;
        const answerText = answerGroup.map(element => element.value).filter(Boolean).join(', ');
        let mark = answerGroup.flatMap(element => {
            if (element.dataset.mark) {
                return [element.dataset.mark];
            } else if (element.options) {
                return Array.from(element.options)
                    .filter(option => option.selected && option.dataset.mark)
                    .map(option => option.dataset.mark);
            }
            else if (element.type == "text") {
                return [Number(element.value == questions[index].rightAnswer)];
            }
        });
        if (mark.length > 2) mark = 0;
        else {
            let sum = 0;
            for (let m of mark) {
                sum += +m;
            }
            mark = sum;
        }
        generalResult += mark;
        tbody.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${index + 1}</td>
                <td>${questionText}</td>
                <td>${answerText}</td>
                <td>${mark}</td>
            </tr>
        `);
    });
    document.body.appendChild(resultTable); 
    document.body.insertAdjacentHTML('beforeend',
        `
            <p>Загальний результат: ${generalResult}</p>
        `
    );
}