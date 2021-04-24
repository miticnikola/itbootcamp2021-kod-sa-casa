/* zadatak 1
Za dva uneta broja ispisati koji je veći a koji je manji.
*/
let a = 15;
let b = 25;
if(b > a){
    console.log(`${b} je vece od ${a}`);
} else {
    console.log(`${a} je vece od ${b}`); 
}

/* zadatak 2
Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
*/
let temp = -28;

if(temp < 0){
    console.log("Temperatura je u minusu");
} else {
    console.log("Temeperatura je u plusu.")
}

/* zadatak 3
U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 
*/
let pol = "m";

if( pol == "z"){
    document.body.innerHTML = `<img src="female.jpg" style="width: 100px">`;
} else if(pol == "m"){
    document.body.innerHTML = `<img src="men.jpg" style="width: 100px">`;
}

/* zadatak 4
U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.
*/ 
let date = new Date();

let hour = 21;
console.log(hour);

if(hour > 20){
    console.log("Vece je");
} else if (hour > 12){
    console.log("Popodne je");
} else if(hour >= 6) {
    console.log("Jutro je")
} else {
    console.log("Noc je");
}
/* zadatak 5
Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
*/
let god = date.getFullYear();
let godR = 1987;

if(god - godR >= 18){
    console.log(`Osoba je punoletna i ima ${god - godR} godina.`)
} else {
    console.log(`Osoba je maloletna i ima ${god - godR} godina.`)
}

/* zadatak 6
Odrediti najveći od tri uneta broja.
*/
let br1 = 899;
let br2 = 33;
let br3 = 456;

let max = br1;

if(br2 > max){
    max = br2;
}

if(br3 > max){
    max = br3;
}
console.log(max);

/* zadatak 7
Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
Za više od 50 poena učenik dobija ocenu 6, 
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8, 
za više od 80 poena učenik dobija ocenu 9 i 
za više od 90 poena učenik dobija ocenu 10.
*/

let poeni = 99;
if(poeni > 90){
    console.log(`Sa ${poeni} poena dobili ste ocenu 10`);
} else if(poeni > 80){
    console.log(`Sa ${poeni} poena dobili ste ocenu 9`);
} else if(poeni > 70){
    console.log(`Sa ${poeni} poena dobili ste ocenu 8`);
} else if(poeni > 60){
    console.log(`Sa ${poeni} poena dobili ste ocenu 7`);
} else if(poeni > 50){
    console.log(`Sa ${poeni} poena dobili ste ocenu 6`);
} else {
    console.log(`Sa ${poeni} poena, pali ste ispit.`);
}

/* zadatak 8
Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
*/

let day = date.getDay();
if(day == 6){
    console.log("Danas je dan vikenda.");
} else if(day == 0) {
    console.log("Danas je dan vikenda.");
} else if(day > 6){
    console.log("Unesite pravilno numericku vrednost dana.")
} else {
    console.log("Danas je radni dan.")
}

/* zadatak 9
Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.
*/
let hour1 = date.getHours();

if(hour1 < 12){
    console.log(`Dobro jutro, sada je ${hour1}h`)
} else if(hour1 < 18){
    console.log(`Dobar dan, sada je ${hour1}h`);
} else {
    console.log(`Dobro vece, sada je ${hour1}h`);
}

/* zadatak 10
Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
*/

let datum1 = "2015-09-12";
let datum2 = "2017-05-12";

if(datum1 > datum2){
    console.log(`${datum2} je raniji od ${datum1}`);
} else {
    console.log(`${datum1} je raniji od ${datum2}`);
}

/* zadatak 11
Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
*/
let start = 9;
let end = 17;

let hour2 = date.getHours();

if(hour2 >= end) {
    console.log("Firma ne radi.");
} else if(hour2 >= start){
    console.log("Firma radi")
} else {
    console.log("Firma ne radi");
}
/* zadatak 12
Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
*/

let l1Start = 13;
let l1End = 19;

let l2Start = 6;
let l2End = 15;



/* zadatak 13
*/

/*
*/

/*
*/

/*
*/

/*
*/

/*
*/

/*
*/

/*
*/
