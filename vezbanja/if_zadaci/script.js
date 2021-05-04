// Za dva uneta broja ispisati koji je veći a koji je manji.
let a = 5;
let b = 9;

if(a>b){
    console.log(`${a} je vece od ${b}.`);
} else {
    console.log(`${b} je vece od ${a}.`);
}


// Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
let temp = 5;
if(temp < 0){
    console.log(`Temperatura je u minusu.`);
} else {
    console.log(`Temp je u plusu.`);
}

// U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 

let pol = 'm';

if(pol == 'm'){
    document.body.innerHTML += `<img src="men.jpg" width="100px">`;
} else if(pol == "z"){
    document.body.innerHTML +=`<img src="female.jpg" width="100px">`;
} else {
    document.body.innerHTML = `<h2>Pravilno unesite pol.</h2>`;
}

// U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.
let date = new Date();
let sat = date.getHours();

console.log(sat);

if(sat > 5 && sat < 12){
    console.log(`Jutro je.`)
} else if(sat == 12){
    console.log("Podne je.");
} else if(sat > 12 && sat < 20){
    console.log(`Popodne je.`)
} else {
    console.log(`Vece je`);
}

// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
let god = date.getFullYear();
let godR = 2005;

if(god - godR < 18){
    console.log(`Osoba je maloletna. I ima ${god - godR}god.`);
} else {
    console.log(`Osoba je punoletna. I ima ${god - godR}god.`);
}

// Odrediti najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).
a = 45;
b = 30;
let c = 15;

let max = a;

if(b > max){
    max = b;
}
if(c > max){
    max = c;
}

console.log(`${max} je najveci broj.`);


/* Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
Za više od 50 poena učenik dobija ocenu 6, 
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8, 
za više od 80 poena učenik dobija ocenu 9 i 
za više od 90 poena učenik dobija ocenu 10.
*/
let poeni = 45;

if(poeni > 90){
    console.log(`Ucenik ima ${poeni}poena i ocenu 10`);
} else if(poeni > 80){
    console.log(`Ucenik ima ${poeni}poena i ocenu 9`);    
} else if(poeni > 70){
    console.log(`Ucenik ima ${poeni}poena i ocenu 8`);
} else if(poeni > 60){
    console.log(`Ucenik ima ${poeni}poena i ocenu 7`);
} else if(poeni > 50){
    console.log(`Ucenik ima ${poeni}poena i ocenu 6`);
} else {
    console.log(`Ucenik ima ${poeni}poena i pao je ispit`);
}

// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
let dan = date.getDay();
if(dan == 6 || dan == 0){
    console.log("Vikend je.");
} else if(dan < 6){
    console.log("Radni dan je")
} else {
    console.log("Unesite pravilno redni broj dana.");
}

// Nacin 2
if(dan == 6){
    console.log("Vikend je.");
} else if(dan == 0){
    console.log("Vikend je.");
} else if(dan < 6){
    console.log("Radni dan je")
} else {
    console.log("Unesite pravilno redni broj dana.");
}

/* Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče. */
let hour = date.getHours();

if(hour < 12){
    console.log("Dobro jutro.")
} else if(hour < 18){
    console.log("Dobar dan.")
} else {
    console.log("Dobro vece.");
}

/* Uporediti dva uneta datuma i ispisati koji od njih je raniji.*/
let datum = "2005-08-03";
let datum1 = "1998-05-03";

if(datum < datum1){
    console.log(`${datum} je raniji od ${datum1}`);
} else {
    console.log(`${datum1} je raniji od ${datum}`);
}

/*Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.*/
hour = date.getHours();

let start = 9;
let end = 17;

// Nacin 1
if(hour >= start && hour < end){
    console.log("Firma radi.")
} else {
    console.log("Firma ne radi.");
}

// Nacin 2
if(hour >= end){
    console.log("Firma ne radi.");
} else if(hour < start){
    console.log("Firma ne radi.")
} else {
    console.log("Firma radi.")
}

// Za unet sat početka i sat kraja radnog vremena dva lekara,  
// ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
// (Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati doatno)
let poc = 8;
let kraj = 14;

let poc1 = 13;
let kraj1 = 20;

if(kraj <= poc1){
    console.log('Nema poklapanja');
} else if(kraj1 <= poc){
    console.log('Nema poklapanja');
} else {
    console.log("Radno vreme se poklapa.");
}


// Za uneti broj ispitati da li je paran ili nije. 
n = 31;
if(n % 2 == 0){
    console.log("Broj je paran.");
} else {
    console.log("Broj nije paran.");
}


// Za uneti broj ispisati da li je deljiv sa 3 ili ne.
n = 27;
if(n % 3 == 0){
    console.log(`Broj ${n} je deljiv sa 3.`);
} else {
    console.log(`Broj ${n} nije deljiv sa 3`);
}

// Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
n = 25;
m = 25;

 if(n > m){
     console.log(`Broj ${n} je veci od broja ${m}. I njihova razlika iznosi ${n-m}.`);
 } else if(m > n){
    console.log(`Broj ${m} je veci od broja ${n}. I njihova razlika iznosi ${m-n}.`);
 } else {
     console.log(`Brojevi ${n} i ${m} imaju iste vrednosti. I njihova razlika iznosi ${m-n}.`);
 }


//  Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
// Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
n = 5;

if(n <= 0){
    console.log(n-1)
} else {
    console.log(n+1);
} 


// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 
a = 15;
b = 7;
c = 91;

max = a;
let min = a;

if(b > max){
    max = b;
}
if(c > max){
    max = c;
}

if(b < min){
    min = b;
}
if(c < min){
    min = c;
}

console.log(`Najveci broj je ${max}, najmanji broj je ${min}, a srednji broj je ${a+b+c - (min+max)}`);



// Za učitani broj ispitati da li je ceo.
n = 12.5;
if(n % 1 == 0){
    console.log(`Broj ${n} je ceo broj.`);
} else {
    console.log(`Broj ${n} nije ceo broj.`);
}


// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem logičkih operatora.
a = 11;
b = 70;
c = 91;

max = 0;
min = 0;

if(a > b && a > c){
    max = a;
    console.log(`najveci broj je ${a}`);
} else if(b > a && b > c){
    max = b;
    console.log(`najveci broj je ${b}`);
} else if(c > a && c > b){
    max = c;
    console.log(`najveci broj je ${c}`);
}  

if(a < b && a < c){
    min = a;
    console.log(`Najmanji broj je ${a}`);
} else if(b < a && b < c){
    min = b;
    console.log(`Najmanji broj je ${b}`);
} else if(c < a && c < b){
    min = c;
    console.log(`Najmanji broj je ${c}`);
}

console.log(`Srednji broj je ${a+b+c - (min + max)}`);



// Učitati dva cela broja i ispitati da li je veći od njih paran. 
n = 3;
m = 12;

if(n > m){
    if(n % 2 == 0){
        console.log(`Veci broj ${n} je paran.`)
    } else {
        console.log(`Veci broj ${n} je neparan.`)
    }
} else {
    if(m % 2 == 0){
        console.log(`Veci broj ${m} je paran.`)
    } else {
        console.log(`Veci broj ${m} je neparan.`)
    }
}


// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.
n = -25;

if(n < -15 || n > 40){
    document.body.innerHTML += `<h1>Ekstremna temperatura</h1>`;
}

// Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
year = date.getFullYear();
console.log(year);

if(year % 4 == 0 && year % 100 != 0){
    console.log(`Godina ${year} je prestupna.`)
} else {
    console.log(`Godina ${year} nije prestupna.`)   
}

/* Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren. */

dan = date.getDay();
vreme = date.getHours();

let startR = 9;
let endR = 20;

let startV = 10;
let endV = 18;

if(dan == 0 || dan == 6){
    if( vreme >= startV && vreme < endV){
        console.log("Butik je otvoren");
    } else {
        console.log("Butik je zatvoren");
    }
} else if(dan < 6){
    if(vreme >= startR && vreme < endR){
        console.log("Butik je otvoren.")
    } else {
        console.log("Butik je zatvoren.")
    }
} else {
    console.log("Unesite pravilno dan.")
}



