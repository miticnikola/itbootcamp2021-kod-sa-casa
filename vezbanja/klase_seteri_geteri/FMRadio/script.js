// Kreirati klasu FMRadio koja sadrđi atribute o stanici, frekvenciji i  jačini tona.
// Klasa treba da sedrži odgovarajući konstruktor, getere i setere koji zadovoljavaju uslov da se frekvencija nalazi u opsegu od 87.5MHz do 108MHz. Jačina zvuka treba da se nalazi u opsegu od 0 do 20.

// Napraviti metodu promeniZvuk kojoj se prosleđuje simbol plus ili minus i koja  po pozivu jačinu zvuka menja isključivo za 1 stupanj. Ukoliko je prosleđen simbol + povećati jačinu zvuka za 1, u suprotnom smanjiti jačinu zvuka za 1. Voditi računa o tome da jačina zvuka ne sme biti manja od 0 i veća od 20 (Ova metoda ništa ne vraća, samo promeni vrednost zvuka).

// Napraviti metodu frekvencijaIskljuci koja vrednost funkcije postavlja na najmanju moguću frekvenciju (na 87.5MHz). (I ova metoda takođe ništa ne vraća, samo postavi vrednost frekvencije)

// Napisati funkciju srednjaFrekvencija kojoj se prosleđuje niz radio stanica, a ona vraća koja je prosečna frekvencija prosleđenih radio stanica.
// Napisati funkciju najbliziMaks kojoj se prosleđuje niz radio stanica, a funkcija vraća onu radio stanicu čija je frekvencija najbliža maksimalnoj frekvenciji.
// Testirati rad napravljenih metoda.

class FMRadio {
    constructor(stanica, frekvencija, jacinaTona){
        this.stanica = stanica;
        this.frekvencija = frekvencija;
        this.jacinaTona = jacinaTona;
    }

    // Seteri
    set stanica(stanica){
        this._stanica = stanica;
    }
    set frekvencija(frekvencija){
        if(frekvencija >= 87.5 && frekvencija <= 108){
            this._frekvencija = frekvencija;
        } else {
            return false;
        }

    }
    set jacinaTona(jacinaTona){
        if(jacinaTona >= 0 && jacinaTona <= 20){
            this._jacinaTona = jacinaTona;
        } else {
            return false;
        }
    }

    // Geteri
    get stanica(){
        return this._stanica;
    }
    get frekvencija(){
        return this._frekvencija;
    }
    get jacinaTona(){
        return this._jacinaTona;
    }

    promeniZvuk(){
        let prikaz = document.getElementById('prikaz');

        document.addEventListener('keydown', e => {
            if(e.keyCode == 187 || e.keyCode == 107){
                this.jacinaTona++;
                if(this.jacinaTona > 20){
                    this.jacinaTona = 20;
                }
            }
            prikaz.innerHTML = this.stanica + ` radio: ` + this.jacinaTona;
        });
        
        document.addEventListener('keydown', e => {
            if(e.keyCode == 189 || e.keyCode == 109){
                this.jacinaTona--;
                if(this.jacinaTona < 0){
                    this.jacinaTona = 0;
                }
            }
            prikaz.innerHTML = this.stanica + ` radio: ` + this.jacinaTona;
        });
    }

    // Napraviti metodu frekvencijaIskljuci koja vrednost funkcije postavlja na najmanju moguću frekvenciju (na 87.5MHz). (I ova metoda takođe ništa ne vraća, samo postavi vrednost frekvencije)
    frekvencijaIskljuci(){
        this.frekvencija = 87.5;
    }
}

let fm1 = new FMRadio("TDI", 88.8, 15);
let fm2 = new FMRadio("BelleAmie", 89.1, 19);
let fm3 = new FMRadio("PLay", 92.7, 11);

let radioStanice = [fm1, fm2, fm3];

// Napisati funkciju srednjaFrekvencija kojoj se prosleđuje niz radio stanica, a ona vraća koja je prosečna frekvencija prosleđenih radio stanica.
let srednjaFrekvencija = niz => {
    let zbirFrek = 0;

    niz.forEach(radio => {
        zbirFrek += radio.frekvencija;
    });
    return zbirFrek / niz.length;
}
console.log(srednjaFrekvencija(radioStanice));


// Napisati funkciju najbliziMaks kojoj se prosleđuje niz radio stanica, a funkcija vraća onu radio stanicu čija je frekvencija najbliža maksimalnoj frekvenciji.
let najbliziMaks = niz => {
    let maks = niz[0].frekvencija;
    let stanicaMaxFrek;

    niz.forEach(stanica => {
        if(maks <= stanica.frekvencija){
            maks = stanica.frekvencija;
            stanicaMaxFrek = stanica;
        }
    });
    return stanicaMaxFrek;
}
console.log(najbliziMaks(radioStanice));



fm1.promeniZvuk();
console.log(fm1);
// fm3.promeniZvuk();
// fm2.promeniZvuk();


console.log(fm2.frekvencija);
fm2.frekvencijaIskljuci();
console.log(fm2.frekvencija);