// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = niz => {
    let lista = `<ul>`;

    niz.forEach(e => {
        lista += `<li>${e}</li>`;
    });
    lista += `</ul>`;

    document.body.innerHTML += lista; 

}

let namirnice = ["jaja", "brasno", "mleko", "kisela voda"];

kupovina(namirnice);


// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
let timovi = ["lejkers", "boston", "partizan", "zvezda"];

let tim = niz => {
    let tabela = `<table>`;

    niz.forEach(e => {
        tabela += `<tr><td>${e}</td></tr>`;
    });

    tabela += `</table>`;
    
    document.body.innerHTML += tabela;
    
}
tim(timovi);


// 18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let slike = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

let sl = niz => {
    niz.forEach(e => {
        document.body.innerHTML += `<img src="img/${e}" width="250px">`;
    });
}

sl(slike);

// 19. Ispisati dužinu svakog elementa u nizu stringova. 
let string = ["perica", "dragica", "milica","melanija", "rajko", "radojka"];

let duzStr = niz => {
    niz.forEach(e => {
       console.log(e.length);
    });
}
duzStr(string);

// 20. Odrediti element u nizu stringova sa najvećom dužinom.
let duzina = niz => {

    let maxDuz = niz[0].length;
    niz.forEach(e => {
        if(e.length > maxDuz){
            maxDuz = e.length;
        }
    });
    console.log(maxDuz);
}
duzina(string);

// Odredidti elementa sa maximalnom duzinom niza, i sa minimalnom duzinom

// max duzina
let maxDuzinaNiza = niz => {
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if(elem.length > maxDuzina){
            maxDuzina = elem.length;
        }
    });
    return maxDuzina;
}

// ISPIS FUNKCIJA I ZA MIN I ZA MAX DUZINU NIZA
let ispisStringMaxIminDuzina = (niz, minIliMaxDuzinaNiza) => { //drugi parametar je callBack funkcija 
    let md = minIliMaxDuzinaNiza(niz);
    niz.forEach(elem => {
        if(elem.length == md){
            console.log(elem);
        }
    });
}


// min duzina
let minDuzinaNiza = niz => {
    let minDuzina = niz[0].length;
    niz.forEach(elem => {
        if(elem.length < minDuzina) {
            minDuzina = elem.length;
        }
    });
    return minDuzina;
}

ispisStringMaxIminDuzina(string, maxDuzinaNiza); //maxDuzinaNiza je callBack funkcija
ispisStringMaxIminDuzina(string, minDuzinaNiza); //minDuzinaNiza je callBack funkcija

// let ispisStringMinDuzina = niz => {
//     let md = minDuzinaNiza(niz);
//     niz.forEach(elem => {
//         if(elem.length == md){
//             console.log(elem);
//         }
//     });
// }


// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 


// 24.

// nacin a
let zad24a = (a, b) => {
    let n = a.length; // let n = b.length;
    let c = [];
    for(let i = 0; i < n; i++){
        c.push(a[i]);
        c.push(b[i]);
    }
    return c;
}

// nacin b
let zad24b = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++){
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}

// nacin c
let zad24c = (a, b) => {
    let n = a.length;
    let c = [];
    let j = 0;
    for(let i = 0; i < n; i++){
        c[j++] = a[i];
        // j++;
        c[j++] = b[i];
        // j++;
    }
    return c;
}

// Ovaj nacin ne valja == vraca rezultat kao string
/*
let zad24d = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++){
        c += a[i];
        c += b[i];
    }
    return c;
}
c = zad24d(a, b);
console.log(c);
*/

let a = [4, -9, 4, 1];
let b = [8, 8, 1, 0];

// 24a
let c = zad24a(a, b);
console.log(c);

// 24b
c = zad24b(a, b);
console.log(c);

// 24c
c = zad24c(a, b);
console.log(c);


// 25.
let zad25 = (a, b) => {
    let n = a.length;
    let c = [];

    for(let i = 0; i < n; i++){
        c[i] = a[i] * b[i];
    }
    return c;
}
// pozovi funkciju


// 26.
let zad26 = a => {
    let n = a.length;
    let b = [];

    for(let i = 0; i < n/2; i++){
        b[i] = (a[i] + a[n - 1 - i]) / 2;
    }
}
//pozovi funkciju 


