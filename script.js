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

    const waterLevel = (seconds / 59) * 100;

    document.querySelectorAll(".water").forEach(water => {
        water.style.height = waterLevel + "%";
    });
}
}

// 最初に表示
updateClock();

// 1秒ごとに更新
setInterval(updateClock, 1000);
