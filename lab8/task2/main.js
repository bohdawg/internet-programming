"use strict"

function showDateTime() {
    const now = new Date();

    const months = [
    "січня", "лютого", "березня", "квітня", "травня", "червня",
    "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
    ];

    const days = [
    "неділя", "понеділок", "вівторок", "середа",
    "четвер", "п’ятниця", "субота"
    ];

    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dayOfWeek = days[now.getDay()];

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
    Дата: ${day} ${month} ${year} року<br>
    День тижня: ${dayOfWeek}<br>
    Час: ${hours}:${minutes}
    `;
}

function getLastDay() {
    const year = parseInt(document.getElementById("yearInput").value);
    const month = parseInt(document.getElementById("monthInput").value);

    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        document.getElementById("result2_2").innerText = "Будь ласка, введіть коректний рік і місяць!";
        return;
    }

    const lastDay = new Date(year, month, 0).getDate();

    document.getElementById("result2_2").innerText = `Останній день місяця: ${lastDay}`;
}

function getDaySeconds() {
    const now = new Date();

    const secondsSinceStart =
      now.getHours() * 3600 +
      now.getMinutes() * 60 +
      now.getSeconds();

    const secondsInDay = 24 * 3600;
    const secondsUntilNext = secondsInDay - secondsSinceStart;

    return {
      secondsSinceStart,
      secondsUntilNext
    };
  }

  function showSeconds() {
    const data = getDaySeconds();
    document.getElementById("result2_3").innerHTML = `
      Секунд від початку дня: ${data.secondsSinceStart}<br>
      Секунд до початку наступного дня: ${data.secondsUntilNext}
    `;
  }