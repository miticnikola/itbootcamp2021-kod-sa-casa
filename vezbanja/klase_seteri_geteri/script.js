// Primer sa casa - seteri i geteri
class Auto{
    constructor(b, m, k){
        this.boja = b;
        this.model = m;
        this.krov = k;
    }
// Seteri
    set boja(x){
        this._boja = x;
    }

    set model(x){
        this._model = x;
    }

    set krov(x){
        if(x === true || x === false){
            this._krov = x;
        } else {
            this._krov = true;
        }
    }

    // geteri
    get boja(){
        return this._boja;
    }

    get model(){
        return this._model;
    }

    get krov(){
        return this._krov;
    }
}

console.log(new Auto());

let auto1 = new Auto("zelena", "fiat", false);
console.log(auto1.model);

// Kreirati klasu Film koja od polja sadrži naslov, reziser i godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.
// Kreirati tri objekta klase Film. 
// Testirati metode klase.
class Film {
    constructor(n, r, g){
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
    }
    // U klasi Film, dodati po tri setera za sva polja, s tim da se u seteru za godinu izdanja proverava da li je godina veća od 1800.
    
    // Seteri
    set naslov(x){
        this._naslov = x;
    }
    
    set reziser(x) {
        this._reziser = x;
    }

    set godinaIzdanja(x){
        if(x > 1800){
            this._godinaIzdanja = x;
        } else {
            return false;
        }
    }
        
    // Geteri
    get naslov(){
        this._naslov;
    }

    get reziser(){
        this._reziser;
    }

    get godinaIzdanja(){
        this._godinaIzdanja;
    }
}

let film1 = new Film("Pera detlic", "Mika Antic", 1801);
let film2 = new Film("Ljubavni zivot Budimira Trajkovica", "Mira FUrlan", 1970);
let film3 = new Film("Putopisi iz Narnije", "Neki tamo indijac", 2012);

console.log(film1, film2, film3);


// Kreirati klasu Pacijent koja od polja sadrži ime, visina i tezina. Od metoda sadrži:
// Stampaj() koja ispisuje sve podatke o pacijentu,
// Bmi(), koja vraća bmi vrednost pacijenta,
// Kritican(), koja vraća true ukoliko je bmi pacijenta manji od 15 ili veći od 40, a u suprotnom vraća false.
// Kreirati tri objekta ove klase i testirati metode.
// U klasi Pacijent, dodati odgovarajuće getere i setere, s tim što je potrebno da se u odgovarajućim seterima proveri da li je visina između 0 i 250, a težina između 0 i 550.

class Pacijent {
    constructor(i, v, t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    stampaj(){
        console.log(`Ime: ${this._ime}, Visina: ${this._visina}, Tezina: ${this._tezina}`);
    }

    bmi(){
        return (this._tezina / this._visina);
    }
    kritican(){
        if(this.bmi() < 15 || this.bmi() > 40){
            return true;
        } else {
            return false;
        }

    }
// Seters
    set ime(x){
        this._ime = x;
    }

    set visina(x){
        if(x > 0 && x < 2.5){
            this._visina = x;
        } else {
            this._visina = x;
        }
    }

    set tezina(x){
        if(x > 0 && x < 550){
            this._tezina = x;
        } else {
            this._tezina = x;
        }
    }
// Geters
    get ime(){
        this._ime;
    }

    get visina(){
        this._visina;
    }

    get tezina(){
        this._tezina;
    }
}
let pacijent1 = new Pacijent("Miladinka", 1.7, 65);
let pacijent2 = new Pacijent("Stoja", 1.63, 71);
let pacijent3 = new Pacijent("Camil", 2, 102);

pacijent1.stampaj();
console.log(pacijent1.bmi());
console.log(pacijent1.kritican());

pacijent2.stampaj();
console.log(pacijent2.bmi());
console.log(pacijent2.kritican());

pacijent3.stampaj();
console.log(pacijent3.bmi());
console.log(pacijent3.kritican());

console.log(pacijent3._ime);
console.log(pacijent3._visina);
console.log(pacijent3._tezina);

// console.log(pacijent2._ime);
