
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimeInput = document.querySelector("#datetime-picker");
// console.log(datetimeInput);
const startBtn = document.querySelector("[data-start]");
// console.log(startBtn);
const daysEl = document.querySelector("[data-days]");
// console.log(daysEl);
const hoursEl = document.querySelector("[data-hours]");
// console.log(hoursEl);
const minutesEl = document.querySelector("[data-minutes]");
// console.log(minutesEl);
const secondsEl = document.querySelector("[data-seconds]");
// console.log(secondsEl);

let userSelectedDate = null;
let timerId = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];

        if (selectedDate <= new Date()) {
            iziToast.warning({
                title: 'Warning',
                message: 'Please choose a date in the future',
                position: 'topRight',
            });
            startBtn.disabled = true;
        } else {
            userSelectedDate = selectedDate;
            startBtn.disabled = false;
        }
    },
      
};
  
flatpickr(datetimeInput, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}
function updateTimer({ days, hours, minutes, seconds }) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}
function startTimer() {
    timerId = setInterval(() => {
      const now = new Date();
      const delta = userSelectedDate - now;
      if (delta <= 0) {
        clearInterval(timerId);
        updateTimer(convertMs(0));
        datetimeInput.disabled = false;
        startBtn.disabled = true;
        return;
      }
      updateTimer(convertMs(delta));
    }, 1000);
}
startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    datetimeInput.disabled = true;
    startTimer();
  });
