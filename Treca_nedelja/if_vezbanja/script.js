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


if(x > y & x > c){
    console.log(`x je broj najvece vrednosti ${x}`);
} else if(y > x & y > c){
    console.log(`y je broj najvece vrednosti ${y}`);
} else if(c > x & c > y){
    console.log(`c je broj najvece vrednosti ${c}`);
}

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

if(60 < ucenik > 50){
    console.log("Ocena 6");
} else if (70 < ucenik > 60){
    console.log("Ocena 7");
}
// zadatak nije zavrsen
