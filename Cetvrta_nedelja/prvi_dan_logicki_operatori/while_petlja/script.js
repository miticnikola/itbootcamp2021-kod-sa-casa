// Ispis brojeva od 1 do 5

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let i = 1;

while (i <= 5){
    console.log(i);
    i++;
}

console.log(`Vrednost promenljive i, nakon while petlje, jednaka je ${i}`);


/* zadatak 1
Ispisati brojeve od 1 do 20:
Svaki u istom redu
Svaki u novom redu
 */
//svaki u novom redu
i = 1;
while(i <= 20){
    console.log(i);
    i++;
}

// svi u istom redu
i = 1;
let row = "";
while(i <= 20){
    // row = row + i + " ";
    row += (i + " ");
    i++;
}
console.log(row);


/* zadatak 2
Ispisati brojeve od 20 do 1.
*/

// Prvi nacin
i = 20;
while(i >= 1){
    console.log(i);
    i--;
}

// Drugi nacin
i = 1;
while(i < 20){
    console.log(21 - i)
    i++;
}

/* zadatak 3
Ispisati parne brojeve od 1 do 20.
 */
i = 1;

while(i <= 20){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}

// Nacin br2
i = 1;
while(i <= 10){
    console.log(i * 2);
    i++;
}

// Nacin br3
i = 2;
while(i <= 20){
    console.log(i);
    // i = i + 2;
    i += 2;
}


// Zadatak 4 Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje


// Ovaj nacin nije bas najbolji, jer ne moze da se ogranici broj n, vec ce stalno da se povecavaju paragrafi zbog n++;
let n = 1;
while(n <= 1){
    
    if(n >= 1){
        document.body.innerHTML += `<p style="color: red;">Ovo je paragraf.</p>`;
    } 
    
    if(n >= 1) {
        document.body.innerHTML += `<p style="color: blue;">Ovo je drugi paragraf.</p>`;
    } 
    
    if(n >= 1) {
        document.body.innerHTML += `<p style="color: green;">Ovo je treci paragraf.</p>`;
    }

    n++;
}

// Nacin sa casa
i = 1;
let j = 5;
while( i <= j ){
    if(i % 3 === 1){
        document.body.innerHTML += `<p style="color: red;">Ovo je ${i} paragraf.</p>`;
    } else if(i % 3 == 2){
        document.body.innerHTML += `<p style="color: green;">Ovo je ${i} paragraf.</p>`;
    } else {
        document.body.innerHTML += `<p style="color: blue;">Ovo je ${i} paragraf.</p>`; 
    }
    i += 1;
}


/* Zadatak 5
Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
*/

i = 1;
n = 6;
while(i <= n){
    if(i <= n){
        document.body.innerHTML += `<img src="ananas.jpg" style="width: 100px; border: 5px dotted green; margin-right:10px;">`
    }

    if(i <= n){
        document.body.innerHTML += `<img src="min.jpg" style="width: 100px; border: 5px solid red; margin-right:10px;">`
    }
    i++;
}

// Nacin sa casa === bolja i logicnija varijanta
i = 1;
n = 6;

while (i <= n){
    /*
    1 % 2 = 1
    2 % 2 = 0
    3 % 2 = 1;
    4 % 2 = 0;
    5 % 2 = 1
    .....
    */
   if( i % 2 == 1){
       document.body.innerHTML += `<img src="ananas.jpg"  class="okvir1">`
   } else {
    document.body.innerHTML += `<img src="ananas.jpg"  class="okvir2">`
   }
   i++;
}


// ZADATAK = Ciklicno prikazivanje 3 slike
i = 1;
n = 7;

while(i <= n){
    /*
    1 % 2 = 1
    2 % 2 = 0
    3 % 2 = 1;
    4 % 2 = 0;
    5 % 2 = 1
    .....
    */
    let ost = i % 3;
    document.body.innerHTML += `<img src="img/${ost}.jpg">`;
    i++;
}

/* zadatak 6
Odrediti sumu brojeva od 1 do 100
*/
i = 1;
let suma = 0;
//nula je neutral u sabiranju i oduzimanju
while(i <= 100){
    suma += i;
    i += 1;
    // Kada bi console.log se napisalo unutar petlje, racunao bi svaki medjukorak, a kada je van petlje, onda izracuna celu sumu na kraju bez medjusabiranja.
}
console.log(suma);

// Gausova formula --- 1,2,3,4,5 -> 5*(5+1)/2
n = 5;
let suma1 = (n * (n + 1)) / 2;
console.log(suma1);
// ovo radi kada se ISKLJUCIVO sabira od broja 1 do n, ali ne i ako startuje od nekog drugog broja, i tada mora da se sabira preko while petlje.

/*
    ZADATAK === Odrediti proizvod brojeva od 1 do 5
 */
i  = 1;

let proizvod = 1; //1 je neutral kod mnozenja i deljenja

while(i <= n){
    proizvod *= i;
    i++;
}
console.log(proizvod);




/* zadatak 6
Odrediti sumu brojeva od 1 do 100
*/
i = 1;
let zbir = 0;

while(i <= 100){
    zbir += i;
    i++;
}
console.log(zbir);

/* zadatak 7
Odrediti sumu brojeva od 1 do n
*/
i = 1;
let zbir1 = 0;
n = 300;

while(i <= n){
    zbir1 += i;
    i++;
}
console.log(zbir1);

/* zadatak 8
Odrediti sumu brojeva od n do m
*/
n = 30;
m = 250;
let zbir2 = 0 + n;

while(n <= m){
    zbir2 += n;
    n++;
}
console.log(zbir2);
// ovde se koristi n kao iterator, i nema potrebe uvoditi dodatno i kada imamo vrednosti "od" -  "do" 

/* zadatak 9
Odrediti proizvod brojeva od n do m
*/
n = 5;
m = 10;
let proizvod1 = 1 * n;

while(n <= m){
    proizvod1 *= n;
    n++;
}
console.log(proizvod1);


/* zadatak 10
Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
*/
n = 3;
m = 15;
let sumaP1 = 0;
let sumaP2 = 0;

while(n <= m){
    if(n%2 == 0){
        sumaP1 += n**2;        
    }

    if(n%3 == 1){
        sumaP2 += n**3;        
    }
    n++;
}

console.log(sumaP1, sumaP2);


/* zadatak 11
Odrediti sa koliko brojeva je deljiv uneti broj k
*/
//ispitujemo od 1 do k kojim brojem je deljiv
let k = 10;
let brDeljivih = 0;
i = 1;

while(i <= k) {
    // Proveravamo da li je k deljiv sa i
    if(k % i == 0){
        brDeljivih++; // isto kao da smo stavili brDeljivih += 1;
    }
    i += 1;
}
console.log(brDeljivih);

/* zadatak 12
Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
 */
// broj je prost kada je deljiv sa 1 i sa samim sobom.

// Prakticno se svodi na prethodni zadatak. Ako je broj delilaca == 2, to znaci da je broj prost, tj. deljiv samo samim sobom i broj 1, u suprotnom broj nije prost.

if(brDeljivih == 2) {
    console.log("Broj je prost.");
} else {
    console.log("Broj nije prost.")
}

// Drugi nacin - zadatak 12:
n = 15;
i = 2;
while(i <= n/2){ 
    if(n % i == 0){
        // ako je deljivo sa i odmah znamo da nije prost broj
        console.log(`Broj ${n} nije prost.`);
        break; //prekida izvrsenje petlje u kojoj se nasao
    }
    i++;
}
if(i > n/2){
    console.log(`Broj ${n} je prost.`);
}

// Treci nacin
n = 24; // Broj cija se parnost ispituje
i = 2; // Brojac po potencijalnim deliocima broja n
let prime = true; //indikator (flag) da li je broj n prost

while(prime && (i <= n/2)){
    if(n%i == 0){
        prime = false;
    }
    i++;
}
if(prime){
    console.log(`Broj ${n} je prost.`);
} else {
    console.log(`Broj ${n} nije prost.`);
}