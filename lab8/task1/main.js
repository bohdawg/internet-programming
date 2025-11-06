"use strict"

let time = {
    hours: 20,
    minutes: 4,
    seconds: 32
};

const timeElement = document.querySelector('time');
const addSecondsInput = document.querySelector('input[type=number]');

addSecondsInput.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        addSeconds(parseInt(event.target.value));
        showCurrentTime();
    }
});

function showCurrentTime() {
    const hours = String(time.hours).padStart(2, '0');
    const minutes = String(time.minutes).padStart(2, '0');
    const seconds = String(time.seconds).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function addSeconds(additional) {
    if (Number.isNaN(additional)) additional = 0;
    let totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds + additional;
    totalSeconds = ((totalSeconds % 86400) + 86400) % 86400;

    time.hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    time.minutes = Math.floor(totalSeconds / 60);
    time.seconds = totalSeconds % 60;
}

showCurrentTime();