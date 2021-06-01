// Napraviti dva dugmeta i input kao na slici. Klikom na dugme „Start“, počinje odbrojavanje: Ispisuju se redom brojevi 1, 2, 3, ... svake sekunde. Klikom na dugme „Stop“ pauzira se odbrojavanje.

let btnStart = document.getElementById('count');
let inputResult = document.getElementById('result');
let btnStop = document.getElementById('stop');
let clock = null;
let counter = 0;



btnStart.addEventListener('click', () => {
    clock = setInterval(() => {
        counter++;
        inputResult.value = counter;
    }, 1000);
});

btnStop.addEventListener('click', () => {
    clearInterval(clock);
    clock = null;
});
