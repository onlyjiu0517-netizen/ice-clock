// =========================
// ice-clock
// Clock
// =========================

const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");

let currentWaterHeight = 100;
let targetWaterHeight = 100;

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

    targetWaterHeight = 100 - (seconds / 59) * 80;
    

}

function animateWater() {

    currentWaterHeight +=
        (targetWaterHeight - currentWaterHeight) * 0.05;


    document.querySelectorAll(".water-wave").forEach(wave => {

        const h = currentWaterHeight;
const waveOffset = Math.sin(Date.now() / 300) * 3;

        wave.setAttribute(
            "d",
            `
            M0,${h}
Q25,${h - 10 + waveOffset} 50,${h}
T100,${h + waveOffset}
V100 H0 Z
            `
        );

    });


    requestAnimationFrame(animateWater);

}


animateWater();


// 最初に表示
updateClock();


// 1秒ごとに更新
setInterval(updateClock, 1000);
