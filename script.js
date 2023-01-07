const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

function updateClock() {
    const currentDate = new Date();
    setTimeout(updateClock, 1000)
    console.log(currentDate);
}

updateClock();