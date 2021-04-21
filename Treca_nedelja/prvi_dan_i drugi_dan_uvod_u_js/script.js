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



// Konstante
const pi = 3.14;
console.log(pi);

// konstanti ne moze ponovo da se dodeli neka druga vrednost

// Primitivni tipovi podataka: numbers, string, boolean, null, undefined
// prazna kutija je null === ona je memorijska lokacija koja je prazna i nema nikakvu vrednost


/*
Undefined je kada postoji nedefinisana vrednost promenljive ili nedefinisana promenljiva 
*/
let a;
console.log(a); //undefined nedefinisana vrednost promenljive
// console.log(b); //nedefinisana promeljiva i izbacivace nam gresku
let recenica = "JS kaze: \"Hello Wold\" "; //kada se ne deklarise ispred promeljive onda je tipa var
console.log(recenica);

recenica = `JS kaze: "ili kupi alat, il' ostavi zanat!"`;
console.log(recenica);

let god;
console.log(god, god+3);
// Kada ne definisemo promenljivu, i samo joj +3(ili neki drugi broj stavimo)

let god1 = null;
console.log(god1, god1+3);
// Null je dodeljena prazna lokacija, a ne dodeljena.

// KONKATENACIJA STRINGOVA --- nadovezivanje stringova
let ime = "Nikola";
let prezime = "Mitic";
let imePrezime = ime + ' ' + prezime; //vrsi nadovezivanje ili konkatenaciju
console.log(imePrezime);

console.log(ime.length + prezime.length); //kada koristimo vrsi sabiranje brojeva
console.log(imePrezime.length); //da bi se ispisalo koliko slova ima odredjena promenljiva


// Osnovne aritmeticke operacije
let p = 7;
let q = 3;

let zbir = p + q;
console.log(zbir);

let razlika = p - q;
console.log(razlika);

let proizvod = p * q;
console.log(proizvod);

let kolicnik = p / q;
console.log(kolicnik);

// JS nije jezik namenjen primarno za racunanje pa nije najprecizniji tokom racunanja

// Aritmeticke operacije koje menjaju vrednost promenljive +=, -=, /=, *=
p+= 3; // p = p + 3; == na vrednost promenljive p dodaj 3
console.log(p);

p-=5; //ekvivalentno p = p - 5; === od vrednosti p oduzmi 5
console.log(p);

// ++   --- povecava vrednost promenjive za 1
p++;
console.log(p);

let r = 50;
console.log(r++) //prvo ispise pa ga poveca za +1
console.log(r); // 51 - povecao je nakon prethodne linije

let k = 50;
console.log(++k); //ovde prvo poveca pa ispise rezultat

// isto vazi i za -- kao i za ++

//OSTACI PRI DELJENJU === imamo bro 7 podelimjo ga sa 3, koliko imamo celih delovi i koliko ostaje pri deljenju (imamo 2 i ostataj 1);
    x = 7;
    y = 3;
    ost = x % y; //racunanje ostatka pri deljenju
    console.log(ost);

// Stepenovanje **n (n je broj za koliko se stepenuje);
    stepen = y**4;
    console.log(stepen);
// Prioritet operacija u JS - 1.prvo racuna sta je u zagradi, 2.zatim racuna stepenovanje ili deljenje po modulu, 3.zatim deljenje, 4.mnozenje, 5.sabiranje, oduzimanje.

// Ne moze se rotirati vrednost tipa 5+p = x, nego mora x = 5+p;

let x1 = "godina";
let y1 = "prestupna";
console.log(x1 + " " + y1);

let rezultat = 28 + "godina";
console.log(rezultat);
// U oba slucaja je krajnji rezultat string, jer string nadjacava tip broja, i gleda na njega kao na string prilikom konkatenacije.
let rezultat1 = '26' + "godina";
console.log(rezultat1);


let rezultat3 = 28 + 1 + "godina"; // prvo sabere 28 + 1 pa tek onda nadoveze rec godina.
console.log(rezultat3);

let rezultat4 = 26 + "godina" + 1;
console.log(rezultat4);

let rezultat5 = '26' + '1' + 'godina';
console.log(rezultat5);


let rezultat6 = 26 / "godina";
console.log(rezultat6); //NaN
