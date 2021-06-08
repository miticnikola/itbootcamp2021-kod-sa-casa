class Auto {
    // Konstruktor je ugradjeni metod koji svaka klasa mora da poseduje da bi kreirala objekat
    constructor(b, m){
        this._boja = b;//nije obavezna donja crta ali nas to asocira na property
        this._marka = m;
    }
    sviraj(){
        console.log(`${this._marka} Beep! Beep!`);
    }
} 

// Kreiranje novog objekta - kada se novi objekat kreira prvo se poziva konstruktor klase, stoga se kreiranje objkta u zagradama je potrebno proslediti vrednosti koje zelimo da postavimo u konstruktoru, tj koje konstruktor ocekuje

let auto1 = new Auto("red", "Fiat");

console.log(auto1);
console.log(auto1._boja);
auto1.sviraj();
// console.log(auto1["_boja"]); // moze i ovako da se pristupi ali nije praksa


let auto2 = new Auto("white", "Peugeot");
console.log(auto2._marka);
auto2.sviraj();

let auto3 = new Auto("blue", "Toyota");
console.log(auto3._boja);

let automobili = [auto1, auto2, auto3];
console.log(automobili);

// let auto2 = new Auto(["red", "orange", "yellow"], "Opel");