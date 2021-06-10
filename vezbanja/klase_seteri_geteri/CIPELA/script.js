// Napraviti klasu Cipela koja sadrži atribute: naziv, broj cipele i niz prepravki koje treba obaviti na cipeli.
// Napraviti odgovarajući konstruktor, getere i setere.
// Napraviti metodu zalepi koja po pozivu na ekranu ispisuje “Zalepljena cipela”.
// Napraviti metodu prosiri koja po pozivu na ekranu ispisuje “Prosirena cipela”.
// Napraviti metodu usij koja po pozivu na ekranu ispisuje “Usivena cipela”.
// Napraviti funkciju radi kojoj se prosledjuje jedna cipela (jedna instanca klase Cipela) i koja proverava da li je neka u nizu prepravki sadrži string zalepi, proširi ili ušij. Svaki put kada naiđe na prepravku (element u nizu prepravki) zalepi poziva se metoda zalepi, kada naiđe na prepravku prosiri poziva se metoda prosiri, kada naiđe na prepravku usij poziva se metoda usij, u suprotno se na ekranu ispisuje “Nepoznata prepravka”.

class Cipela{
    constructor(naziv, brojCipele, nizPrepravki){
        this.naziv = naziv;
        this.brojCipele = brojCipele;
        this.nizPrepravki = nizPrepravki;
    }
    // Seteri
    set naziv(naziv){
        this._naziv = naziv;
    }
    set brojCipele(brojCipele){
        this._brojCipele = brojCipele;
    }
    set nizPrepravki(niz){
        this._nizPrepravki = niz;
    }

    // Geteri
    get naziv(){
        return this._naziv;
    }

    get brojCipele(){
        return this._brojCipele;
    }

    get nizPrepravki(){
        return this._nizPrepravki;
    }

    // Metode
    zalepi(){
        console.log("Zalepljena cipela.");
    }
    prosiri(){
        console.log("Prosirena cipela.");
    }
    usij(){
        console.log("Usivena cipela.");
    }
}

let cipela1 = new Cipela("Lakovana", 46, ["zalepi", "usij"]);
let cipela2 = new Cipela("Patika", 43, ["usij", "prosiri"]);
let cipela3 = new Cipela("Patofna", 38, ["zalepi", "usij", "ofarbaj"]);

// Napraviti funkciju radi kojoj se prosledjuje jedna cipela (jedna instanca klase Cipela) i koja proverava da li je neka u nizu prepravki sadrži string zalepi, proširi ili ušij. Svaki put kada naiđe na prepravku (element u nizu prepravki) zalepi poziva se metoda zalepi, kada naiđe na prepravku prosiri poziva se metoda prosiri, kada naiđe na prepravku usij poziva se metoda usij, u suprotno se na ekranu ispisuje “Nepoznata prepravka”.
console.log(cipela1, cipela2, cipela3);


let popravka = c => {
    c.nizPrepravki.forEach(prepravka => {
        if(prepravka == "zalepi"){
            c.zalepi();
        } else if(prepravka == "usij"){
            c.usij();
        } else if(prepravka == "prosiri"){
            c.prosiri();
        } else {
            console.log("Nepoznata prepravka");
        }
    });
}

popravka(cipela2);