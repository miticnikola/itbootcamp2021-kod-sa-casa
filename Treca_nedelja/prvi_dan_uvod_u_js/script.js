console.log(3);
// brojevi se ne zapisuju izmedju navodnika, ve samo unutar zagrade

console.log(-15.3867);
console.log("Proizvoljan text");
console.log('Jos jedan tekst');
// Nije bitno da li se ispisuje navodnici, " " ili ''

console.log("Mark's pen");
console.log('Mark\'s pen');

console.log('-15.3867');
// Stringovi se pisu u "" ili '', a bojevi se pisu bez njih, da bi mogle da se vrse aritmeticke operacije, jer "" definisu da je to string.

// String je niz karaktera jedan za drugim.

console.log(3+5); //radi kao sabiranje brojeva
console.log("3" + "5"); // + radi kao konkatenacija stringova(nadovezuju se)
console.log(3 + "5") //broj 3 se konvertuje u string 3 pa se vrsi konkatenacija stringova (stringovi su jaci, pa im se nadovezuje broj u tipu stringa)


// Logicke vrednosti true/false
console.log(true);
console.log(false);

// Promenljive
// Vizualizujemo je kao neku kutiju koja ima svoj prostor i u njoj je nesto smesteno, koristi se var ili let da bi se deklarisala 

let x; //deklarisanje promenljive x
x = 3; // x dobija vrednost 3
console.log(x);

x = 5;
console.log(x);

x = "Pera Zdera";

let y = true;
y = 0.5;

console.log(x, y);
// U promenljive mozemo da smestamo bilo koji podatak, nebitno kog tipa on bio 

