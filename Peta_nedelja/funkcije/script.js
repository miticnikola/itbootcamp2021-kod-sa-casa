let pr = 4;
let pr2 = 50;
if(pr < 10){
    pr = "0" + pr;
}

if(pr2 < 10) {
    pr2 = "0" + pr2;
}

console.log(pr); //pozziv funkcije log
console.log(pr2); //pozziv funkcije log

// Definicija - telo funkcije

function mojaFunkcija(){
    console.log("Zdravo svete");
} //ovde na kraju ne ide tacka-zarez jer to nije komanda


console.log("Neki tekst pre poziva funkcije.");

// Poziv funkcije
mojaFunkcija();

console.log("Neki tekst posle poziva funkcije.");

// Ponovni poziv funkcije
mojaFunkcija();


// Definicija druge funkcije
function ispisiText(tekst){
    console.log("Ispisujem tekst: " + tekst); //parametar tekst
}

// Pozivi funkcije
ispisiText("ITBootcamp"); // prilikom poziva funkcije prosledjuje se neka vrednost (ovde je prosledjen string).
ispisiText(`Pera Peric`);
ispisiText(25);

let x = "Mika";
ispisiText(x);

console.log(x);
// console.log(text);

let tekst = "Zika"; // globalna promenljiva
console.log(tekst); //ovo nije parametar text, nego globalna promenljiva



function test(x){
    if(x % 2 == 0) {
        var y = "Paran"; //function scope = promenljiva vazi unutar funkcije
    } else {
        let z = "Neparan"; // let - block scope (promenljiva vazi unutar bloka). Const je isto kao let
    }
    console.log(x);
    console.log(y);
    console.log(z);
}

// test(6);
// test(5);
// console.log(y);


function korisnik(ime, prezime){
    console.log(`Korisnik: ${ime} ${prezime}`);
}

// Poziv funkcije
korisnik("Pera", "Peric");
korisnik("Laza, Lazic"); // Laza Lazic je prva vrednost, druga vrednost je undefined, jer je laza lazic u ovom slucaju jedan string

// Napisati funkciju koja ispisuje ime i prezime korisnika koji se prosledjuju kao parametri. Kao i info da li je prezime korisnika dugacko (ako ima vise od 10 karaktera).

function korisnikPrezime(ime1, prezime1){
    // let duzina = ime1.length + prezime1.length;
    if(prezime1.length > 10){
        console.log(`Korisnik: ${ime1} ${prezime1} ima dugacko prezime.`);
    } else {
        console.log(`Korisnik: ${ime1} ${prezime1} nema dugacko prezime.`);
    }
}

korisnikPrezime("Jelena", "Matejic");
korisnikPrezime("Stefan", "Stanimirovic");


// Dva parametra razlicitih tipova (string i broj, tj ime i godine)
function korisnikGod(ime, god){
    if(god >= 18){
        console.log(`Korisnik ${ime} ima ${god}god i punoletna je osoba.`);
    } else {
        console.log(`Korisnik ${ime} ima ${god}god i maloletna je osoba.`);
    }
}

korisnikGod("Nikola", 28);
korisnikGod("Laza", 15);


// Funkcija sabiranja dva parametra
function zbir(a, b){
    let rez = a + b;
    console.log(`Suma zadata dva broja iznosi ${rez}`);
}

zbir(10, 5);
// console.log(a); 
// console.log(b); == ova i prethodna linija ne rade jer promenljiva
let a = -3;
let b = 7;
zbir(a, b);
// nakon prethodne linije koda prestaje da vazi u funciji proces obrade podataka u funkciji

console.log(a); //jer su a i b globalno definisane vrednost a = -3;
console.log(b); // vrednost b = 7


/*
let datum = new Date();
let dan = datum.getDay(); // vraca dan u nedelji

if(dan == 6 || dan == 0){ //vikend

} else {

} //rezultat funkcije se ne ispisuje nego se koristi

datum.getDay(); // ne ispisuje dan u nedelji
*/



// Funkcija koja VRACA zbir svoja dva parametra
function zbir2(a, b){
    let rez = a + b;
    return rez; // return vraca vrednost, a console.log, ispisuje vrednost
}

let z = zbir2(5, 6);
console.log(`Zbir brojeva 5 i 6 jednak je: ${z}`);
console.log(`Sum of numbers 5 and 6 is equal to: ${z}`);

if(z >= 0){
    console.log("Zbir je nenegativan broj");
} else {
    console.log("Zbir je negativan broj.");
}


if(zbir2(-5, -6) >= 0){
    console.log("Zbir brojeva -5 i -6 je nenegativan broj.")
} else {
    console.log("Zbir brojeva -5 i -6 je negativan broj.");
}

let s = zbir2(5, 8) + zbir2(8, 9);
//         13       +      18
console.log(s);
// vrednost promenljive s = 30;

if(s % 2 == 0){
    console.log(`Zbir ova 4 broja je paran.`)
} else {
    console.log(`Zbir ova 4 broja je neparan.`)
}

// samo funkcije koje u sebi imaju return mogu da se koriste ponovo.

// console.log(zbir2(4,6));


function proizvod(a, b){
    return a * b;
    // console.log("Hello world!");  === sve komande posle return nece biti izvrsene
}

// return ima dvojaku ulogu
// 1) VRACA vrednost funkciji
// 2) PREKIDA izvrsenje funkcije

console.log(proizvod(5, 6));


// Funkcije zadaci za vezbu

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n){
    if(n % 2 != 0){
        return true;
    } else {
        return false;
    }
}

console.log(neparan(10));

let m = 18;
if(neparan(m)){
    console.log(`Broj ${m} je neparan.`);
} else {
    console.log(`Broj ${m} je paran.`);
}



//4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
function maks2(br1, br2){
    if(br1 > br2){
        return br1;
    } else {
        return br2;
    }
}

//nacin 1
function maks4(br1, br2, br3, br4){
    if(br1 > br2 && br1 > br3 && br1 > br4){
        return br1;
    } else if(br2 > br1 && br2 > br3 && br2 > br4){
        return br2;
    } else if(br3 > br1 && br3 > br2 && br3 > br4){
        return br3;
    } else if(br4 > br1 && br4 > br2 && br4 > br3){
        return br4;
    }
}

// nacin 2
function max4_1(br1, br2, br3, br4){
    let m1 = max2(a, b); //m1 - broj (veci od a i b)
    let m2 = max2(c, d);// m2 - broj veci od c i d
    let m3 = max2(m1, m3);
    return m3;    
}

//nacin 3
function max4_2(br1, br2, br3, br4){
    return maks2(maks2(br1, br2), maks2(br3, br4));
}

//nacin 4
function max4_3(br1, br2, br3, br4){
    let m1 = maks2(a, b);
    let m2 = maks2(m1, c);
    let m3 = maks2(m2, d);
    return m3;
}

console.log(maks2(10, 11));
console.log(maks4(50, 121, 1213, 48));
console.log(max4_2(6, -4, 10, 3));

//5. Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(img){
   document.body.innerHTML += `<img src="${img}">`;
}

let img = `2.jpg`;

slika(img);
slika(`0.jpg`);
slika(`1.jpg`);
slika(`3.jpg`);
// slika(`4.jpg`);


//6. Napraviti funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function pColor(color){
   document.body.innerHTML += 
    `
        <p style="color: ${color};">Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<p>
    `;
}

pColor("aqua");


// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n){
    if(n == 0 || n == 7){
        return "Nedelja";
    } else if(n == 6){
        return "Subota";
    } else if(n == 1){
        return "Ponedeljak";
    } else if(n == 2){
        return "Utorak";
    } else if(n == 3){
        return "Sreda";
    } else if(n == 4){
        return "Cetvrtak";
    } else if(n == 5){
        return "Petak";
    } else {
        return "Unesite pravi redni broj dana.";
    }
}
// Isto kao i za dane, samo sto bih isao da mesec = date.getMonth()+1;

let date = new Date();
let day = date.getDay();

console.log(sedmiDan(day));

// 8. Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
function deljivSaTri(n, m){
    let brDelj = 0;
    for(i = n; i <= m; i++){
        if(i % 3 == 0){
            brDelj += 1;
        }
    }
    return brDelj;
}

console.log(deljivSaTri(5, 15));


// 9. Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.
function sumiraj(n, m){
    let suma = 0;
    for(i = n; i <= m; i++){
        suma += i;
    }
    return suma;
}

console.log(sumiraj(5, 10));


// 10. Napraviti funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

