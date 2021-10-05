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



// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

//  Odrediti broj parnih elemenata sa neparnim indeksom.

// Promeniti znak svakom elementu celobrojnog niza.
//  Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
