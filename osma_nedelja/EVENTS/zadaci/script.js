// VEZBANJA

// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
let btnBrojac = document.querySelector("#brojac");
let br = 1; //ne moze unutar funkcije da stoji jer ce uvek da se resetuje 
btnBrojac.addEventListener('click', () => {
    console.log(br);
    br++;
});


// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

let btnBrojac1 = document.getElementById('brojac1');
let paragraf = document.querySelector('#ispisBrojaca1');
let br1 = 0;

paragraf.innerHTML = br1;

btnBrojac1.addEventListener('click', () => {
    br1++;
    // paragraf.innerHTML += br1 + ', ';
    paragraf.innerHTML = br1; //moze i preko textContenta da se pise 
});


// Napraviti dugme + i dugme -. Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1. Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

// DOM
let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById('minus');
let prikaz = document.getElementById('prikaz');
let brojac = 0;

prikaz.innerHTML = brojac;

btnPlus.addEventListener('click', () => {
    prikaz.style.color = "black";
    brojac++;
    prikaz.innerHTML = brojac;
});

btnMinus.addEventListener('click', () => {
    prikaz.style.color = "black";
    brojac--;
    
    if(brojac < 0){
        brojac = 0;
        prikaz.style.color = "blue";
    }

    prikaz.innerHTML = brojac;

    // smanjimo - pitamo - ispisemo
});



//  Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.
