// CALLBACK FUNKCIJE

// primer sa slajda br 4:
function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisStranice(poruka){
    let div = document.getElementById("container");
    div.innerHTML += poruka + `<br>`;
    // ako se dodaje starom sadrzaju diva pise se ovako. A ako zelimo da izbrisemo stari sadrzaj diva onda ide umesto += samo =
}

function ispisNiza(niz, cb) { //cb je skracenica za callBack, ali moze da se zove i perica, ne mora tako
    let poruka = "";

    for( let i = 0; i < niz.length; i++){
        poruka += niz[i] + " ";
    }
    cb(poruka); //poziv callback funkcije
}


let a = [5, -9, 11, 9, 4];
let b = ["Vuk", "Nikola", "Jelena", "Anita", "Jelena"];

ispisNiza(a, ispisKonzola);
ispisNiza(a, ispisStranice);

ispisNiza(b, ispisKonzola);
ispisNiza(b, ispisStranice);


// drugi nacin
// pozivi funkcije preko anonimnih callback funkcija

ispisNiza(a, par => { //arrow anonimna funkcija
    console.log(par); 
});

ispisNiza(a, function(par) { //obicna anonimna
    let div = document.getElementById("container");
    div.innerHTML += par + '<br>';
});



// FOR EACH PETLJA 
// forEach // ovaj nacin preko anonimnih funkcija se === cesce === koristi

a.forEach(e => {
    console.log(`Element niza je: ${e}`);
});

b.forEach(m => {
    console.log(`Element niza je: ${m}`);
});



// drugi nacin zapisivanja // === retko === se koristi tako da se prvo zapise funkcija pa da se tek onda poziva
function ispis(poruka){
    console.log(`Element niza je: ${poruka}`);
}

a.forEach(ispis);
// forEach petlja poziva callback funkciju za svaki lement niza, a prosledjuje taj element kao parametar callback funkciji

// npr za niz a = [5, -9, 11, 9, 4]
// a.forEach poziva;
// ispis(5);
// ispis(-9);
// ispis(11);
// ispis(9);
// ispis(4);

// INDEX elementa pomocu forEach petlje
b.forEach((e, i) => {
    console.log(`Element ${e} sa indeksonm ${i}`);
});

// ispis elemenata niza sa parnim indexom
b.forEach((e, i) => {
    if(i % 2 == 0){
        console.log(`Element: ${e}, ima paran index`);
    }
});


// Zadaci sa if prezentacije (od pre neki dan)
// 1. Ispisati sve elemente niza od 5 stringova.
let niz = ["pera", "mika", "laza", "zika", "melanija"];

niz.forEach( ispis => {
    console.log(ispis);
});

// 2. Odrediti zbir elemenata celobrojnog niza.
let br = [67, 98, 13, 2, 11];
let zbir = 0;

br.forEach( e => {
    zbir += e;
});
console.log(zbir);

// 2 zadatak pomocu funkcije itd
let zbirNiza = niz => {
    let zbir = 0;
    niz.forEach(elem => {
        zbir += elem;
    });
    return zbir;
}
console.log(zbirNiza(br));



// 3. Odrediti proizvod elemenata celobrojnog niza.
let proizvod = 1;

br.forEach(e => {
    proizvod *= e;
});
console.log(proizvod);

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
let brEl = br.length;

let srVr = zbir / brEl;
console.log(srVr);


// 4. pomocu funkcije
let srVrNiza = niz => {
    let srVr = 0;
    niz.forEach(elem => {
        srVr += elem;
    });
    srVr = srVr / niz.length; // moze i srVr /= srVr;   
    return srVr;
}

console.log(srVrNiza(br));


// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxVr = br[0];

br.forEach(e => {
    if(maxVr < e){
        maxVr = e;
    }
});
console.log(`Maximalna vrednost celobrojnog niza je ${maxVr}`);


// 5. pomocu funkcije
let maxNiz = niz => {
    let maxVr = niz[0];
    niz.forEach(elem => {
        if(elem > maxVr){
            maxVr = elem;
        }
    });
    return maxVr;
}

console.log(maxNiz(br));


// 6. Odrediti minimalnu vrednost u celobrojnom nizu.
let minVr = br[0];

br.forEach(e => {
    if(minVr > e){
        minVr = e;
    }
});
console.log(`Minimalna vrednost celobrojnog niza je ${minVr}`);


// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.
let indexMaks = 0;
maxVr = 0;
br.forEach((e, i) => {
    if(maxVr < e){
        maxVr = e;
        indexMaks = i;
    }
});
console.log(indexMaks);

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.
let indeksMin = niz => {
    let minInd = 0;
    let min = niz[0];

    niz.forEach((e, i) => {
        if(min > e){
            min = e;
            minInd = i;
        }
    });
    return minInd;
}
console.log(indeksMin(br));


/* 
Napisati funkciju koja vraca broj elemenata sa:
1. maksimalnom vrednoscu //---- nadovezuje se na 5 zadatak =======
2. minimalnom vrednoscu
*/

let c = [15, 7, 8, 15, 15, 0, 9, 15, 0, 2];

let brojMaxNiz = niz => {
    let max = maxNiz(niz);
    let broj = 0;
    niz.forEach(elem => {
        if(elem == max){
            broj++;
        }
    });
    return broj++;
}


let brojMinNiz = niz => {
    let min = minNiz(niz);
    let broj = 0;
    niz.forEach(elem => {
        if(elem == min){
            broj++;
        }
    });
    return broj;
}

console.log(brojMaxNiz(c));


// Umesto svega gore napisanog ide:
let brojSvojstvoNiz = (niz, svojstvo) => { //svojstvo je callback funkcija
    let s = svojstvo(niz);
    let broj = 0;
    niz.forEach(elem => {
        if(elem == s){
            broj++;
        }
    });
    return broj;
}

console.log(`Broj elemenata sa maksimalnom vrednoscu jednak je: ` + brojSvojstvoNiz(c, maxNiz));

// console.log(`Broj elemenata sa minimalnom vrednoscu jednak je: ` + brojSvojstvoNiz(c, minNiz)); //odraditi ovo

