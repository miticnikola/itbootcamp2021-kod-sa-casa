let i;
// Ispisati brojeve od 1 do 20 
for(i = 1; i <= 20; i++){
    console.log(i);
}
// Ispisati brojeve od 20 do 1 
for(i = 20; i >= 1; i--){
    console.log(i);
}

// Ispisati parne brojeve od 1 do 20 
for(i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Ispisati dvostruku vrednost brojeva od 5 do 15
let n = 5;
let m = 15;
for(i = n; i <= m; i++){
    console.log(i*2);
}

// Odrediti sumu brojeva od 1 do n
n = 25;
let suma = 0;

for(i = 1; i <= n; i++){
    suma += i;
}
console.log(suma);

// Odrediti sumu brojeva od n do m 
n = 5;
m = 25;
suma = 0;

for(i = n; i <= m; i++){
    suma += i;
}
console.log(suma);

// Odrediti proizvod brojeva od n do m
n = 6;
m = 10;
let proizvod = 1;

for(i = n; i <= m; i++){
    proizvod *= i;
}
console.log(proizvod);


// Odrediti sumu kvadrata brojeva od n do m *
n = 6;
m = 10;
suma = 0;

for(i = n; i <= m; i++){
    suma += i**2;
}
console.log(suma);


/*Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).*/
n = 7;

for(i = 1; i <= n; i++){
    let ost = i % 3;
    document.body.innerHTML += `<img src="img/${ost}.jpg" width="200px">`;
}

// prikaz 4 slika:
document.body.innerHTML += `<br><br>`;

n = 12;
for(i = 1; i <= n; i++){
    let ost = i % 4;
    document.body.innerHTML += `<img src="img/${ost}.jpg" width="200px">`;
}


// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
n = 20;
m = 100;
proizvod = 1;

for(i = n; i <= m; i++){
    if(i % 11 == 0){
        proizvod *= i;
    }
}
console.log(proizvod);


// Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
n = 5;
m = 150;
let brDelj = 0;

for(i = n; i <= m; i++){
    if(i % 13 == 0){
        brDelj += 1;
    }
}
console.log(brDelj);

// Ispisati aritmetičku sredinu brojeva od n do m.
n = 5;
m = 10;
suma = 0;
let brojac = 0;

for(i = n; i <= m; i++){
    suma += i;
    brojac += 1;
}
console.log(suma, brojac);
let artSr = suma / brojac;
console.log(`Aritmeticka sredina iznos ${artSr}`);


// Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *
n = -12;
m = 15;

let brNeg = 0;
let brPoz = 0;

for(i = n; i <= m; i++){
    if(i < 0){
        brNeg += 1;        
    } else if(i > 0){
        brPoz += 1;
    }
}
console.log(`Broj negativnih: ${brNeg}, broj pozitivnih: ${brPoz}`);


// Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
n = 5;
m = 50;
brojac = 0;

for(i = n; i <= m; i++){
    if(i % 3 == 0 || i % 5 == 0){
        brojac += 1;
    }
}
console.log(brojac);

// Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.
n = 2;
m = 35;

brojac = 0;
suma = 0;

for(i = n; i <= m; i++){
    if(i % 10 == 4){
        brojac += 1;
        suma += i;
    }
}
console.log(`Brojeva kojima je zadnja cifra 4 ima ${brojac}, i njihova suma je ${suma}.`);

// Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 5;
m = 19;
let a = 3;
suma = 0;

for(i = n; i <= m; i++){
    if(i % a != 0){
        suma += i;
    }
}
console.log(suma);

// Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
n = 5;
m = 19;
a = 3;
proizvod = 1;

for(i = n; i <= m; i++){
    if(i % 3 == 0){
        proizvod *= i;
    }
}
console.log(proizvod);

/* Napraviti tabelu sa 6 redova.
Svaki red tabele treba da ima po dve ćelije (dve kolone).
Svakom parnom redu dodati klasu „obojen“.
Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. */

let row = 6;
let tabela = document.getElementById("tabela");

for(i = 1; i <= row; i++){
    if(i % 2 == 0){
        tabela.innerHTML += 
        `
            <tr class="obojeno">
                <td>Tekst</td>
                <td>Tekst</td>    
            </tr>
        `;
    } else {
        tabela.innerHTML +=
        `
        <tr>
            <td>Tekst</td>
            <td>Tekst</td>    
        </tr>
    `;
    }
}



// Zadatak isti kao prethodni samo slucaj kada bi imali 9 reda i redove sa 3 razlicite naizmenicne boje
row = 9;
tabela = document.getElementById("tabela1");

for(i = 1; i <= row; i++){
    if(i % 3 == 1){
        tabela.innerHTML += 
            `
                <tr class="obojeno">
                    <td>Text</td>
                    <td>Text</td>
                </tr>
            `;
    } else if(i % 3 == 2){
        tabela.innerHTML += 
        `
            <tr class="obojeno1">
                <td>Text</td>
                <td>Text</td>
            </tr>
        `;
    } else {
        tabela.innerHTML += 
            `
                <tr>
                    <td>Text</td>
                    <td>Text</td>
                </tr>
            `;
    }
}


// Drugi nacin zadatka
row = 6;
tabela = `<table>`;

for(i = 1; i <= row; i++){
    if(i % 2 == 0){
        tabela += `<tr class="obojeno">`;
    } else {
        tabela += `<tr>`;
    }
    tabela += 
        `
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `
    }
    tabela += `</tabela>`
    document.body.innerHTML += tabela;


// Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
let el = 10;
let ul = `<ul>`;

for(i = 1; i <= el; i++){
    if(i % 3 == 0){
        ul += 
        `
        <ul>
        <li class="obojeno1">Element ${i}</li>
        </ul>
        `;
    } else {
        ul += `<li>Element ${i}</li>`;
    }
}

ul += `</ul>`;
document.body.innerHTML += ul;


// drugi nacin // prvi je prakticniji
el = 10;
ul = `<ul>`;

for(i = 1; i <= el; i++){
    ul += `<li>Element ${i}</li>`;
    if(i % 3 == 2){
        i++;
        ul += 
            `
                <ul>
                    <li class="obojeno">Element ${i}</li>
                </ul>
            `;
    }
}
ul += `</ul>`;
document.body.innerHTML += ul;

// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.

let span = 64;

for(i = 1; i <= span; i++){
    document.body.innerHTML += `<span>${i}</span>`;

    if(i % 8 == 0){
        document.body.innerHTML += `<br><br>`; 
    }
}

// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. U realizaciji ovog zadatka koristiti for petlju.

span = 64;

for(i = 1; i <= span; i++){
    
    if(i % 2 == 0 && i <= 8 || i % 2 == 0 && i >= 17 && i <= 24 || i % 2 == 0 && i >= 33 && i <= 40 || i % 2 == 0 && i >= 49 && i <= 56){
        document.body.innerHTML += `<span class="obojeno1">${i}</span>`;
    } else if(i % 2 != 0 && i >= 9 && i <= 16 || i % 2 != 0 && i >= 25 && i <= 32 || i % 2 != 0 && i >= 41 && i <= 48 || i % 2 != 0 && i >= 57 && i <= 64){ 
        document.body.innerHTML += `<span class="obojeno1">${i}</span>`;
    } else {
        document.body.innerHTML += `<span>${i}</span>`;
    }

    if(i % 8 == 0){
        document.body.innerHTML += `<br><br>`;
    }
}