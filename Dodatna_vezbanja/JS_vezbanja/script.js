// Zadatak 1. Napisati program koji za unete brojeve a, b i c izraˇcunava njihov zbir, proizvod i aritmetiˇck sredinu.

let a = 5;
let b = 87;
let c = 137;

let zbir = a + b + c;
console.log(zbir);

let proizvod = a * b * c;
console.log(proizvod);

let arSred = (a + b + c) / 3;
console.log(arSred)

// Zadatak 2. Napisati program kojim se izraˇcunava hipotenuza i povrˇsina pravouglog trougla.
let a1 = 4;
let b1 = 3;
let c1 = Math.sqrt(a1**2 + b1**2);
let p = a1 * b1 * c1;
console.log(c1, p);







// Tekstovi zadataka- Dodela vrednosti == Zadatak 2 -- sati i minuti
/*
Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći 
g - 12-hour format of an hour (1 to 12)
G - 24-hour format of an hour (0 to 23)
h - 12-hour format of an hour (01 to 12)
H - 24-hour format of an hour (00 to 23)
        	i - Minutes with leading zeros (00 to 59)
date_default_timezone_set('Europe/Belgrade'); - promena vremenske zone

 $sati = date('G');
 $minuti = date('i');
*/

let date = new Date;
console.log(date);

let min = date.getMinutes();
let hour = date.getHours();

let minOdPonoci = min + hour*60;

console.log(minOdPonoci);