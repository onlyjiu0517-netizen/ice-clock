// =========================
// ice-clock
// Clock
// =========================

const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");

function updateClock() {
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");

    hourElement.textContent = hour;
    minuteElement.textContent = minute;

    const seconds = now.getSeconds();


}

updateClock();

setInterval(updateClock, 1000);
