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



// PREDAVANJA == PONEDELJAK 24.05

// Menjanje elemenata iz HTML-a:
console.log(r1.id);
console.log(r1.class); //ne postoji svojstvo
console.log(r1.innerHTML);
r1.innerHTML = "Sadrzaj elementa je text dodat iz JS.";

// Prvi link kome je href u html google.com
let prviLink = document.querySelector("a");
prviLink.href = "http://www.wikipedia.com";

// Dodajemo atribut
prviLink.setAttribute('target', '_blank');

prviLink.setAttribute('href', 'http://wikipedia.org');

prviLink.innerHTML = "Wikipedia"; // INNER HTML ne moze da menja preko setAtribute, ali moze samo sa prviLink.innerHTML

prviLink.style.color ="red";
prviLink.style.backgroundColor = "khaki";
prviLink.style.textDecoration = "none";
prviLink.style.border ="3px solid green";

prviLink.setAttribute('style', 'color: red; background-color: #adff29; text-decoration: none; border: 3px solid green;');

//Postaviti crveni border svim linkovima na stranici
r7.forEach(link => {
    link.style.border = "3px solid red";
});

// Drugi nacin
let linkovi = document.getElementsByTagName("a");

for(let i = 0; i < linkovi.length; i++){
    linkovi[i].style.border = "3px solid green";
}




// Nastavak predavanja
//Dohvatanje roditeljskog cvora
linkovi = document.querySelectorAll("a");

linkovi.forEach(link => {
    console.log(link.parentNode);
    link.parentNode.style.border = "2px solid red";
});


// dohvatanje deteta nekog cvora
let prviDiv = document.querySelector("div.container");
prviDiv.childNodes.forEach(child => {
    console.log(child);
});

let n = prviDiv.childNodes.length;
for(let i = 0; i < n; i++){
    console.log(prviDiv.childNodes[i]);
}

let link1 = prviDiv.childNodes[1];
console.log(link1.previousSibling);
console.log(link1.nextSibling);
console.log(link1.nextSibling.nextSibling);

link1.nextSibling.nextSibling.style.fontSize = "24px";


// === Vezbanja slajd 15-16 ============

// Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

paragrafi.forEach((paragraf, i) => {
    if(i % 2 == 0){
        paragraf.classList.add("error");
    } else {
        paragraf.classList.add("success");
    }
});

// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.

// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
//  if(p.textContent.includes(’success’))

paragrafi.forEach(paragraf => {
    // if(paragraf.includes("error")){
    //     paragraf.
    // }
})

// Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
