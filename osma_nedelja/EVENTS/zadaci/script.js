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


// 3. Napraviti dugme + i dugme -. Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1. Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

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



// 4. Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.



// 5. Napraviti input polje i dugme. U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

let btnPosalji = document.getElementById('posalji');
let inputIme = document.getElementById('ime');
let pPrikaz = document.getElementById('prikaziIme');

// let ime = inputIme.value; -- ovako je greska jer je uvek value prvo prazan pa se tek onda ispisuje ime, i u konzoli ce nam ispisati prazan red + prikaz u sledecem redu

btnPosalji.addEventListener('click', () => {
   let upisanoIme = inputIme.value; //ovako je ispravno da ne bi bilo praznih linija
   
   pPrikaz.innerHTML = `Zdravo ` + upisanoIme; // ili `Zdravo ${upisanoIme}`;
});
// 6. Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.

btnPosalji.addEventListener('dblclick', () => {
    let upisanoIme = inputIme.value; //ovako je ispravno da ne bi bilo praznih linija
    alert(`Hello ${upisanoIme}`);
});


//5. zadatak ====== drugi nacin
let inputPrezime = document.getElementById('prezime');
let btnPosaljiPrezime = document.getElementById('posaljiPrezime');
let pPrikaziPrezime = document.getElementById('prikaziPrezime');

btnPosaljiPrezime.addEventListener('click', e => {
    e.preventDefault(); //da se spreci reloadovanje forme
    console.log(e); 
    pPrikaziPrezime.innerHTML = `Uneli ste prezime ${inputPrezime.value}`;
});

// 7. zadatak
// Kvadriranje
let inputUnos1 = document.getElementById('unos1');
let btnIzracunaj1 = document.getElementById('izracunaj1');
let pRez1 = document.getElementById('rez1');


btnIzracunaj1.addEventListener('click', e => {
    e.preventDefault();
    pRez1.innerHTML = inputUnos1.value**2;
    // pRez1.innerHTML = Number(inputUnos1.value)**2; === ukoliko je u HTML input type="text";
});

// Prepolovljivanje
let inputUnos2 = document.getElementById('unos2');
let btnIzracunaj2 = document.getElementById('izracunaj2');
let pRez2 = document.getElementById('rez2');

btnIzracunaj2.addEventListener('click', e => {
    e.preventDefault();
    pRez2.innerHTML = inputUnos2.value / 2;
});

// Povrsina kruga
let inputUnos3 = document.getElementById('unos3');
let btnIzracunaj3 = document.getElementById('izracunaj3');
let pRez3 = document.getElementById('rez3');

btnIzracunaj3.addEventListener('click', e => {
    e.preventDefault();

    let pI = 3.14;
    // let pI = Math.pi; == ugradjena konstanta za Pi

    pRez3.innerHTML = inputUnos3.value**2*pI;
});


// PRIMER
let forma = document.getElementById('forma');
let inputJelo = document.getElementById('jelo');
let inputPice = document.getElementById('pice');
let pIspis = document.getElementById('ispis');

forma.addEventListener('submit', e => {
    e.preventDefault();

    pIspis.innerHTML = 
    `<ul>
        <li>Omiljeno pice: ${inputPice.value}</li>
        <li>Omiljeno jelo: ${inputJelo.value}</li>
    </ul>
    `;
    forma.reset();
});

