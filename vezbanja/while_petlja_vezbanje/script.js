/*Ispisati brojeve od 1 do 20:
Svaki u istom redu
Svaki u novom redu
*/
let i = 1;
while(i <= 20){
    console.log(i);
    i++;
}

i = 1;
let red = "";
while(i <= 20){
    red += (i + " ");
    i++;
}
console.log(red);


// Ispisati brojeve od 20 do 1.
// i = 1;
// while(i < 20){
//     console.log(21 - i);
//     i++;
// }

i = 20;

while(i >= 1){
    console.log(i);
    i--;
}





// Ispisati parne brojeve od 1 do 20.
i = 2;

while(i <= 20){
    console.log(i);
    i += 2;
}

i = 1;
while(i <= 20){
    if(i % 2 == 0){
    console.log(i);
}
    i++;
}


// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
n = 7;
i = 1;

while(i <= n){
    if(i % 3 == 1){
        document.body.innerHTML += `<p style="color: red;">Lorem ${i} Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>`;
    } else if(i % 3 == 2){
        document.body.innerHTML += `<p style="color: green;">Lorem ${i} Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>`;
    } else {
        document.body.innerHTML += `<p style="color: blue;">Lorem Lorem ${i}Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>`;
    }
    i++;
}

// Nacin za bojenje sa 4 boje
n = 12;
i = 1;

while(i <= n){
    if(i % 4 == 1){
        document.body.innerHTML += `<p style="color: red;">Lorem ${i} Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>`;
    } else if(i % 4 == 2){
        document.body.innerHTML += `<p style="color: green;">Lorem ${i} Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>`;
    } else if(i % 4 == 3){
        document.body.innerHTML += `<p style="color: blue;">Lorem ${i} Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>`;
    } else {
        document.body.innerHTML += `<p style="color: purple;">Lorem Lorem ${i} Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>`;
    }
    i++;
}


// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

i = 1;
n = 9;

while(i <= n){
    if(i % 2 == 0){
        document.body.innerHTML += `<img src="ananas.jpg" width="100px;" style="border: 5px solid green;">`;
    } else if(i % 2 != 0){
        document.body.innerHTML += `<img src="ananas.jpg" width="100px;" style="border: 5px dashed aqua;">`;
    }
    i++;
};

// isti zadatak samo 3 okvira i css i 1 slika (isto bi bilo i sa 3 slike samo naziv slike se menja).

i = 1;
n = 9;

while(i <= n){
    if(i % 3 == 1){
        document.body.innerHTML += `<br><img src="ananas.jpg" width="100px;" class="prvi">`;
    } else if(i % 3 == 2){
        document.body.innerHTML += `<img src="ananas.jpg" width="100px;" class="drugi">`;
    } else {
        document.body.innerHTML += `<img src="ananas.jpg" width="100px;" class="treci">`;
        
    }
    i++;
};


// Ciklicno prikazivanje 4 slike (ako zelimo 4, samo nakon % upisemo 3. Bitno je samo da slike budu lepo numerisane)
i = 1;
n = 9;

while(i <= n){
    let ost = i % 4;
    document.body.innerHTML += `<img src="img/${ost}.jpg">`;
    i++;
}


// Odrediti sumu brojeva od 1 do 100
i = 1;
n = 100;
suma = 0;
while(i <= n){
    suma += i;
    i++;
}
console.log(suma);

// Odrediti sumu brojeva od 1 do n
i = 1;
n = 50;
suma = 0;

while(i <= n){
    suma += i;
    i++;
}
console.log(suma);

// Odrediti sumu brojeva od n do m
n = 25;
m = 102;
i = n;
suma = 0;

while(i <= m){
    suma += i;
    i++;
}
console.log(suma);

// Odrediti proizvod brojeva od n do m
n = 2;
m = 11;
i = n;
let proizvod = 1;

while(i <= m){
    proizvod *= i;
    i++;
}
console.log(proizvod);


// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
n = 2;
m = 8;
i = n;
let sumaKp = 0;
let sumaKn = 0;

while(i <= m){
    if(i % 2 == 0){
        sumaKp += i**2;
    } else if(i % 2 != 0){
        sumaKn += i**3;
    }
    i++;
}

console.log(`Suma kv par iznosi ${sumaKp}, a suma kub nep iznosi ${sumaKn}`);

// Odrediti sa koliko brojeva je deljiv uneti broj k
let k = 10;
i = 1;
let brDelj = 0;

while(i <= k){
    if(k % i == 0){
        brDelj += 1;
    }
    i++;
}
console.log(brDelj);

// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
n = 23;
i = 1;
brDelj = 0;

while(i <= n){
    if(n % i == 0){
        brDelj += 1;
    }
    i++;
}

if(brDelj == 2){
    console.log(`${n} je prost broj`);
} else {
    console.log(`${n} nije prost broj`);
}

console.log(brDelj);