// Ispisati brojeve od 1 do 20 
let i;
for(i = 1; i < 20; i++){
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
n = 50;
let suma = 0;
for(i = 1; i <= n; i++){
 suma += i;
}
console.log(suma);


// Odrediti sumu brojeva od n do m 
n = 20;
m = 50;
suma = 0;

for(i = n; i <= m; i++){
    suma += i;
}
console.log(suma);

// Odrediti proizvod brojeva od n do m
n = 5;
m = 15;
suma = 1;

for(i = n; i <= m; i++){
    suma *= i;
}
console.log(suma);

// Odrediti sumu kvadrata brojeva od n do m *
n = 5;
m = 15;
suma = 0;

for(i = n; i <= m; i++){
    suma += i**2;
}
console.log(suma);

// Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora). 

// n = 9;
// for(i = 1; i <= n; i++){
//     if(i % 3 == 1){
//     document.body.innerHTML += `<img src="img/1.jpg">`;    
//     } else if(i % 3 == 2){
//         document.body.innerHTML += `<img src="img/2.jpg">`;    
//     } else {
//         document.body.innerHTML += `<img src="img/3.jpg">`;    
//     }
// }

n = 9;
for(i = 0; i <= n; i++){
    let k = i % 3;
    document.body.innerHTML += `<img src = "img/${k+1}.jpg">`;
}

// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
n = 20;
m = 100;
let proiz = 1;
for(i = n; i <= m; i++){
    if(i % 11 == 0){
        proiz *= i;
    }
}
console.log(proiz);


// Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
n = 5;
m = 150;
let brDelj = 0;
for(i = n; i <= m; i++){
    if(i % 13 == 0){
        brDelj++;
    }
}
console.log(brDelj);


// Ispisati aritmetičku sredinu brojeva od n do m.
n = 5;
m = 17;
let brojac = 0;
suma = 0;

for(i = n; i <= m; i++){
    brojac++;
    suma += i;
}
console.log(brojac);
console.log(suma);
console.log(`Aritmeticka sredina iznosi ${suma/brojac}.`);