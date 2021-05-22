// Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:
// U konzoli,
// U nekom div elementu na stranici.

// let niz = ["jedan", "dva", "tri", "cetiri"];

// function ispisKonzola(poruka){
//     console.log(poruka);
// }

// function ispisStranica(poruka){
//     document.body.innerHTML += poruka;
// }

// let ispisNiza = (niz, cb) => {
//     let ispis = ""
//     niz.forEach(el => {
//         ispis += el + " ";
//     });
//     cb(ispis);
// }

// ispisNiza(niz, ispisKonzola);
// ispisStranica(niz, ispisStranica);


let konzola = poruka => {
    console.log(poruka);
}

let iner = poruka => {
    document.body.innerHTML += poruka;
}

let konzIliIner = (niz, cb) => {
    let ispis = "";
    niz.forEach(el => {
        ispis += el + " ";
    });
    cb(ispis);
}
// 1. Ispisati sve elemente niza od 5 stringova.
let string = ["pera", "mika", "laza", "stanko", "mira"];

let ispis = niz => {    
    niz.forEach(el => {
        console.log(el)
    });
}
ispis(string);

// 2. Odrediti zbir elemenata celobrojnog niza.
let br = [12, 3, 5, 76, -22, 3, 76];

let zbir = niz => {
    let suma = 0;
    niz.forEach(el =>{
        suma += el;
    });
    return suma;
}
console.log( zbir(br));

// 3. Odrediti proizvod elemenata celobrojnog niza.
let proizvod = niz => {
    let proiz = 1;
    niz.forEach(el => {
        proiz *= el;
    });
    return proiz;
}
console.log(proizvod(br));

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
let srVr = niz => {
    let duzina = niz.length;
    let srednja = zbir(niz) / duzina;
    
    return srednja;
}
console.log(srVr(br));

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let maksVr = niz => {
    let max = niz[0];

    niz.forEach(el => {
        if(max <= el){
            max = el;
        }
    });
    return max;
}
console.log(maksVr(br));


// 6. Odrediti minimalnu vrednost u celobrojnom nizu.
let min = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if(min > el){
            min = el;
        }
    });
    return min;
}
console.log(min(br));

// Odrediti indeks minimalnog elementa celobrojnog niza.
let minInd = niz => {
    let min = niz[0];
    let minInd = 0;

    niz.forEach((el, i)=> {
        if(min >= el){ //ovo je da vraca index zadnjeg minimalnog broja, bez = je da vraca prvi
            min = el;
            minInd = i;
        }
    });
    return minInd;
}
console.log(minInd(br));

// Odrediti indeks maksimalnog elementa celobrojnog niza.
let maksInd = niz => {
    let maks = niz[0];
    let indeks;
    niz.forEach((el, i) =>{
        if(maks < el){ //vraca indeks prvog maksimalnog broja, kada bi stavili i = vracalo bi indeks zadnjeg maksimalnog broja
            maks = el;
            indeks = i;
        }
    });
    return indeks;
}
console.log(maksInd(br));

// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let elVeciOdSrVr = niz => {
    let veciodSrvVr = 0;
    niz.forEach(el => {
        if(el > srVr(niz)){
            veciodSrvVr++;
        }
    });
    return veciodSrvVr;
}
console.log(elVeciOdSrVr(br));

// Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPoz = niz => {
    let sumaP = 0;
    niz.forEach(el => {
        if(el > 0){
            sumaP += el;
        }
    });
    return sumaP;
}
console.log(zbirPoz(br));

// Odrediti broj parnih elemenata u celobrojnom nizu.
let brPar = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el % 2 == 0){
            br++;
        }
    });
    return br;
}
console.log(brPar(br));

//12. Odrediti broj parnih elemenata sa neparnim indeksom.
let pElNepInd = niz => {
    let brEL = 0;
    niz.forEach((el, i )=> {
        if(el % 2 == 0 && i % 2 != 0){
            brEL++;
        }
    });
    return brEL;
}
console.log(pElNepInd(br));

//13. Izračunati sumu elemenata niza sa parnim indeksom.
let sumaParnihInd = niz => {
    let suma = 0;
    niz.forEach((el, i) => {
        if(i % 2 == 0){
            suma += el;
        }
    });
    return suma;
}
console.log(sumaParnihInd(br));

//14. Promeniti znak svakom elementu celobrojnog niza.
let promenaZnaka = niz => {
    // sa forEach petljom
    // niz.forEach(el => {
    //     el *=-1;
    //     console.log(el);
    // });

    // sa forPetljom
    for(let i = 0; i < niz.length; i++){
        niz[i] *= -1;
        console.log(niz[i]);
    }
}
promenaZnaka(br);



//15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
let nepEsaPind = niz => {
    niz.forEach((el, i) => {
        if(el % 2 != 0 && i % 2 == 0){
            el *= -1;
            console.log(el);
        }
    });
}
nepEsaPind(br);

//16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let namirnice = ["jaja", "jogurt", "mleko", "sir"];

let kupovina = niz => {
    let lista = `<ul>`;
        niz.forEach(el => {
            lista += `<li>${el}</li>`;
        });
        lista += `</ul>`;
        document.body.innerHTML += lista;
};
kupovina(namirnice);

//17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
let kosarka = ["pera", "jova", "mira", "laza", "bimbo"];

let tabelarno = niz => {
 let tabela = `<table>`;
 niz.forEach(el => {
    tabela += `<tr><td>${el}</td></tr>`;
 });
 tabela += `</table>`;
 document.body.innerHTML += tabela;
}

tabelarno(kosarka);


//18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let slike = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

let prikazSlika = niz => {
    niz.forEach(slika => {
        document.body.innerHTML += `<img src="img/${slika}" width=200px;>`
    });
}
prikazSlika(slike);

// Ispisati dužinu svakog elementa u nizu stringova. 
let duzina1 = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}
duzina1(namirnice);

// Odrediti element u nizu stringova sa najvećom dužinom.
let maxL = niz => {
    let max = niz[0].length;
    niz.forEach(el => {
        if(max < el.length){
            max = el.length;
        }
    });
    return max;
}
console.log(maxL(namirnice));
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let brElVodPrDuz = niz => {
    let zbirDuz = 0;
    niz.forEach(el => {
        zbirDuz += el.length;
    })
    let srVrD = zbirDuz / namirnice.length;

    let brNatprosecnih = 0;
    niz.forEach(el => {
        if(el.length > srVrD){
            brNatprosecnih++;
        }
    });
    return brNatprosecnih;
}
console.log(brElVodPrDuz(namirnice));

// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
let sadrzeA = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el.includes("a")){
            br++;
        }
    });
    return br;
}
console.log(sadrzeA(namirnice));

// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 

let sadrzeAa = niz => {
    let br = 0;
    niz.forEach(el => {
        for(let i = 0; i < el.length; i++){
            if( el[0] == 'a' || el[0] == 'A'){
                br++;
                break;
            }
        }
    });
    return br;
}
console.log(sadrzeAa(namirnice));