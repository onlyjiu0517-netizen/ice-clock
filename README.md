# ice-clock

index.html

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ice-clock</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="clock">
        <span id="hour">00</span>
        <span class="colon">:</span>
        <span id="minute">00</span>
    </div>

    <script src="script.js"></script>
</body>
</html>





style.css

/* =========================
   ice-clock
   Base Style
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    overflow: hidden;

    font-family: "Segoe UI", sans-serif;
}

#clock {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 120px;
    font-weight: bold;
    color: #bfefff;

    user-select: none;
}

.colon {
    opacity: 0.9;
}





script.js

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
}

// 最初に表示
updateClock();

// 1秒ごとに更新
setInterval(updateClock, 1000);
