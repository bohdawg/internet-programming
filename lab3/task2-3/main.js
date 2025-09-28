"use strict"

let letters = {
    uk: [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', 'Clear'],
        ['й','ц','у','к','е','н','г','ш','щ','з','х','ї', 'ґ'],
        ['ф','і','в','а','п','р','о','л','д','ж','є', 'Enter'],
        ['я','ч','с','м','и','т','ь','б','ю', '.', 'Backspace'],
        ['Space']
    ],
    en: [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', 'Clear'],
        ['q','w','e','r','t','y','u','i','o','p','[',']', '\\'],
        ['a','s','d','f','g','h','j','k','l',';','\'', 'Enter'],
        ['z','x','c','v','b','n','m',',','.', '/', 'Backspace'],
        ['Space']
    ]
};

let currentLanguage = 'uk';

const keyboard = document.getElementById('keyboard');
const monitor = document.getElementById('monitor');

for (let string of letters.uk) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let letter of string) {
        let key = document.createElement('button');
        key.type = 'button';
        key.className = 'key';
        key.textContent = letter;
        row.append(key);
    }
    keyboard.append(row);
}

document.addEventListener('keydown', keyToUpperCase);
document.addEventListener('keyup', keyToLowerCase);
document.addEventListener('keydown', switchLanguage);
keyboard.addEventListener('click', printout);

function printout(event) {
    monitor.focus();
    if (event.target.tagName == 'BUTTON') {
        const start = monitor.selectionStart;
        const end = monitor.selectionEnd;
        const currentText = monitor.value;
        let symbol;
        switch (event.target.textContent) {
            case 'Clear': {
                monitor.value = '';
                return;
            };
            break;
            case 'Enter': symbol = '\n';
            break;
            case 'Space': symbol = ' ';
            break;
            case 'Backspace': {
                if (start === 0 && start === end) {
                    return;
                }
                if (start !== end) {
                    monitor.value = currentText.slice(0, start) + currentText.slice(end);
                    monitor.selectionStart = monitor.selectionEnd = start;
                } else {
                    monitor.value = currentText.slice(0, start - 1) + currentText.slice(end);
                    monitor.selectionStart = monitor.selectionEnd = start - 1;
                }
                return;
            };
            break;
            default: symbol = event.target.textContent;
        }
        monitor.value = currentText.slice(0, start) + symbol + currentText.slice(end);
        monitor.selectionStart = monitor.selectionEnd = start + 1;
    }
}

function keyToUpperCase(event) {
    if (event.shiftKey) {
        const keys = keyboard.getElementsByClassName('key');
        for (let key of keys) {
            if (key.textContent.length === 1) key.textContent = key.textContent.toUpperCase();
            if (currentLanguage === 'uk' && key.textContent === '.') key.textContent = ',';
        }
    }
}

function keyToLowerCase(event) {
    if (!event.shiftKey) {
        const keys = keyboard.getElementsByClassName('key');
        for (let key of keys) {
            if (key.textContent.length === 1) key.textContent = key.textContent.toLowerCase();
            if (currentLanguage === 'uk' && key.textContent === ',') key.textContent = '.';
        }
    }
}

function switchLanguage(event) {
    if (event.altKey && event.shiftKey) {
        if (currentLanguage === 'uk') currentLanguage = 'en';
        else currentLanguage = 'uk';
        for (let [rowIndex, row] of letters[currentLanguage].entries()) {
            for (let [keyIndex, key] of row.entries()) {
                keyboard.children[rowIndex].children[keyIndex].textContent = key;
            }
        }
    }
}
