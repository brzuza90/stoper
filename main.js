const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const secondsSpan = document.querySelector('.seconds');
const milisecondsSpan = document.querySelector('.miliseconds');

let flag = false;
let seconds = 0;
let miliseconds = 0;
let start;
const reset = function () {
    clearInterval(start);
    flag = false;
    seconds = 0;
    miliseconds = 0;
    milisecondsSpan.textContent = "--";
    secondsSpan.textContent = "--";
    startBtn.textContent = "Start";
}
const startTimer = function () {
    miliseconds++;
    miliseconds < 10 ? milisecondsSpan.textContent = "0" + miliseconds : milisecondsSpan.textContent = miliseconds;
    seconds === 0 ? secondsSpan.textContent = "00" : "";
    if (miliseconds > 96) {
        miliseconds = 0;
        seconds++;
        seconds < 10 ? secondsSpan.textContent = "0" + seconds : secondsSpan.textContent = seconds;
    }
}
const Timer = () => {
    if (!flag) {
        flag = true;
        startBtn.textContent = "Pauza";
        start = setInterval(startTimer, 10);
    } else {
        flag = false;
        startBtn.textContent = "Start";
        clearInterval(start)
    }

}
startBtn.addEventListener('click', Timer);
resetBtn.addEventListener('click', reset)