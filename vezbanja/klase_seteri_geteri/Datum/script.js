// Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godinu.
// Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.
// Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.

class Datum {
    constructor(dan, mesec, godina){
        this.dan = dan;
        this.mesec = mesec;
        this.godina = godina;
    }

    // Seteri
    set dan(dan){
        this._dan = dan;
    }
    set mesec(mesec){
        this._mesec = mesec;
    }
    set godina(godina){
        this._godina = godina;
    }
    // Geteri

    get dan(){
        return this._dan;
    }
    get mesec(){
        return this._mesec;
    }
    get godina(){
        return this._godina;
    }
}

let datum1 = new Datum("09", "06", "2021");
let datum2 = new Datum("09", "06", "2022");
let datum3 = new Datum("09", "06", "2023");
let datum4 = new Datum("09", "06", "2022");

let datumi = [datum1, datum2, datum2, datum4];

let ranijiDatum = (d1, d2) => {
    if(d1.godina > d2.godina){
        console.log(`Raniji datum je ${d2.dan}.${d2.mesec}.${d2.godina}`);
    } else if(d2.godina > d1.godina){
        console.log(`Raniji datum je ${d1.dan}.${d1.mesec}.${d1.godina}`);
    } else {
        console.log("Datumi su jednaki.");
    }
}

ranijiDatum(datum2, datum4);