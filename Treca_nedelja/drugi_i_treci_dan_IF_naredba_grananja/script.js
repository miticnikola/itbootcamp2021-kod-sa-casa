// IF - NAREDBA GRANANJA

let a = 5;
let b = 3;
if(a>3){
    console.log("a je vece od b")
}


console.log("IF ispitivanje je zavrseno");


let x = 15;
let y = 15;

if(x == y){
    console.log("Brojevi x = " + x + " i y = " + y + "su jednaki");
    console.log(`Brojevi  x = ${x} i y = ${y} su jednaki.`)
}


x1 = '15';
if(x == x1) {
    console.log(`Brojevi x i x1 imaju istu vrednost`);
} //imaju istu vrednost ali nisu istog tipa - ovde se uporedjuje samo po vrednosti vrednost ali ne i po tipu

if(x === x1){
    console.log(`Brojevi x i x1 imaju isti tip i istu vrednost.`);
} //odredjuje da li su i istog tipa i iste vrednosti (ovde x i x1 imaju istu vrednost i to je 15, ali nisu istog tipa. X je tipa broj, dok je x1 tipa string).


// !== - razlicito po tipu i po vrednosti, != - razlicito po vrednosti samo


// IF/Else naredba
let a1 = 5;
let b1 = 7;

if(a1 == b1){
    console.log(`a1 i b1 su jednakih vrednosti.`);
} else {
    console.log(`a1 i b1 nisu jednakih vrednosti.`);
}

// 2.nacin
if(a1 != b1) {
    console.log(`a i b su razlicitih vrednosti`);
} else {
    console.log(`a i be su jednakih vrednosti`);
}

// Dodavanje HTML elementa iz SCRIPT.js fajla
let v = 2021;
document.body.innerHTML = `<h1>Ovo je <i>if else</i> naredba grananja</h1>`;
document.body.innerHTML += `<h3>Zdravo</h3>`;
document.body.innerHTML += `<p>Godina je ${v}</p>`;

// ov je jedan nacin:  document.body.innerHTML += `<img src="pawprint.png">`;

let slika = "pawprint.png";

document.body.innerHTML = `<img src="${slika}">`;


// IF - ELSE IF - ELSE

let broj = -5;

if(broj < 0){
    console.log(`Broj je manji od nule`);
}
else if(broj == 0){
    console.log("Broj je jednak nuli.");
} else {
    console.log("Broj je veci od nule")
}

console.log("KRAJ");

