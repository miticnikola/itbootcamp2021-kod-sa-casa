// Kreirati kalsu Autobus koja ima podatke o registarskom broju autobusa i o broju sedišta u autobusu.
// Napraviti konstruktor kome se prosleđujeu odgovarajuće vrednosti.
// Napraviti odgovarajuće getere i setere.
// Napraviti metodu koja ispisuje podatke o autobusu.
// Napraviti niz autobusa.
// Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.
// Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima najveći broj sedišta.
// Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.

class Autobus{
    constructor(regBr, brSed){
        this.regBr = regBr;
        this.brSed = brSed;
    }
    // Seteri
    set regBr(regBr){
        this._regBr = regBr;
    }
    set brSed(brSed){
        this._brSed = brSed;
    }
    // Geteri
    get regBr(){
        return this._regBr;
    }
    get brSed(){
        return this._brSed;
    }

    ispisPodataka(){
        console.log(`Registracija: ${this.regBr}, Ukupno sedista: ${this.brSed}`);
    }
}

let autobus1 = new Autobus(125987, 7);
let autobus2 = new Autobus(1439887, 50);
let autobus3 = new Autobus(1677987, 77);
let autobus4 = new Autobus(1555987, 65);

let autobusi = [autobus1, autobus2, autobus3, autobus4];

console.log(autobusi);

let ukupnoSedista = niz => {
    let ukupno = 0;
    niz.forEach(autobus => {
        ukupno += autobus.brSed;
    });
    return ukupno;
}
console.log(ukupnoSedista(autobusi));


let maksSedista  = niz => {
    let maks = niz[0].brSed;

    let bus;
    niz.forEach(autobus => {
        if(maks <= autobus.brSed){
            maks = autobus.brSed;
            bus = autobus;
        }
    });
    bus.ispisPodataka();
}

maksSedista(autobusi);

// Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.

let ljudi = (brLjudi, niz) => {
    if(brLjudi <= ukupnoSedista(niz)){
        return true;
    } else {
        return false;
    }
}

console.log(ljudi(205, autobusi));