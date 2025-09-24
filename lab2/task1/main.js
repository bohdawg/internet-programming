"use strict"

function clockUpdate() {
    const now = new Date();
    const time = document.getElementById('time');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const year = String(now.getFullYear());
    const mounth = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}-${year}:${mounth}:${day}`;
    time.textContent = timeString;
}

setInterval(clockUpdate, 1000);
clockUpdate();