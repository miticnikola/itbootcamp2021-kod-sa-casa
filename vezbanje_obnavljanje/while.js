// Ispisati brojeve od 1 do 20:
// Svaki u istom redu
let i = 0;

// while(i < 20){
//     i++;
//     console.log(i);
// }
// Svaki u novom redu
// let string = '';
// while(i < 20){
//     i++;
//     string += i;
// }

// console.log(string);


// Ispisati brojeve od 20 do 1.
// i = 20;
// while(i > 0){
//     console.log(i);
//     i--;
// }

i = 1;
// Ispisati parne brojeve od 1 do 20.
while(i <= 20){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}

// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
i = 1;
let n = 13;
while(i <= n){
    if(i % 3 == 1){
        document.body.innerHTML += `<p style="color: red;">Ovo je ${i} paragraf.</p>`
    } else if(i % 3 == 0){
        document.body.innerHTML += `<p style="color: green;">Ovo je ${i} paragraf.</p>`

    } else {
        document.body.innerHTML += `<p style="color: yellow;">Ovo je ${i} paragraf.</p>`
    }
    
    i++;
}

// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
i = 1; 
n = 8;

while(i < n){
    if(i % 2 != 0){
        document.body.innerHTML += `<img  style="border: 1px solid red;  width: 25%;" src="ananas.jpg">`;
    } else {
        document.body.innerHTML += `<img  style="border: 1px dotted green; width: 25%;" src="ananas.jpg">`;
    }
    i++;
}

// Odrediti sumu brojeva od 1 do n
i = 1;
n = 4;
let sum = 0;;
while(i <= n){
    sum += i;
    i++;
}
console.log(sum);