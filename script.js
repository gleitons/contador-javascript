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
