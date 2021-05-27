// Postupak dodavanja click eventa:
// 1. Dohvatiti dugme
let btn = document.querySelector('button');

// 2. Dodati osluskicav (event listener) na zeljeni element - on aktivno slusa sve sto se dogadja nad tim elementom
btn.addEventListener('click', () => {
    console.log('Jednostruki klik');
}); // prva akcija je 'click' i to je event, a drugi parametar je funkcija;

let btnDblClick = document.getElementById('dupli_klik');
// let btnDblClick = document.querySelector('#dupli_klik');

btnDblClick.addEventListener('dblclick', () => {
    console.log('Dupli klik');
});


////////////////////////////////////

// 2. NACIN DODAVANJA EVENTA
function klikni(){
    console.log("kliknuto");
};

 