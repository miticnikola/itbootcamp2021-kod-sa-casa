// Imenovane funkcije
function suma(a, b){ //deklaracija imenovane funkcije
    return a + b;
}

console.log(suma(1, 2)); //Poziv funkcije: ime funkcije i prosledjivanje vrednosti


// Anonime funkcije
let suma2 = function(a,b){ //deklaracija anonimne funkcije
    return a + b;
}
console.log(suma2(3, 4)); //Poziv anonimne funkcije je preko promenljive u kojoj je sacuvana



// Arrow funkcije predstavljaju kraci zapis anonimnih funkcija
let suma3 = (a, b) => { //ova strelica se naziva i "fat arrow"
    return a + b;
}
console.log(suma3(3, 4));




//Arrow funkcija koja ispisuje "hello world"
let hello = () => {
    console.log("Hello World!");
}

hello();
hello();

// Arrow funkcija koja pozdravlja korisnika
let korsinik = (ime) => {
    console.log(`Hello ${ime}!`);
}

korsinik("Pera");
korsinik("Zika");

// Arrow funkcija koja ispisuje ime korisnika kao i  pravni status
let korisnik2 = (ime, godine) => {
    if(godine < 18){
        let ispis = "Korisnik " + ime + " je maloletno lice.";
        document.body.innerHTML += `<p style="color: green">${ispis}</p>`;
    }
    else {
        let ispis = "Korisnik " + ime + " je punoletno lice.";
        document.body.innerHTML += `<p style="color: purple">${ispis}</p>`;
    }
}

korisnik2("Glorija", 28);
korisnik2("Petar", 7);

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = (n) => {
    if(n % 2 == 0){
        return false;
    } else {
        return true;
    }
}

console.log(neparan(7));


// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
let maks2 = (n, m) => {
    if(n > m){
        return n;
    } else {
        return m;
    }
}

console.log(maks2(2, 5));


let maks4 = (n, m, a, b) => {
    return maks2(maks2(n, m), maks2(a, b));
}

console.log(maks4(202, 9, 100, 8));




// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let slika = (img) => {
    document.body.innerHTML += `<img src="img/${img}" width="250px">`;
}

slika("0.jpg");
slika("1.jpg");
slika("2.jpg");
slika("3.jpg");



// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
let par = (color) => {
    document.body.innerHTML += `<p style="color: ${color}">LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina LOOOOOoooOOoOoremcina </p>`
}

par("green");
par("aqua");
par("purple");
par("aquamarine");


// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
let sedmiDan = (n) => {
    let dan = n % 7;
    
    switch(dan){
        case 0:
            console.log("Nedelja");
            break;
        case 1:
            console.log("Ponedeljak");
            break;
        case 2:
            console.log("Utorak");
            break;
        case 3:
            console.log("Sreda");
            break;
        case 4:
            console.log("Cetvrtak");
            break;
        case 5:
            console.log("Petak");
            break;
    }
}

// 8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.


// 9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.


// 10. Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.







//ZADATAK SA SKRACENJEM == 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

//Prvi nacin
let slika1 = (img) => {
    return `<img src="img/${img}" width="250px">`;
}

// Drugi nacin
let slika2 = (img) => `<img src="img/${img}" width="250px">`;


// Treci nacin
let slika3 = img => `<img src="img/${img}" width="250px">`;


// Pozivi sva 3 nacina
document.body.innerHTML += slika1('0.jpg');
document.body.innerHTML += slika2('1.jpg');
document.body.innerHTML += slika3('2.jpg');





// ZADATAK SA SKRACENJEM === 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2_1 = (a, b) => {
    if(a > b){
        return a;
    }
    else {
        return b;
    }
    // ?????? return if(a > b) {a}, else {b};
}

let max2 = (a, b) => (a > b) ? a : b; //ternarni operator // 1 ? 2 : 3 == ispituje tacnost izraza 1, ako je to tacno ispisuje 2, ako nije ispisuje 3.

let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));
let maks4_1 = (a, b, c, d) => max2(max2(max2(a, b), c), d);

console.log(max2(3, 4));

console.log(max2(4, 3));

console.log(max4(4, 7, -9, 3));


// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan1 = n => n % 2 == 0 ? false : true;

let neparan2 = n => n % 2 != 0;


console.log(neparan1(7));
console.log(neparan2(7));


/* zadatak 15. 
Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
 Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
*/

let praksa = (n, a) => {
    let d = 50;
    let ukupnaZarada = n * a;
    
    for(i = 2; i <= n; i++){
        if(n > 1){
            ukupnaZarada += d;
        }
    }
    console.log(ukupnaZarada);
}

praksa(6, 500);


/* zadatak 16.
Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s
*/

// let t = 15;; // takmicaru toliko treba od polazne tacke do mosta
// let p = 14; // nakon koliko od pocetka kretanja takmicara most pocinje da se dize
// let n = 12; // period od pocetka podizanja, do spustanja mosta - prelaz tada nije moguc


// let polazak = (t, p, n) => {
// if(p - t < 0){
//     let ostatak = n + (p - t); //vreme koliko ce takmicar morati da ceka
//     // console.log(ostatak);
//     let cekanje = t - ostatak;

//     return cekanje;
// } else {
//     return 0;

// }
// }

// console.log(`Tim treba da krene sa starta ${polazak(15, 20, 25)} sek, nakon pocetka merenja vremena kako bi prosao poligon bez zaustavljanja.`);



let polaz = (t, p, n) => {
    if(p > t){
        let cekanje = 0;
        return cekanje;
    } else if(p < t){
        let cekanje = n + (t - p);
        let podjiNakon = t - cekanje;

        return Math.abs(podjiNakon);
    }
}

// console.log(polaz(15, 14, 35));

console.log(`Tim treba da krene sa starta ${polaz(15, 14, 45)} sek, nakon pocetka merenja vremena kako bi prosao poligon bez zaustavljanja.`);