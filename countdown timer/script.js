let hours = 0, minutes = 0, seconds = 0;
let interval;
let isRunning = false;

const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const savedTimesElement = document.getElementById("savedTimes");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
saveBtn.addEventListener("click", saveTime);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateTimerDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
}

function saveTime() {
    const savedTime = document.createElement("div");
    savedTime.textContent = formatTime(hours, minutes, seconds);
    savedTimesElement.appendChild(savedTime);
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimerDisplay();
    // Clear the saved times
    savedTimesElement.innerHTML = '';
}

function updateTimerDisplay() {
    timerElement.textContent = formatTime(hours, minutes, seconds);
}

function formatTime(h, m, s) {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}