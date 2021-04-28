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

*/

/* zadatak 14

*/

/* zadatak 15

*/

/* zadatak 16

*/

/* zadatak 17

*/