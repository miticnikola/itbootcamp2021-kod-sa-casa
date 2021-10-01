// If naredba granannja

// Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

let o = 65;

if(o > 90){
    console.log("ocena 10");
} else if(o  > 80){
    console.log("ocena 9");
} else if(o  > 70){
    console.log("ocena 8");
} else if(o  > 60){
    console.log("ocena 7");
} else if(o  > 50){
    console.log("ocena 6");
} else {
    console.log("Nije polozio");
}

// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

let date = new Date();
let day = date.getDay();

if(day < 6){
    console.log("Radni dan je");
} else {
    console.log("Vikend je");
}

// Za vreme preuzeto sa računara ispisati 
// dobro jutro za vreme manje od 12 sati ujutru, 
// dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.
let time = date.getHours();
if(time < 12){
    console.log("Dobro jutro");
} else if(time < 18){
    console.log("Dobro dan");
} else {
    console.log("Dobro vece");
}

// Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
let d1 = '2012/08/11';
let d2 = '2021/07/02';

if(d1 > d2){
    console.log(`Raniji je ${d2}`);
} else if(d2 > d1){
    console.log(`Raniji je ${d1}`);
} else {
    console.log("Datumi su isti");
}

// Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.


