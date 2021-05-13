// 12. Odrediti broj parnih elemenata sa neparnim indeksom.
let nizBrojeva = [10, 16, 15, 17, 12, -14];
let brElem = 0;

for(i = 0; i < nizBrojeva.length; i++){
    // indeks - i
    // element - nizBrojeva[i]
    if(nizBrojeva[i] % 2 == 0 && i % 2 != 0) {
        brElem++;
    }
}

console.log(brElem);

// 13. Izračunati sumu elemenata niza sa parnim indeksom.
let sumaEl = 0;

for(let i = 0; i < nizBrojeva.length; i++){
    if(i % 2 == 0){
        sumaEl += nizBrojeva[i];
    }
}
console.log(sumaEl);

// 14. Promeniti znak svakom elementu celobrojnog niza.
for(let i = 0; i < nizBrojeva.length; i++){        
        nizBrojeva[i] *= -1;

        console.log(nizBrojeva[i]);
}


// 15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
for(let i = 0; i < nizBrojeva.length; i++){
    if(nizBrojeva[i] != 0 && i % 2 == 0){
        nizBrojeva[i] *= -1;

        console.log(nizBrojeva[i]);
    }
}

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let kupovina = ["jaja", "brasno", "mleko", "jogurt", "sir"];

kupovina[0] = "sok";

let lista = `<ul>`;

for(let i = 0; i < kupovina.length; i++){ 
    lista += `<li>${kupovina[i]}</li>`;
}
lista += `</ul>`;

kupovina[0] = "hleba"; // ovo nece ispisati jer je vec petlja izlistana i ispisana, ovo je nakon ispisivanja vrednosti dodato

document.body.innerHTML += lista;

// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
let basket = ["partizan", "zvezda", "lejkers", "boston"];
let tabela = `<table>`;

for(let i = 0; i < basket.length; i++){
    tabela += `<tr><td>${basket[i]}</td></tr>`;
}
tabela += `</table>`;

document.body.innerHTML += tabela;

// 17. zadatak sa funkcijama odradjen
basket = ["partizan", "zvezda", "lejkers", "boston"];

let kosarka = basket => {
    let tabela = `<table>`;

for(let i = 0; i < basket.length; i++){
    tabela += `<tr><td>${basket[i]}</td></tr>`;
}
tabela += `</table>`;

document.body.innerHTML += tabela;
}

kosarka(basket);



// 18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let slike = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

for(let i = 0; i < slike.length; i++){
    document.body.innerHTML += `<img src="img/${slike[i]}">`;
}


// 18 zadatak sa funkcijama
let stampanje = slike => {
    for(let i = 0; i < slike.length; i++){
        document.body.innerHTML += `<img src="img/${slike[i]}">`;
    }
}

slike = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

stampanje(slike);


// 
let rec = "abcdef";

for(let i = 0; i < rec.length; i++){
    console.log(rec[i]);
}



// 19. Ispisati dužinu svakog elementa u nizu stringova. 
let reci = ["prva", "druuga", "cetristodvadeset", "otorinolaringologija", "sedamnaesta"];

for(let i = 0; i < reci.length; i++){
    console.log(reci[i].length);
}

// 19 zadatak uradjen preko funkcije
let words = reci => {
    for(let i = 0; i < reci.length; i++){
        console.log(reci[i].length);
    }  
}
reci = ["prva", "druuga", "cetristodvadeset", "otorinolaringologija", "sedamnaesta"];

words(reci);


// 20. Odrediti element u nizu stringova sa najvećom dužinom. //element = ime, // indeks = redni broj // duzina je broj stavki ili tako nesto
let maxCar = reci[0].length;
let ime = reci[0];

for(let i = 0; i < reci.length; i++){
    if(maxCar < reci[i].length){
        maxCar = reci[i].length;
        ime = reci[i];
    }
}
console.log(ime);


// 20-i zadatak uradjen preko funkcije
let maksSlova = reci => {
    let maxCar = reci[0].length;
    let ime = reci[0];
for(let i = 0; i < reci.length; i++){
    if(maxCar < reci[i].length){
        maxCar = reci[i].length;
        ime = reci[i];
    }
}
 return ime;
}

console.log(maksSlova(reci));

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let brEl = 0;
let ukBrKar = 0;

for(let i = 0; i < reci.length; i++){
    ukBrKar += reci[i].length;
}
let prosDuz = ukBrKar / reci.length;

for(let i = 0; i < reci.length; i++){
    if(prosDuz < reci[i].length){
        brEl++;
    }
}

console.log(`Broj elemenata u nizu stringova cija je duzina veca od prosecne duzine svih stringova u nizu iznosi: ${brEl}`);


// 21 zadatak rad JElene na casu
let stringovi = ["ana", "milica", "jelena"];
let sumaDuzina = 0;

for(let i = 0; i < stringovi.length; i++){
    sumaDuzina += stringovi[i].length;
}
let arSrDuzina = sumaDuzina / stringovi.length;
console.log(arSrDuzina);
let brNatprosecnih = 0;

for(let i = 0; i < stringovi.length; i++){
    if(stringovi[i].length > arSrDuzina){
        brNatprosecnih++;
    }
}
console.log(brNatprosecnih);

// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
brEl = 0;

for(let i = 0; i < reci.length; i++){
    if(reci[i].indexOf('a') > -1){
        brEl++;
    }
}
console.log(brEl);


// 22. zadatak == nacin 1 sa casa:
stringovi = ["Milos", "Milan", "Goran", "Aleksandar"];

// rec.includes("a") == vraca true ako sadrzi slovo "a", a ako ne sadrzi vraca false - mogu se ubacivati i reci ne mroa samo jedno slovo

let brAstringova = 0;
for(let i = 0; i < stringovi.length; i++){
    let rec = stringovi[i];
    
    if(rec.includes('a') || rec.includes("A")){
        brAstringova++;
        
    }
}
console.log(brAstringova);

// 22. zadatak == nacin 2 sa casa:
let brAstringova2 = 0;
// Ova for petlja ide element po element u nizu
for(let i = 0; i < stringovi.length; i++){
    let rec = stringovi[i];

    // Ovo for petlja ide slovo po slovo u reci
    // rec od j je karakter u reci (slovo u reci)
    for(let j = 0; j < rec.length; j++){
        if(rec[j] == 'a' || rec[j] == "A"){
            brAstringova2++;
            break; // j = rec.length;
        }

    }
}
console.log(brAstringova2);

// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
