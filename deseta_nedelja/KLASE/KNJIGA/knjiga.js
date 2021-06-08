// // Napraviti klasu Knjiga koja od privatnih polja sadrži naslov, autor, godIzdanja, brojStrana i cena. Od javnih metoda sadrži:
// Konstruktor koji postavlja sva polja,
// Metodu koja štampa sve podatke o knjizi,
// Metodu obimna koja vraća true ukoliko je knjiga obimna (broj strana veći od 600), u suprotnom vraća false.
// Metodu skupa koja vraća true ukoliko je knjiga skupa (knjiga je skupa, ukoliko je njena cena veća od 8000),  u suprotnom vraća false.
// Metodu dugackoIme koja ispituje da li je ime autora dugačko (ukoliko je broj karaktera u autorovom imenu veći od 18), vraća true/false.

export class Knjiga {
    constructor(naslov, autor, godIzdanja, brojStrana, cena){
        this.naslov = naslov;
        this.autor = autor;
        this.godIzdanja = godIzdanja;
        this.brojStrana = brojStrana;
        this.cena = cena;

    }
    stampa(){
        return `Naslov: ${this.naslov}, Autor: ${this.autor}, Godina izdanja: ${this.godIzdanja}, Broj strana: ${this.brojStrana}, Cena: ${this.cena}`;
    }
    obimna(){
        if(this.brojStrana > 600){
            return true;
        } else {
            return false;
        }
        // return this.brojStrana > 600 // i tako moze i za ostale
    }
    skupa(){
        if(this.cena > 800){
            return true;
        } else {
            return false;
        }

    }
    dugackoIme(){
        // let brKarakteraImena = this.autor.length;
        if(this.autor.length > 18){
            return true;
        } else {
            return false;
        }


    }

    // Seters
    set naslov(naslov){
        this._naslov = naslov;
    }

    set autor(autor){
        this._autor = autor;
    }

    set godIzdanja(godIzdanja){
        this._godIzdanja = godIzdanja;
    }

    set brojStrana(brojStrana){
        this._brojStrana = brojStrana;
    }

    set cena(cena){
        this._cena = cena;
    }
    
    
    // Geters
    get naslov(){
       return this._naslov;
    }

    get autor(){
       return this._autor;
    }

    get godIzdanja(){
       return this._godIzdanja;
    }

    get brojStrana(){
       return this._brojStrana;
    }

    get cena(){
       return this._cena;
    }
}