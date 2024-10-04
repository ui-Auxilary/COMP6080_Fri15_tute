let time = document.getElementById('time');
let time_sec = document.getElementById('sec');
let time_min = document.getElementById('min');

let seconds = 0;
let minutes = 0;

let start_btn = document.getElementById('start');
let stop_btn = document.getElementById('stop');
let reset_btn = document.getElementById('reset');

let timerId = 0;

const startTimer = () => {
  console.log('Click');

  timerId = setInterval(function () {
    seconds += 1;
    time_sec.textContent = String(seconds).padStart(2, '0');
    if (seconds == 60) {
      seconds = 0;
      minutes += 1;
      time_min.textContent = String(minutes).padStart(2, '0');
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerId);
};

const resetTimer = () => {
  clearInterval(timerId);
  seconds = 0;
  time_sec.textContent = String(seconds).padStart(2, '0');
  minutes += 1;
  time_min.textContent = String(seconds).padStart(2, '0');
};

start_btn.addEventListener('click', startTimer);
stop_btn.addEventListener('click', stopTimer);
reset_btn.addEventListener('click', resetTimer);
