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

let film1 = new Film("Celavi se cupaju", "Mika Antic", 1801);
let film2 = new Film("Ljubavni zivot Budimira Trajkovica", "Mira FUrlan", 1970);
let film3 = new Film("Putopisi iz Narnije", "Neki tamo indijac", 2012);

console.log(film1, film2, film3);


