//Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
for (let i = 0; i < 3; i++) {
    document.body.innerHTML += `<img width="33.3%" src="img/${i}.jpg">`;
}

// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
let proiz = 1;
for (let i = 20; i <= 100; i++) {
    if (i % 11 == 0) {
        proiz *= i;
    }
}
console.log(proiz);

// Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let brdelj = 0;

for (let i = 5; i <= 150; i++) {
    if (i % 13 == 0) {
        brdelj += 1;
    }
}
console.log(brdelj);

// Ispisati aritmetičku sredinu brojeva od n do m.
let n = 12;
let m = 20;

let suma = 0;
let br = 0;


for (let i = n; i < m; i++) {
    suma += i;
    br += 1;
}
let artSr = suma / br;

console.log(artSr);


// Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *
n = -5;
m = 7;

let neg = 0;
let poz = 0;

for (let i = n; i <= m; i++) {
    if (i < 0) {
        neg += 1;
    } else {
        poz += 1;
    }
}
console.log(neg, poz);


// Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
br = 0;
for (let i = 5; i <= 50; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        br += 1;
    }
}
console.log(br);


// Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.
n = 11;
m = 35;

br = 0;
suma = 0;

for (let i = n; i <= 35; i++) {
    if (i % 10 == 4 && i % 2 == 0) {
        br += 1;
        suma += i;
    }
}

console.log(br, suma);


// Napraviti tabelu sa 6 redova. 
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

n = 6;
let table = `<table>`;

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        table += `
        <tr class="obojen">
        <td>Tekst</td>
        <td>Tekst</td>
        </tr>
        `;
    } else {
        table += `
        <tr>
        <td>Tekst</td>
        <td>Tekst</td>
        </tr>
        `;
    }
}

table += `</table>`;

document.body.innerHTML += table;

// Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
let ul = `<ul>`;

for (let i = 1; i <= 10; i++) {

    if (i % 3 == 0) {
        ul += `
            <ul>
                <li class="obojen">
                    Element ${i}
                </li>
            </ul>`
            ;
            // Ugnjezdava se lista kao stavka, a ne lista unutar stavke
    } else {
        ul += `<li>Element ${i}</li>`;
    }
}

ul += `</ul>`;

document.body.innerHTML += ul;


// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.

for(let i = 1; i <= 64; i++){
    document.body.innerHTML += `<span>${i}</span>`;
    if(i % 8 == 0){
        document.body.innerHTML += `<br><br>`;
    }
}

// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. U realizaciji ovog zadatka koristiti for petlju.

for(let i = 1; i <= 64; i++){  
    if(i > 0 && i < 9 || i > 16 && i < 25 || i > 32 && i < 41 || i > 48 && i < 57) {
        if(i % 2 == 0){
            document.body.innerHTML += `<span class="border polje">${i}</span>`;
        } else {
            document.body.innerHTML += `<span class="border">${i}</span>`;
        }
    } else {
        if(i % 2 != 0){
            document.body.innerHTML += `<span class="border polje">${i}</span>`; 
        } else {
            document.body.innerHTML += `<span class="border">${i}</span>`;
        }
    }

    if(i % 8 == 0){
        document.body.innerHTML += `<br><br>`;
    }
}
