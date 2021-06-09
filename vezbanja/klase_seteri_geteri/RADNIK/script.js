// Kreirati klasu Radnik koja sadrži dva atributa - ime i platu ranika.
// Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.
// Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.
// Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.

class Radnik{
    constructor(ime, plata){
        this.ime = ime;
        this.plata = plata;
    }

    // Seteri
    set ime(ime){
        this._ime = ime;
    }

    set plata(plata){
        this._plata = plata;
    }

    //Geteri
    get ime(){
        return this._ime;
    }
    get plata(){
        return this._plata;
    }
}

// Radnici
let radnik1 =  new Radnik("Radisa", 25000);
let radnik2 =  new Radnik("Slavisa", 85000);
let radnik3 =  new Radnik("Nikola", 95000);
let radnik4 =  new Radnik("Sasa", 75000);
let radnik5 =  new Radnik("Perica", 35000);

let radnici = [radnik1, radnik2, radnik3, radnik4, radnik5];

let maksPlata = niz => {
    let maks = niz[0].plata;

    niz.forEach(radnik => {
        if(maks < radnik.plata){
            maks = radnik.plata;
        }
    });

    return maks;
}
console.log(`Maksimalna plata radnika iznosi ${maksPlata(radnici)}din.`);