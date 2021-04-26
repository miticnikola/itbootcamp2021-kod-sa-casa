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

let n = 1;

while(n <= 3){
    
    if(n >= 1){
        document.body.innerHTML += `<p style="color: red;">Ovo je neki paragraf.</p>`
    } 
    
    if(n >= 1) {
        document.body.innerHTML += `<p style="color: blue;">Ovo je neki drugi paragraf.</p>`
    } 
    
    if(n >= 1) {
        document.body.innerHTML += `<p style="color: green;">Ovo je neki treci paragraf.</p>`
    }

    n++;
}

/* Zadatak 5
Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
*/

i = 1;

while(i <= 6){
    if(i >= 1){
        document.body.innerHTML += `<img src="ananas.jpg" style="width: 100px; border: 5px solid green; margin-right:10px;">`
    }

    if(i >= 1){
        document.body.innerHTML += `<img src="min.jpg" style="width: 100px; border: 5px solid red; margin-right:10px;">`
    }
    i++;
}