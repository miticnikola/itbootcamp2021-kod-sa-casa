// Odrediti zbir elemenata celobrojnog niza.
let niz = [1, -3, 5, 12, -78, -22];

let suma = 0;

for(let i = 0; i < niz.length; i++){
    suma += niz[i];
};

console.log(suma);

//  Promeniti znak svakom elementu celobrojnog niza.
for(let i = 0; i < niz.length; i++){
    niz[i] *= -1;
}
console.log(niz);



// Odrediti vrednost maksimalnog elementa celobrojnog niza.
let max = niz[0];

for(let i = 0; i < niz.length; i++){
    if(max < niz[i]){
        max = niz[i];
    }
}
console.log(max);

// Odrediti indeks maksimalnog elementa celobrojnog niza.
let index = 0; 

for(let i = 0; i < niz.length; i++){
    if(max == niz[i]){
        index = i;
    }
}
console.log(index);


// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let br = [2, 3, 7, 12, 35, 11, 19];
suma = 0;
let veceOdSrVr = 0;


for(let i = 0; i < br.length; i++){
    suma += br[i];
}

let srVr = suma / br.length; 
console.log(srVr);

for(let i = 0; i < br.length; i++){
    if(srVr < br[i]){
        veceOdSrVr += 1;
    }
}
console.log(veceOdSrVr);



//  Odrediti broj parnih elemenata sa neparnim indeksom.
let brParEl = 0;

for(let i = 0; i < br.length; i++){
    if(br[i] % 2 == 0 && i % 2 != 0){
        brParEl += 1;
    }
}

console.log(brParEl);


//  Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

for(let i = 0; i < br.length; i++){
    if(br[i] % 2 != 0 && i % 2 == 0){
        br[i] *= -1;
    }
}
console.log(br);


// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let hrana = ['jaja', 'brasno', 'so', 'secer'];

let ul = `<ul>`

for(let i = 0; i < hrana.length; i++){
    ul += `<li>${hrana[i]}</li>`;
}

ul += `</ul>`;

document.body.innerHTML += ul;


// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
let timovi = ['zvezda', 'partizan', 'boston', 'lejkers', 'NBA'];
let tabela = `<table>`;

for(let i = 0; i < timovi.length; i++){
    tabela += `<tr><td>${timovi[i]}</td></tr>`;
}
tabela += `</table>`;

document.body.innerHTML += tabela;

// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let img = ['img/0.jpg', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'ananas.jpg'];

for(let i = 0; i < img.length; i++){
    document.body.innerHTML += `<img src="${img[i]}" style="width: 20%;">`;
}
