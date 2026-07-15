// =========================
// ice-clock
// Clock
// =========================

const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");

let currentWaterHeight = 70;
let targetWaterHeight = 70;

function updateClock() {

    const now = new Date();

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");

    hourElement.textContent = hour;
    minuteElement.textContent = minute;


    // =========================
    // Water Level
    // =========================

    const seconds = now.getSeconds();

    targetWaterHeight = 70 - (seconds / 59) * 50;


    

}


// 最初に表示
updateClock();


// 1秒ごとに更新
setInterval(updateClock, 1000);
