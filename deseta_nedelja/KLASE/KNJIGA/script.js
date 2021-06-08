import {Knjiga} from "./knjiga.js";

let knjiga1 = new Knjiga("Bajke", "Hans Hristijan Andersen", 2004, 704, 500);

console.log(knjiga1);
knjiga1.stampa();

console.log("Da li je knjiga obimna:" + knjiga1.obimna());
console.log("Da li je knjiga skupa:" + knjiga1.skupa());
console.log("Da li je ime dugacko:" + knjiga1.dugackoIme());
console.log(`Ime autora je ${knjiga1.autor}; Da li je ime dugacko: ${knjiga1.dugackoIme()}`);

let knjiga2 = new Knjiga("Hajdi", "Johana Spiri", 1994, 304, 600);
let knjiga3 = new Knjiga("Orlovi Rano lete", "Branko Copic", 2020, 186, 400);

let knjige = [knjiga1, knjiga2, knjiga3];
console.log(knjige);


// Prvi nacin - ispis svih podataka iz niza knjige
knjige.forEach(knjiga => {
    let h3 = document.createElement('h3');
    h3.textContent = knjiga.stampa();
    
    document.body.appendChild(h3);
    // knjiga.stampa();
});

// Drugi nacin - ispis svih podataka iz niza knjige
for(let i = 0; i < knjige.length; i++){
    console.log(knjige[i].stampa());
}


// Napraviti funkicju kojoj se prosleđuje niz knjiga a ona određuje:
//  ukupnaCena - Koliko ukupno koštaju sve knjge u nizu knjiga
//  prosecnaCena - Kolika je prosečna cena knjige
//  prosecnaStranica - Kolika je prosečna cena stranice knjige

let ukupnaCena = niz => {
    let ukupnaCena = 0;

    niz.forEach(knjiga => {
        ukupnaCena += knjiga.cena;
    });
    return ukupnaCena;
}

console.log(`Ukupna cena knjiga iz nisa je ` + ukupnaCena(knjige) + `din`);

let prosecnaCena = niz => {
    return ukupnaCena(niz) / niz.length;;
}

console.log(`Prosecna cena knjiga iz niza je ` + prosecnaCena(knjige) + `din`);

let prosecnaStranica = niz => {
    let ukStranice = 0;

    niz.forEach(knjiga => {
        ukStranice += knjiga.brojStrana;
    });

    return ukupnaCena(niz) / ukStranice;
};

console.log(`Prosecan cena stranice knjiga iz niza je: ` + prosecnaStranica(knjige) + `din`);