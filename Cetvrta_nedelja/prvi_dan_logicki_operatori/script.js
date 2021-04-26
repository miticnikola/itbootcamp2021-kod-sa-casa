// Konjunkcija u programiranju se vrsi sa &&

let a = 5;

if(a > 0 && a < 10){ //ovo je konjunkcija  -- binarni operator
    console.log("Oba logicka uslova su zadovoljena.");
} else {
    console.log("Barem jedan uslov nije zadovoljen.");
}


//Disjunkcija -- binarni operator
let b = 5;

if(b < 0 || b > 15){
    console.log("Barem jedan logicki uslov je zadovoljen.")
} else {
    console.log("Nijedan uslov nije zadovoljen.");
}

// Negacija -- 

let c = -3;

if(!(c < 0)){
    console.log(`Broj ${c} nije negativan.`);
} else {
    console.log(`Broj ${c} je negativan.`)
}


// Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan

let pol = "z";
let godine = 15;

if(pol == "m" && godine >= 18){
    console.log("Osoba je muskog pola i punoletna.")
} else if(pol == "m" && godine < 18){
    console.log("Osoba je muskog pola i maloletna je.")
} else if(pol == "z" && godine >= 18){
    console.log("Osoba je zenskog pola i punoletna je.")
} else {
    console.log("Osoba je zenskog pola i maloletna je.");
}

/* zadatak 21
Naći koji je najveći od tri uneta broja 
a, b i c, korišćenjem logičkih operatora. 
*/

a1 = 115;
b1 = 233;
c1 = 78;

if(a1 > b1 && a1 > c1){
    console.log(`${a1} je najveci broj.`);
} else if(b1 > a1 && b1 > c1){
    console.log(`${b1} je najveci broj.`);
} else {
    console.log(`${c1} je najveci broj.`);
}


/* zadatak 22
Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.
 */
temp = -21;
if(temp < -15 || temp > 40){
    document.body.innerHTML = `<h1>EKSTREMNA TEMPERATURA</h1>`;
}

/* zadatak 23
Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
 */
let datum = new Date();

let godina = datum.getFullYear();

if(godina%4 == 0 && !(godina%100 == 0)){
    console.log(`Godina ${godina} je prestupna godina.`);
} else if(godina%400 == 0){
    console.log(`Godina ${godina} je prestupna godina.`);
} else {
    console.log(`Godina ${godina} nije prestupna godina.`);
}


/* zadatak 24
Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
 */

let hour = datum.getHours();
let day = datum.getDay();

let rdStart = 9;
let rdEnd = 20;

let vikStart = 10;
let vikEnd = 18;

if(day == 0 || day == 6){
    if(hour >= 10 && hour < 18){
        console.log("Butik radi");
    } else {
        console.log("Butik ne radi")
    }
} else {
    if(hour >= 9 && hour < 20){
        console.log("Butik radi");
    } else {
        console.log("Butik ne radi");
    }
}



