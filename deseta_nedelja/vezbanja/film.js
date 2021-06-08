// Kreirati klasu Film koja od polja sadrži naslov, reziser i godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.
// Kreirati tri objekta klase Film. 
// Testirati metode klase.

// U klasi Film, dodati po tri setera za sva polja, s tim da se u seteru za godinu izdanja proverava da li je godina veća od 1800.

class Film {
    constructor(n, r, g){
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
    }
    stampaj(){
        console.log(`Naslov filma: ${this.naslov}, Reziser: ${this.reziser}, Godina izdanja: ${this.godinaIzdanja}`);
    }
    
    // Seters
    set naslov(x){
        this._naslov = x;
    }
    
    set reziser(x){
        this._reziser = x;
    }
    
    set godinaIzdanja(x){
        if(x > 1800){
            this._godinaIzdanja = x;
        } else {
            this._godinaIzdanja = 1800;
        }
    }
    
    // Geters
    get naslov(){
        return this._naslov;
    }
    
    get reziser(){
        return this._reziser;
    }
    
    get godinaIzdanja(){
        return this._godinaIzdanja;
    }

}

let film1 = new Film("Drakula", "Neki tamo reziser", 1987);
let film2 = new Film("Film 2", "Neki tamo drugi reziser", 1707);
let film3 = new Film("Film3", "Neki tamo treci reziser", 1997);

film1.stampaj();

console.log(film1, film2, film3);
console.log(film1._reziser);

// Kreirati klasu Pacijent koja od polja sadrži ime, visina i tezina. Od metoda sadrži:
// Stampaj() koja ispisuje sve podatke o pacijentu,
// Bmi(), koja vraća bmi vrednost pacijenta,
// Kritican(), koja vraća true ukoliko je bmi pacijenta manji od 15 ili veći od 40, a u suprotnom vraća false.
// Kreirati tri objekta ove klase i testirati metode.
// U klasi Pacijent, dodati odgovarajuće getere i setere, s tim što je potrebno da se u odgovarajućim seterima proveri da li je visina između 0 i 250, a težina između 0 i 550.

class Pacijent{
    constructor(i, v, t){
    this.ime = i;
    this.visina = v;
    this.tezina = t;
    }
    
    // Seters
    set ime(x){
        this._ime = x;
    }
    set visina(x){
        if(x > 0 && x < 2.5){
            this._visina = x;
        } else {
            this._visina = 0;
        }
    }
    set tezina(x){
        if(x > 0 && x < 550){
            this._tezina = x;
        } else {
            this._tezina = 0;
        }
    }
    
    // Geters
    get ime(){
        return this._ime;
    }
    get visina(){
        return this._visina;
    }
    get tezina(){
        return this._tezina;
    }

    Stampaj(){
        console.log(`Ime pacijenta: ${this.ime}, Visina: ${this.visina}, Tezina: ${this.tezina}`);
    }
    Bmi(){
        return this.tezina / this.visina**2;
    }
    Kritican(){
        if(this.Bmi() < 15 || this.Bmi() > 40){
            return true;
        }
        else {
            return false;
        }
    }
}

let pacijent1 = new Pacijent("Slavujka", 1.57, 60);
let pacijent2 = new Pacijent("Perica", 2, 105);
let pacijent3 = new Pacijent("Radojka", 1.63, 110);

console.log(pacijent1, pacijent2, pacijent3);

// Pacijent21
pacijent1.Stampaj();
console.log(pacijent1.Bmi());
console.log(pacijent1.Kritican());
// Pacijent2
pacijent2.Stampaj();
console.log(pacijent2.Bmi());
console.log(pacijent2.Kritican());
// Pacijent3
pacijent3.Stampaj();
console.log(pacijent3.Bmi());
console.log(pacijent3.Kritican());
