let i;

for(let i = 1; i <= 5; i++){
    console.log(`Na redu je broj ${i}`);
}

// SCOPE = svaka prmenljiva ima svoj scope ili oblast vazenja.
// let - ona ima oblas vazenja unutar bloka {} u kome je deklarisana;
// var (oblast vazenja unutar funkcije); == ako se drugacije ne deklarise, JS doda sam po sebi deklaraciju var.

     /*
        let i;
                ==== to su globalne promenljive
        var j;  

        if(i != j){
            let k;  == lokalna promenljiva za samo ovaj deo scopa.
            var m;  == globalna promenljiva za ceo fajl
        }
    */

// Ispisati parne brojeve od  do 20;
for(i = 1; i <= 20; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}

// Drugi nacin 
for(i = 2; i <= 20; i+=2) {
    console.log(i);
}

// Ispisati neparne brojeve od 1 do 20
for(i = 1; i <= 20; i++){
    if(i % 2 == 1){
        console.log(`Neparni broj: ${i}`);
    }
}

// Nacin 2:
for(i = 1; i <= 20; i += 2){
    console.log(`Nacin2: Neparni broj: ${i}`);
}

/* zadatak 1
Ispisati brojeve od 1 do 20 
 */
for(i = 1; i <= 20; i++){
    console.log(i);
}

/* zadatak 2
Ispisati brojeve od 20 do 1 
 */
for(i = 20; i >= 1; i--){
    console.log(i);
}

/* zadatak 4
Ispisati dvostruku vrednost brojeva od 5 do 15
*/
for(i = 5; i <= 15; i++){
    console.log(`Kvadrati brojeva ${i*2}`);
}

/* zadatak 5
Odrediti sumu brojeva od 1 do n
 */
let n = 15;
let suma = 0;

for(i = 1; i <= n; i++){
    suma += i;
}
console.log(`Suma je ${suma}`);

/* zadatak 6
Odrediti sumu brojeva od n do m 
 */
n = 3;
let m = 15;
suma = 0;
for(i = n; i <= m; i++){
    suma += i;
}
console.log(`Suma je ${suma}`);

/* zadatak 7
Odrediti proizvod brojeva od n do m
 */
n = 3;
m = 9;
let proizvod = 1;

for(i = n; i <= m; i++){
    proizvod *= i;
}
console.log(`Proizvod je ${proizvod}`);


/* zadatak 8
Odrediti sumu kvadrata brojeva od n do m *
 */
n = 3;
m = 8;
let sKv = 0;

for(i = n; i <= m; i++){
    sKv += i**2;
}
console.log(`Suma kvadrata brojeva iznosi ${sKv}`);


/* zadatak 9
Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
*/

n = 8;

for(i = 0; i <= n; i++){
    let ost = i % 3;
    document.body.innerHTML += `<img src="img/${ost + 1}.jpg">`;
}

// Drugi nacin
n = 8;

for(i = 1; i <= n; i++){
    if(i % 3 == 1){
        document.body.innerHTML += `<img src="img/1.jpg">`;
    } else if(i % 3 == 2){
        document.body.innerHTML += `<img src="img/2.jpg">`;
    } else {
        document.body.innerHTML += `<img src="img/3.jpg">`;
    }
}



/* zadatak 10
Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
*/
// Prvi nacin
n = 20;
m = 100;
proizvod = 1;

for(i = n; i <= m; i++){
    if(i%11 == 0){
        proizvod *= i;
    }
}
console.log(`Proizvod je ${proizvod}`);

// drugi nacin
proizvod = 1;
for(i = 22; i <= 100; i += 11){
    proizvod *= i;
}
console.log(`Proizvod je ${proizvod}`);



/* zadatak 11
Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
*/
let brojac = 0;
for(i = 5; i <= 150; i++){
    if(i % 13 == 0){
        brojac++; //to je isto kao i brojac += 1;
    }
}
console.log(brojac);

/* zadatak 12
Ispisati aritmetičku sredinu brojeva od n do m.
*/
// Prvi nacin
n = 2;
m = 8;
suma = 0;
brojac = 0;
for(i = n; i <= m; i++){
    suma += i;
    brojac++;
}

let arsr = suma / brojac;
console.log(arsr);

//drugi nacin
n = 2;
m = 5; // Broj brojeva izmedju n i m jednak je m - n + 1;
arsr = 0;
for(i = n; i <= m; i++){
    arsr += i;
}
arsr /= (m - n + 1);
console.log(arsr);

/* zadatak 13
Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
*/

n = -7;
m = 15;
let brNeg = 0;
let brPoz = 0;
for(i = n; i <= m; i++){
    if(i < 0){
        brNeg++;
    } else if(i > 0){
        brPoz++;
    }
}
console.log(`Negativno je ${brNeg} n broja, pozitivno je ${brPoz} broja n`);

/* zadatak 14
Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
*/

let count = 0;

for(i = 5; i <= 50; i++){
    if((i % 3 == 0) || (i % 5 == 0)){
        count++;
    }
}
console.log(count);

/* zadatak 15
 Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su. */
 n = 5;
 m = 46;
 suma = 0;
 for(i = n; i <= m; i++){
     if(i % 10 == 4){
         suma += i;
        }
    }
    console.log(suma);

/*
16 zadatak
Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
 */
n = 7;
m = 86;
a = 6;
suma = 0;

for(i = n; i <= m; i++){
    if(i % a == 1){
        suma += i;
    }
}
console.log(suma);

/* zadatak 17
Odrediti proizvod brojeva od n do m koji su deljivi brojem a
*/
n = 3;
m = 27;
a = 4;
proiz = 1;

for(i = n; i <= m; i++){
    if(i % a == 0){
        proiz *= i; 
    }
}
console.log(proiz);




/* ZADATAK 18

*/

//Prvi nacin
let redovi = 6;
let tabela = `<table>`;

for(i = 1; i <= redovi; i++){
    if(i % 2 == 0){

        tabela +=
         `
         <tr class="obojen">
         <td>Tekst</td>
         <td>Tekst</td>
         </tr>
         `;
    } else {
        tabela +=
        `
        <tr class="boja2">
        <td>Tekst</td>
        <td>Tekst</td>
        </tr>
        `
    }
}
tabela += `</table>`;
document.body.innerHTML += tabela;

// Pojednostavljen prvi nacin
redovi = 6;
tabela = `<table>`;

for(i = 1; i <= redovi; i++){
    if(i % 2 == 0){

        tabela +=`<tr class="obojen">`;
    } else {
        tabela +=`<tr class="boja2">`
    }
    tabela += 
    `
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
    `;
}
tabela += `</table>`;
document.body.innerHTML += tabela;


let element = document.getElementById("naslov");
element.innerHTML += "*****";
// element.innerHTML += "*****" + element.innerHTML; //Ako zelimo da dodamo ***** pre teksta u elementu


// Drugi nacin
let htmlTabela = document.getElementById("mojaTabela");

for(i = 1; i <= redovi; i++){
    if(i % 2 == 0){
    htmlTabela.innerHTML += 
    `
        <tr class="boja1">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
    `;
} else {
    htmlTabela.innerHTML += 
    `
        <tr class="boja2">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
    `;
}
}

// ZADATAK 19 Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let brLi = 10;
let lista = `<ul>`;

for(i = 1; i <= brLi; i++){
    lista +=`<li>Element${i}</li>`;
    if(i % 3 == 2){
        i++;
        lista +=
        `
            <ul>
                <li class="purple">Element ${i}</li>
            </ul>
        `;
    } 
}

lista += `</ul>`

document.body.innerHTML += lista;


// drugi nacin
brLi = 10;
lista = `<ul>`;

for(i = 1; i <= brLi; i++){
    if(i % 3 == 0){
        lista +=
        `
            <ul>
                <li class="purple">Element ${i}</li>
            </ul>
        `;
    } else {
        lista +=`<li>Element${i}</li>`;
    }
}

lista += `</ul>`

document.body.innerHTML += lista;

/* 20 zadatak
Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju
 */

let brSpan = 64;

for(i = 1; i <= brSpan; i++){
    document.body.innerHTML += `<span>${i}</span>`;
    if(i % 8 == 0){
        document.body.innerHTML += `<br>`;
    }
}