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


    const waterHeight = 70 - (seconds / 59) * 50;

    document.querySelectorAll(".water-wave").forEach(wave => {

        const h = waterHeight;

        wave.setAttribute(
            "d",
            `
            M0,${h}
            Q25,${h - 10} 50,${h}
            T100,${h}
            V100 H0 Z
            `
        );

    });

}

}

updateClock();

const seconds = now.getSeconds();

const waterHeight = 70 - (seconds / 59) * 50;



setInterval(updateClock, 1000);
