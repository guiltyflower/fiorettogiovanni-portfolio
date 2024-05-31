// ----DOM ELEMENTS----
const daysElem = document.querySelector('#days');
const hoursElem = document.querySelector('#hours');
const minutesElem = document.querySelector('#minutes');
const secondsElem = document.querySelector('#seconds');
const panelElem = document.querySelector('.panel');

// ----data di natale----
const endDate = new Date("December 25 2024");
const endDateinMs = endDate.getTime();



// ----tabella calcolo ms----
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

const counterTimer = setInterval(timer, 1000);

function timer() {
    // ----data odierna----
    const dateNowInMs = new Date().getTime();
    // ----ms mancanti----
    const diff = endDateinMs - dateNowInMs;
    if  (diff > 0) {
        daysElem.innerHTML = Math.floor(diff / dayInMs);
        hoursElem.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
        minutesElem.innerHTML = Math.floor((diff % hourInMs) / minuteInMs);
        secondsElem.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);
    }else{
        clearInterval(timer);
        panelElem.innerHTML ="<h1>HO HO HO! BUON NATALE!</h1>";
    }
}