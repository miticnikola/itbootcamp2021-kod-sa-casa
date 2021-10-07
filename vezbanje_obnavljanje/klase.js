// Kreirati klasu Film koja od polja sadrži naslov, reziser i godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.
// Kreirati tri objekta klase Film. 
// Testirati metode klase.

class Film {
    constructor(naslov, reziser, godIzdanja) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godIzdanja = godIzdanja;
    }

    // Seters
    set naslov(naslov){
        this._naslov = naslov;
    }

    set reziser(reziser){
        this._reziser = reziser;
    }
 
    set godIzdanja(godIzdanja){
        this._godIzdanja = godIzdanja;
    }

    // Geters
    get naslov(){
        return this._naslov;
    }

    get reziser(){
        return this._reziser;
    }

    get godIzdanja(){
        return this._godIzdanja;
    }
}

let film1 = new Film('Celavi se cupaju', "Pera mikic", 1987);

console.log(film1);