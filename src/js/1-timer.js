
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
        const selectedDates = selectedDates[0];

        if ()
      
    },
  };
  