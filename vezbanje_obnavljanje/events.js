// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
let btn = document.getElementById('plus');

console.log(btn);

let brojac = 1;
btn.addEventListener('click', () => {
    brojac++;
    console.log(brojac);
});

//  Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli. Kada se klikne na dugme Minus, na ekranu prikazati vrednost brojača smanjenu za 1, a na Plus, poveca se za 1.


let minus = document.querySelector('#minus');

let p = document.createElement('p');
p.innerText = '1';
let body = document.querySelector('body');

body.appendChild(p);

// Plus
let br = 1;
btn.addEventListener('click', () => {
    br++;
    p.innerHTML = br;
});

// Minus
minus.addEventListener('click', () => {
    if(br <= 0){
        br = 0
    } else {
        br--;
    }
    p.innerText = br;
});



// Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
// Dopuniti prethodni zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.

let form = document.getElementById('forma');
let inputName = document.getElementById('ime');
let submit = document.getElementById('submit');
let ispis = document.getElementById('ispis');

form.addEventListener('submit', e => {
    e.preventDefault();
    ispis.innerText = "Zdravo " + inputName.value;
});

submit.addEventListener('dblclick', () => {
    alert('Ovo je dbl click');
});