// Odrediti sumu brojeva od 1 do 100
let i = 1;
let suma = 0;
while(i <= 100){
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
n = 20;
m = 170;
suma = 0;

while(n <= m){
    suma += n;
    n++;
}
console.log(suma);



// Odrediti proizvod brojeva od n do m
n = 2;
m = 5;
suma = 1;

while(n <= m){
    suma *= n;
    n++;
}
console.log(suma);


// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
n = 3;
m = 25;
let suma1 = 0;
let suma2 = 0;
while(n <= m){
    if(n%2 == 0){
        suma1 += n**2;
    } else if(n%3 == 1){
        suma2 += n**3;
    }
    n++;
}
console.log(suma1, suma2);



// Odrediti sa koliko brojeva je deljiv uneti broj k
// k = 18;
// i = 1;
// let brDelj = 0;

// while(i <= k){
//     if(k % i == 0){
//         brDelj++;
//     }
//     i++;
// }
// console.log(brDelj);

k = 36;
i = 1;
let delj = 0;

while(i <= k){
    if(k % i == 0){
        delj++;
    }
    i++;
}
console.log(delj);

// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom
n = 5;
let brDelj = 0;

while(brDelj < n){
    if(n%brDelj == 2){
        console.log("Ovo je prost broj");
    }
    n++;
}