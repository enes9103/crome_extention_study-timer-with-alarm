// Selectors
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const choiseMin = document.getElementById("choise-min");
const choiseSec = document.getElementById("choise-sec");
const resetButton = document.getElementById("reset");
const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const myAudio = document.getElementById("myAudio");

// Functions and events
// Set default timer for 20 minutes
let defaultMinutes = "20";
let defaultSeconds = "00";
minute.innerText = defaultMinutes;
second.innerText = defaultSeconds;

choiseMin.addEventListener("change", () => {
minute.innerText = choiseMin.value < 10 ? "0" + choiseMin.value : choiseMin.value;
});
choiseSec.addEventListener("change", () => {
second.innerText = choiseSec.value < 10 ? "0" + choiseSec.value : choiseSec.value;
});

// Functions
let interval;
start.addEventListener("click", () => {
if (minute.innerText !== "00" || second.innerText !== "00") {
startTimer();
}
});

function startTimer() {
let sec = +second.innerText;
let min = +minute.innerText;

interval = setInterval(() => {
sec--;
if (sec === -1 && min > 0) {
  min--;
  sec = 59;
}

if (sec === -1 && min === 0) {
  clearInterval(interval);
  sec = 0;

  // window.alert("Time is over. Break Time!");

  // play the sound
  myAudio.play();
}

minute.innerText = min < 10 ? "0" + String(min) : min;
second.innerText = sec < 10 ? "0" + String(sec) : sec;

}, 1000);
}

// stop timer
stop.addEventListener("click", () => stopTimer());

function stopTimer() {
clearInterval(interval);
}

// reset timer
resetButton.addEventListener("click", () => resetTimer());

function resetTimer() {
clearInterval(interval);
myAudio.pause()
minute.innerText = defaultMinutes;
second.innerText = defaultSeconds;
choiseMin.value = "00";
choiseSec.value = "00";
}