let voce = ["jagoda", "jabuka", "malina", "kupina", "ananas"];
console.log(voce);

// Pristupanje elementu niza da bi smo mu pristupili
console.log(voce[2]);

// Pristupanje elementu da bismo ga izmenili
voce[2] = "tresnja";
console.log(voce);

// Ispisivanje svih elemenata niza, radi se prolazenjem kroz taj nis
// ISPIS ELEMENATA NIZA
console.log(voce[0], voce[1], voce[2]);

// Ispis elemenata niza koriscenjem petlje
for(let i = 0; i < voce.length; i++){
    console.log(voce[i]);
}
// mora da bude strogo manje od i, jer kad bi islo <= to bi prikazivalo i indeks koji nemamo


// voce[3] = "ananas";
// console.log(voce);

// kada je let varijabla moze da se ta varijabla menja
voce = ["kajsija", "dunja", "visnja"];
console.log(voce);
voce = 10;
console.log(voce);

// Nizovi sa const
const povrce = ["tikvica", "boranija", "krompir"];
console.log(povrce);

povrce[0] = "tikva";
console.log(povrce);

// povrce = ["grasak", "pasulj"]; == kontantnoj varijabli ne moze da se dodeljuje ponovna vrednost


// Niz elemenata razlicitih tipova
let razno = [3, -15.5, false, "bla bla bla", ["a", "b", "c"]];

console.log(razno);

// Zadaci
// 1. Ispisati sve elemente niza od 5 stringova.

// 2. Odrediti zbir elemenata celobrojnog niza. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! JAKO BITNO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let brojevi = [150, 140, 360, 120, 180];
let suma = 0;
for(let i = 0; i < brojevi.length; i++){
    suma += brojevi[i];
}
console.log(suma);

// 3. Odrediti proizvod elemenata celobrojnog niza.
brojevi = [12, 14, 29, 4, 7];
let proizvod = 1;

for(i = 0; i < brojevi.length; i++){
    proizvod *= brojevi[i];
}
console.log(proizvod);

// Isti zadatak preko funkcija:

let proiz = (brojevi) => {  
    let proizvod = 1;
    brojevi = [12, 14, 29, 4, 7];
    
    for(i = 0; i < brojevi.length; i++){
        proizvod *= brojevi[i];
    }
    return proizvod;
}

console.log(proiz());


// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
brojevi = [12, 14, 29, 4, 7];
let brBr = 0;
suma = 0;

for(i = 0; i < brojevi.length; i++){
    brBr += 1;
    suma += brojevi[i];
}
console.log(`Srednja vrednost iznosi ${suma / brBr}`);

let arSr = suma / brojevi.length;
console.log(`Srednja vrednost niza je: ${arSr}`);


// Funkcija
let aritmeticka = niz => {
    let s = 0;
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        s += niz[i];
        br++;
    }
    return s / br;
}

console.log(aritmeticka([2, 3, 4, 5]));
console.log(aritmeticka([-4, 10, 3]));
console.log(aritmeticka(brojevi));



// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
brojevi = [150, 140, 360, 120, 180, 360, 140, 360];

let maksVr = brojevi[0];
for(let i = 0; i < brojevi.length; i++){
    if(maksVr < brojevi[i]){
        maksVr = brojevi[i];
    }
}
console.log(maksVr);


let br1 = 5;
let br2 = 15;
let br3 = 7;

let maks = br1;

if(maks < br2){
    maks = br2;
} 

if(maks < br3) {
    maks = br3;
}


// 8. Odrediti indeks maksimalnog elementa celobrojnog niza.
// 1. nacin
let index = 0;
for(let i = 0; i < brojevi.length; i++){
    if(maksVr == brojevi[i]){
        index = i;
        console.log(index); // bez break ispisuje poslednji indeks maksimalnog elementa
        // break; // sa break ispisuje prvi indeks maksimalnog elementa
    }
}
console.log(index);

// 2. nacin
let maksVrednost = brojevi[0]; // ako su negativni elementi onda ne sme da se pise da je jednako 0, jer ce nula uvek biti najveca
let maksIndeks = 0;
for(let i = 0; i < brojevi.length; i++){
    if(brojevi[i] >= maksVrednost){ //sa znakom jednako vraca nam zadnju najvecu vrednost indeksa istog broja, bez znaka = vraca nam prvu najvecu vrednost indexa istog broja
        maksVrednost = brojevi[i];
        maksIndeks = i;
    }
}
console.log(maksIndeks);

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.
brojevi = [56, 21, 43, 11, 2, 108, 1234];

let minVr = brojevi[0];
for(let i = 0; i < brojevi.length; i++){
    if(minVr > brojevi[i]){
        minVr = brojevi[i];
    }
}
console.log(minVr);

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.
index = 0;
minVr = brojevi[0];

for(i = 0; i < brojevi.length; i++){
    if(brojevi[i] < minVr){
        minVr = brojevi[i];
        index = i;
    }
}
console.log(index);


// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
brojevi = [56, 21, 43, 11, 2, 108, 1234];
suma = 0;
let brEl = 0;

for(i = 0; i < brojevi.length; i++){    
    suma += brojevi[i];
    srVr = suma / brojevi.length;
}
for(i = 0; i < brojevi.length; i++){    
    if(brojevi[i] > srVr){
        brEl++;
    }
}

console.log(brEl);

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
let el = [-1, -6, -8, 2, 10, 18];
let zbir = 0;

for(i = 0; i < el.length; i++){
    if(el[i] > 0){
        zbir += el[i];
    }
}
console.log(zbir);


// 11. Odrediti broj parnih elemenata u celobrojnom nizu.
let brParnih = 0;

for(i = 0; i < brojevi.length; i++){
    if(brojevi[i] % 2 == 0){
        brParnih += 1;
    }
}
console.log(brParnih);

