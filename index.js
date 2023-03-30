const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears ="1 Jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, minutes, seconds)
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTimer(hours);
    minsEl.innerHTML = formatTimer(mins);
    secondsEl.innerHTML = formatTimer(seconds);
}

function formatTimer(timer) {
    return timer < 10 ? `0${timer}` : timer;
  }
  
//initial call
countdown();

setInterval(countdown, 1000);