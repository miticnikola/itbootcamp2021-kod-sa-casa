function zbir(a, b){
    return a + b;
}

c = zbir(2, 3);
d = zbir(1, 4);
e = zbir(c, d);

console.log(e);

// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 
let imeIp = (ime, prezime) => {
    console.log(`Pozdrav, ${ime} ${prezime}`);
};

imeIp('Nikola', 'Mitic');



// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
function zbir(a, b){
    return a + b;
}

console.log(zbir(10, 2));


// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let neparan = n => {
    if(n % 2 == 0){
        console.log("Broj je paran.");
    } else {
        console.log("Broj je neparan.");
    }
};

neparan(4);


// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (n, m) => {
    if(n > m){
        return n;
    } else if(m > n) {
        return m;
    } else {
        return "Brojevi su jednaki.";
    }
};
console.log(maks2(21, 7));

let maks4 = (a, b, c, d) => {
    let prvi = maks2(a, b);
    let drugi = maks2(c, d);
    
    let najveci = maks2(prvi, drugi);

    return najveci;
}

console.log(maks4(100, 500, 78, 88));



// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let slika = img => {
    document.body.innerHTML += `<img src=${img}>`;
}
slika('ananas.jpg');



// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
let bojaP = color => {
    document.body.innerHTML += `<p style="color: ${color}">Ovo je neki paragraf</p>`;
};

bojaP('green');

// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
let sedmiDan = n => {
    if(n == 0 || n == 7){
        console.log("Nedelja");
    } else if(n == 1){
        console.log("Ponedeljak");
    } else if(n == 2){
        console.log("Utorak");
    } else if(n == 3){
        console.log("Sreda");
    } else if(n == 4){
        console.log("Cetvrtak");
    } else if(n == 5){
        console.log("Petak");
    } else if(n == 6){
        console.log("Subota");
    } else {
        console.log("Pravilno unesite redni broj dana");
    }
};

sedmiDan(7);

// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 
let font = szFo => {
    for(let i = 0; i < 5; i++){
        document.body.innerHTML += `<p style="font-size: ${szFo}px;">Ovo je recenica sa fontom ${szFo}px.</p>`
    };
};

font(33);


// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

let ukupno = (n, a) => {
    let d = 50;
    let suma = n * a;

    for(let i = 0; i < n; i++){
        suma += i*d;
    }
    
    return suma;
};

console.log(ukupno(6, 500));

// Ispitati ponovo