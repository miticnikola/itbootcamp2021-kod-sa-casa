//  Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći 
let sat = 14;
let min = 16;

let ukPmin = sat*60 + min;
console.log(ukPmin);

// Za unetu cenu robe, unetu novčanicu kojom kupac plaća račun ispisati koliki kusur kasirka treba da mu vrati.
let cena = 650;
let novc = 1000;
console.log(`Kasirka treba da vrati ${novc - cena}din`);

// Izvršiti konverziju zapremine iz galona u litre i obratno, ako važi da je:
// 1 galon = 3.785 litara.
let galon = 3785;
console.log(`1 galon ima ${galon}litara, a jedan litar ima ${1 / galon} galona.`);

/* Izvršiti konverziju temperature iz Farenhajta u Kelvine i obratno, ukoliko su date sledeće dve formule:

Celzijus = (Farenhajt - 32) * 5/9
Kelvin = Celzijus + 273.15

Temperaturu u Farenhajtima i Kelvinima zadati samostalno.
*/

// kelvin = ((Farenhajt - 32) * 5/9) + 273;

let far = 50;
let kelvin = ((far - 32) * 5/9) + 273.15;

console.log(kelvin);

// celzijus = kelvin - 273.15
// kelvin - 273.15 = (Farenhajt - 32) * 5/9;
// Farenhajt - 32 = (kelvin - 273.15) / 5/9;

// farenhajt =   (kelvin - 273.15) / 5/9 + 32;
let farenh = (283.15 - 273.15) / (5/9) + 32;
console.log(farenh);

/*
Pera i Mika su kupili dva ista džempera. Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno.
Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera, a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper.
*/
let p = 750;
let m = 920;
let k = 380;

let dzemper = (p + m - k)/2;

console.log(`Cena dzempera je ${dzemper}, a Mikin kusur je ${m-dzemper}din, a Perin je ${p-dzemper}din`);


// Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
let i;
n = 33;
let brDel = 0;

for(i = 1; i <= n; i++){
    if(n % i == 0 && i % 3 == 0 && i % 2 != 0){
        brDel += 1;
    }
}
console.log(brDel);

// isti zadatak sa while petljom;
n = 33;
brDel = 0;
i = 1;

while(i <= n){
    if(n % i == 0 && i % 2 != 0 && i % 3 == 0){
        brDel += 1;
    }
    i++;
}
console.log(brDel);

/*
Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2  površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve vi n određujete sami. 
Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. 
Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena. 
*/
let per = 3;
let v = 74;
n = 29;

if(n > v/per){
    document.body.innerHTML += `<h1 style="color:red">NE. Lokal mora da napusti ${Math.ceil(n - v/per)} osoba.</h1>`;
} else {
    document.body.innerHTML += `<h1 style="color:green">DA</h1>`;   
}

/*
Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
*/

let date = new Date();
let year = date.getFullYear();
let godB = 1993;

if(year - godB >= 18){
    console.log(`Osoba je punoletna, i ima ${year-godB}god.`)
} else {
    console.log(`Osoba je maloletna, i ima ${year-godB}god.`);
}


/*
Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
*/
let rStart = 9;
let rEnd = 20;

let vStart = 10;
let vEnd = 18;

let day = Math.abs(date.getDay());
let hour = date.getHours();

if(day == 0 || day == 6){
    if(hour > vStart && hour < vEnd){
        console.log("Butik radi");
    } else {
        console.log("Butik ne radi.");
    }
} else if(day < 6){
    if(hour > rStart && hour < rEnd){
        console.log("Butik radi");
    } else {
        console.log("Butik ne radi.");
    }
} else {
    console.log("Unesite pravilno dan u nedelji.")
}


// Nacin 2:
rStart = 9;
rEnd = 20;

vStart = 10;
vEnd = 18;

day = Math.abs(date.getDay());
hour = date.getHours();

if(day == 0){
    if(hour < vStart){
        console.log("Butik ne radi.");
    } else if(hour >= vEnd){
        console.log("Butik ne radi.");
    } else {
        console.log("Butik radi.")
    }
} else if(day == 6){
    if(hour < vStart){
        console.log("Butik ne radi.");
    } else if(hour >= vEnd){
        console.log("Butik ne radi.");
    } else {
        console.log("Butik radi.")
    }
} else if(day < 6) {
    if(hour < rStart){
        console.log("Butik ne radi.");
    } else if(hour >= rEnd){
        console.log("Butik ne radi.");
    } else {
        console.log("Butik radi.")
    }
} else {
    console.log("Unesite pravilno dan u nedelji.")
}


/*
Ministarstvo zdravlja jedne zemlje je povodom pandemije virusa donelo sledeću odredbu:
"Ukoliko je procenat pozitivno testiranih stanovnika u odnosu na ukupno testirane stanovnike u jednom danu veći od 30%, i ako je pored toga i procenat pozitivno testiranih stanovnika veći od 10% ukupnog broja stanovnika te zemlje, automatski se uvodi vanredno stanje."
Za proizvoljno unete vrednosti: ukupan broj stanovnika zemlje, ukupan broj testiranih u jednom danu i ukupan broj pozitivno testiranih u tom danu, na ekranu crvenom bojom ispisati VANREDNO STANJE, ukoliko treba automatski uvesti vanredno stanje prema odredbi koju je ministarstvo donelo (u suprotnom ne ispisivati ništa).

*/

let ukBrSt = 450000;
let ukBrTestU1d = 250000;
let ukBrPozU1D = 75001;

if(ukBrPozU1D > Math.floor(ukBrTestU1d * (30/100))){
    if(ukBrPozU1D > Math.floor(ukBrSt * (10/100))){
        document.body.innerHTML += `<h1 style="color: red;">Vanredno stanje</h1>`
    }
}