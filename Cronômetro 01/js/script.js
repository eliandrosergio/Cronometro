
/* Variaveis */

const time = document.querySelector('#time');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

/* Tratamento do Tempo */

let m = 0;
let s = 0;
let ms = 0;
let timer;

/* Function */

function startCrono() {
    if (timer != 0) {
    clearInterval(timer);
    }
    timer = setInterval(renderTime, 10);
}

function stopCrono() {
    clearInterval(timer);
}

function resetCrono() {
    clearInterval(timer);
    m = 0;
    s = 0;
    ms = 0;
    time.innerHTML = '00 : 00 : 000';
}

function renderTime(){
    ms += 10;

    if (ms == 1000) {
    ms = 0;
    s++;

    if (s == 60) {
        s = 0;
        m++
    }
    }

    time.innerHTML = `${m < 10 ? '0' + m : m} : ${s < 10 ? '0' + s : s} : ${ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms}`
}

/* Redirecionando os Button */

startButton.addEventListener('click', startCrono);
stopButton.addEventListener('click', stopCrono);
resetButton.addEventListener('click', resetCrono);
