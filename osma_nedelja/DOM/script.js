console.log(document);
console.log(typeof document); // da vidimo kog tipa je document.

console.log(document.URL); // vrednost mu je string
console.log(document.body); // vrednost mu je objekat iz dom stabla
console.log(document.documentElement);


console.log(document.anchors) //vraca a tagov ekoji imaju postavljen name atribut //zastarelo, izbaceno iz upotrebe //vraca HTML Collection
console.log(document.links) // vraca sve a tagov ekoji imaju postavljen href atribut; // Vraca HTML Collection


// Selektovanje elemenata:
let r1 = document.getElementById('div1');
console.log(r1);

let r2 = document.getElementsByClassName('container');
console.log(r2); // HTMLCollection svih objekata koji imaju navedenu klasu

let r3 = document.getElementsByTagName("div");
console.log(r3); //vraca HTML collectio svih objekata koji imaju navedeni tag name

let r4 = document.getElementsByName('link');
console.log(r4); //NodeList svih objekata koji imaju navedeni name atribut

//Prolazak kroz elemente HTML collection moze da se vrsi for Petljom:
for(let i = 0; i < r2.length; i++){
    console.log(r2[i]);
}

// Konvertovanje HTML kolekcije u  Array, pa se onda za array koristi forEach petlja
let r2array = Array.from(r2);

r2array.forEach(obj => {
    console.log(obj);
});

// Elementima Node list-e moze da se pristupi i preko forEach petlje i preko for petlje

// forEach
r4.forEach(obj => {
    console.log(obj);
});

// For
for(let i = 0; i < r4.length; i++){
    console.log(r4[i]);
}

// Query selektori, mogu i forEach i for petlja za njih
let r5 = document.querySelector('.container'); //vraca prvi element sa tom klasom
console.log(r5);

let r6 = document.querySelectorAll('.container');
console.log(r6);
r6.forEach(element => {
    console.log(element);
});

let r7 = document.querySelectorAll('a');
console.log(r7);

// document.getElementByName("link")
let r8 = document.querySelectorAll("[name='link']");
console.log(r8);

//document.getElementById('div1');
let r9 = document.querySelector("#div1"); //vraca uvek objekat
console.log(r9);

//document.getElementById('div1');
let r10 = document.querySelectorAll("#div1"); //uvek vraca node listu cak i kad ta lista ima jedan element
console.log(r10);




// ======= VEZBANJA =====
// 1. Dohvatiti prvi paragraf na stranici.
let prviParagraf = document.querySelector('p');
let prviParagraf1 = document.querySelector('p:first-of-type');
console.log(prviParagraf);

// 2. Dohvatiti prvi div tag sa klasom „error“.
let prviErrorDiv = document.querySelector('div.error');
console.log(prviErrorDiv);

// 3. Dohvatiti poslednji red u tabeli.
let poslednjiRed = document.querySelector('table tr:last-child'); // moze i last of type
console.log(poslednjiRed);

// 4. Dohvatiti sve linkove na stranici.
let sviLinkovi = document.querySelectorAll('a');
let sviLinkovi1 = Array.from(sviLinkovi);
console.log(sviLinkovi1);

let sviLinkovi2 = document.querySelectorAll('[href]');
console.log(sviLinkovi2);

// 5. Dohvatiti sve slike na stranici.
let sveSlike = document.querySelectorAll('img');
let sveSlike1 = Array.from(sveSlike);
console.log(sveSlike1);

let sveSlike3 = document.querySelectorAll('[src]'); // nije najpametnije za slike da se korsiti jer src moze da imaju i drugi tagovi
console.log(sveSlike3);


// Sve elemente ispisati u konzoli.
