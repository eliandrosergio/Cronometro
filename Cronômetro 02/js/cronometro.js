
/* Variaveis */

const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const reiniciar = document.getElementById('reiniciar');

/* Tratando do Tempo */

let [milisegundo, segundo, minuto, hora] = [0, 0, 0, 0];
let displayContagem = document.getElementById('displayContagem');
let int = 0;

/* Function */

function iniciarContagem() {
    if (int != 0) {
        clearInterval(int);
    }

    int = setInterval(displayTempo, 10);
}

function pausarContagem() {
    clearInterval(int);
}

function reiniciarContagem() {
    clearInterval(int);
    [milisegundo, segundo, minuto, hora] = [0, 0, 0, 0];
    displayContagem.innerHTML = '00 : 00 : 00 : 000';
}

function displayTempo() {
    milisegundo += 10;

    if (milisegundo == 1000) {
        milisegundo = 0;
        segundo++;

        if (segundo == 60) {
            segundo = 0;
            minuto++;

            if (minuto == 60) {
                minuto = 0;
                hora++;
            }
        }
    }

    let h = hora < 10 ? "0" + hora : hora;
    let m = minuto < 10 ? "0" + minuto : minuto;
    let s = segundo < 10 ? "0" + segundo : segundo;
    let ms = milisegundo < 10 ? "00" + milisegundo : milisegundo < 100 ? "0" + milisegundo : milisegundo;

    displayContagem.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

/* Reidirecionar os Eventos dos Buttons */

iniciar.addEventListener('click', iniciarContagem);
pausar.addEventListener('click', pausarContagem);
reiniciar.addEventListener('click', reiniciarContagem);
