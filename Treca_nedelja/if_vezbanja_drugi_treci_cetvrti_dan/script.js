//1. Za dva uneta broja ispisati koji je veći a koji je manji.
let a = 10;
let b = 7;

if(a > b){
 console.log(`broj a je veci od broja b`)
};


//2. Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
let temp = -15;

if(temp > 0){
    console.log(`Temperatura je u plusu i izonosi ${temp} stepeni`);
} else {
    console.log(`Temperatura je niza od nule i iznosi ${temp} stepeni`);
}

//3. U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 
let pol = "m";

let m = "men.jpg";
let z = "female.jpg"

if(pol == "z"){
    document.body.innerHTML += `<img src="${z}">`;
} else {
    document.body.innerHTML += `<img src="${m}">`;

}



//4. U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.
let date = new Date();

let time = date.getHours();

if(time > 12 & time < 19){
    console.log(`Sada je popodne.`);
} else if(time > 6 & time < 12) {
    console.log(`Sada je jutro.`);
};

//5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let godRodj = 1987;
let godina = date.getFullYear();

if(godina - godRodj <= 18 ){
    console.log(`Osoba je punoletna`);
} else {
    console.log(`Osoba je maloletna`);
};


//6. Odrediti najveći od tri uneta broja.
let x = 12;
let y = 23;
let c = 341;
let maxVr = Math.max(x, y, c);

if(x == maxVr){
    console.log(`x je broj najvece vrednosti ${x}`);
} else if(y == maxVr){
    console.log(`y je broj najvece vrednosti ${y}`);
} else if(c == maxVr){
    console.log(`c je broj najvece vrednosti ${c}`);
}


// if(x > y & x > c){
//     console.log(`x je broj najvece vrednosti ${x}`);
// } else if(y > x & y > c){
//     console.log(`y je broj najvece vrednosti ${y}`);
// } else if(c > x & c > y){
//     console.log(`c je broj najvece vrednosti ${c}`);
// }

let maks = x; //pretpostavka da je najveci prvi broj
if(y > maks) {
    maks = y;
}

if(c > maks) {
    maks = c;
}
console.log(maks);
// ne vrsimo poredjenje sva 3 broja ponaosob, vec trazimo najvecu vrednost i zbog toga ne pisemo



// 8. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
let danUNedelji = date.getDay();
console.log(danUNedelji);

// if(danUNedelji > 5 & danUNedelji == 0){
//     console.log("Danas je vikend");
// } else if(danUNedelji < 5 & danUNedelji !=0){
//     console.log("Danas je radni dan")
// }

if(danUNedelji == 0){
    console.log("Danas je vikend")
} else if(danUNedelji == 6){
    console.log("Danas je vikend");
} else {
    console.log("danas je radni dan");
}



// 9. Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.
let vreme = date.getHours();

if(vreme < 12){
    console.log("Dobro jutro!")
} else if(vreme < 18){
    console.log("Dobar dan!")
} else {
    console.log("Dobro vece!")
}


// 11. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
let start = 9;
let end = 17;
console.log(vreme);
// let vreme uzimam iz 9-og zadatka

// if(vreme < start || vreme >= end){
//  console.log("Firma ne radi");
// } else if(vreme >= start & vreme < end){
//     console.log("Firma radi");
// }

if(vreme <= end) {
    console.log("Sada nije radno vreme");
} else if(vreme < start){
    console.log("Sada nije radno vreme")
} else {
    console.log("Sada je radno vreme");
}

/* 7. Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
Za više od 50 poena učenik dobija ocenu 6, 
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8, 
za više od 80 poena učenik dobija ocenu 9 i 
za više od 90 poena učenik dobija ocenu 10.
*/

let ucenik = 95;

if(ucenik > 100){
    console.log("Poeni ne mogu uzeti vrednost vecu od 100")
} else if (ucenik >= 100) {
    console.log("Ocena 10");
} else if(ucenik >= 81){
    console.log("Ocena 9");
} else if(ucenik >= 71) {
    console.log("Ocena 8");
} else if(ucenik >= 61) {
    console.log("Ocena 7");
} else if(ucenik >= 51){
    console.log("Ocena 6");
} else {
    console.log("Pali ste ispit");
}



// 10. Zadatak == Uporediti dva uneta datuma i ispisati koji od njih je raniji
let dat1 = "2021-01-23";
let dat2 = "2021-05-01";  // za poredjenje datuma treba da se koristi ova forma datuma u stringu, i proveravati u vecem broju primera (menjamo i dane i godine, i mesece i rotiramo za obe vrednosti).

// Js leksikografski uporedjuje stringove
//trik zadaci na intrvjuima - 2 osobe plivale, jedna isplivala za 29sek, jedna za 30. koja je prva isplivala?
if(dat1 < dat2){
    console.log(`${dat1} je bio pre ${dat2}`);
} else if(dat2 < dat1) {
    console.log(`${dat2} je bio pre ${dat1}`);
} else {
    console.log(`${dat1} i  ${dat2} su isti datumi.`);
}


// 2.nacin 
let dan1 = 01;
let mes1 = 06;
let god1 = 2021;

let dan2 = 01;
let mes2 = 05;
let god2 = 2021;
// Provera uvek ide prvo od godine, pa na mesece, pa na dane (ispitivanje ide od opsteg ka posebnom);


if(god1 < god2){
    console.log("datum 1 je raniji");
} else if(god2 < god1) {      //posto su godine iste proveravamo za mesece
    console.log("Datum 2 je raniji");
} else if(mes1 < mes2){
    console.log("Datum 1 je raniji")
} else if(mes2 < mes1) {
    console.log("Datum 2 je raniji")
    //posto su godine i meseci isti proveravamo za dane
} else if (dan1 < dan2) {
    console.log("datum 1 je raniji")
} else if(dan2 < dan1){
    console.log("Datum drugi je raniji");
    // posto su godine i meseci i dani isti datumi su jednaki
} else {
    console.log("Datum 1 i datum 2 su isti datumi.")
}


///////////////////////

let stepeni = -10;

 if(stepeni < 0){
    console.log("Ispod nula stepeni.");
}

else if(stepeni < 10) {
    console.log("Ispod 10 stepeni");
}
else if(stepeni < 20) {
    console.log("Ispod 20 stepeni");
}

else {
    console.log("20 i vise stepeni.")
}



// UGNJEZDENO GRANANJE (UGNJEZDAVANJE) == to je blok u okviru bloka
// ODVIJA SE TAKO STO U USLOV, POSTAVIMO NEKI DRUGI USLOV

let pol1 = "m";
let god = 32;

if(pol == "z"){
    console.log("Osoba zenskog pola.");
    if(god >= 18){
        console.log("Osoba je punoletna.");
    } else {
        console.log("Osoba je maloletna");
    }
} else {
    console.log("Osoba muskog pola");
    if(god >= 18){
        console.log("Osoba je punoletna");
    } else {
        console.log("Osoba je maloletna");
    }
}



// Zadatak 12 Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.

let p1 = 14;
let k1 = 20;

// Pocetak i kraj radnog vremena drugog lekara
let p2 = 13;
let k2 = 19;

if(k1<p2){
    console.log("Ne");
} else if(k2 < p1){
    console.log("Ne");
} else {
    console.log("Da");
}


//isptivanje deljivosti neka dva broja
let broj1 = 33;
let broj2 = 3;

console.log(broj1%broj2)
if(broj1%broj2 == 0){
    console.log(`${broj1} je deljiv brojem ${broj2}`);
} else {
    console.log(`${broj1} nije deljiv brojem ${broj2}`);
}



/* zadatak 13
Za uneti broj ispitati da li je paran ili nije.
*/

let broj = 13;

if(broj%2 == 0){
    console.log("Broj je paran");
} else {
    console.log("Broj je neparan.")
}


// Zadatak 14// Za uneti broj ispisati da li je deljiv sa 3 ili ne.
let num = 969;

if(num%3 == 0){
    console.log(`${num} je deljiv sa 3.`)
} else {
    console.log(`${num} nije deljiv sa 3`);
}

/* zadatak 15
Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
*/

let num1 = 897;
let num2 = 9856;

if(num1 < num2){
    document.body.innerHTML = `Broj 1 je manji od broja 2 i njihova razlika iznosi ${num2-num1}`;
} else {
    document.body.innerHTML = `Broj 2 je manji od broja 1 i njihova razlika iznosi ${num2-num1}`;
}


/* zadatak 16
    Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
*/

let unos = 68;

if(unos <= 0){
    console.log(`${unos-1}`);
} else {
    console.log(`${unos+1}`);
}


/* zadatak 18
Za učitani broj ispitati da li je ceo.
*/

let br = 12.8;

if(br == Math.floor(br)){
    console.log(`${br} je ceo broj.`)
} else {
    console.log(`${br} nije ceo broj.`)
}

/* zadatak 19
Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji.
*/

let prvi = 12;
let drugi = -27;
let treci = -55;

// min
let min = prvi;

if(drugi < min){
     min = drugi;
}
if(treci < min){
    min = treci;
}
console.log(`Najmanji broj je ${min}`);

// max
let max = prvi;

if(drugi > max){
    max = drugi;
}
if(treci > max){
    max = treci;
}

console.log(`Najveci broj je ${max}`);

// srednji broj
let srednji = ((prvi + drugi + treci)-(min + max));
console.log(`Srednji broj je ${srednji}`);



/* zadatak 20
Učitati dva cela broja i ispitati da li je veći od njih paran. 
 */

let br1 = 256;
let br2 = 125;

if(br2 < br1){
    console.log(`br 2 je manji`);
    if(br1%2 == 0){
        console.log(`br1 je paran`);
    } else {
        console.log(`br1 je neparan broj`);
    }
} else {
    console.log(`br 1 je manji`);
    if(br2%2 == 0){
        console.log(`br2 je paran`);
    } else {
        console.log(`br2 je neparan broj`);
    }
}

