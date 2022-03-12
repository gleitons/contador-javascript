const horas = document.getElementById('horas');
const min = document.getAnimations('minutos')
const s = document.getAnimations('segundos')



const relogio = setInterval( function time() {
    const contador = new Date();
    const hora = contador.getHours();
    const minuto = contador.getMinutes();
    const segundo = contador.getSeconds();
    horas.innerText = hora
    minutos.innerText = minuto
    segundos.innerText = segundo
}/*Aqui pode definir o tempo colocando ", 3000", onde 3000 é a quantidade de milisegundos */)

function starTime (duration, display){
var timer = duration, minutes, seconds;
setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = minutes + ":" + seconds;

    if(--timer < 0) {
        timer = duration
    }

}, 1000)
}
window.onload = function() {
    var duration = 60 * 4;
    var display = document.getElementById('timer');
    starTime(duration, display)
}