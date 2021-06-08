// Uvek se prvo kreira konstruktor, pa onda get-eri i Set-eri
class Auto {
    constructor(b, m, k){ //ovde pozivamo Setere
        this.boja = b; //this.boja je seter , seter pozivamo kao promenjivu bez navodjenja zagrada iako je metod
        this.marka = m;
        this.krov = k;
    }

    // Seteri - postavljaju vrednost poljima - Upisuju vrednost u polja
    // Pravimo seter za svako polje posebno
    // Setere pozivamo u konstruktoru
    set boja(x){
        this._boja = x;
    }

    set marka(x){
        this._marka = x;
    }

    set krov(x){
        if(x === true || x === false){
            this._krov = x;
        } else {
            this._krov = true; //ovako se stavlja defaultna vrednost
        }
    }

    // Geteri vracaju vrednost polja - Citaju vrednost iz polja
    get boja(){
        return this._boja;
    }

    get marka(){
        return this._marka;
    }

    get krov(){
        return this._krov;
    }


}

let auto1 = new Auto('red', 'Fiat', true);

// OVAKO NE RADITI, jer nemamo nikakav vid validacije
// console.log(auto1._boja);
// auto1._boja = "white";
// console.log(auto1._boja);


// OVAKO DA -- pristup poljima iskljucivo preko Getera i Setera

console.log(auto1.boja); //pristupamo geteru ali bez zagrada

auto1.boja = "white"; //pristupam seteru za boju, opet bez zagrada
console.log(auto1.boja);