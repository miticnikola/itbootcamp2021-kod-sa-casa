// Kreirati kalsu Automobil koji ima podatke o maksimalnoj brzini, minimalnoj brzini i trenutnoj brzini. 
// Pri stvaranju novog automobila (u konstruktoru) zadajete minimalnu vrednost brzine, maksimalnu vrednost brzine i trenutnu vrednost brzine.
// Napraviti odgovarajuće setere i getere.
// Napraviti metodu  ubrzaj kojoj se prosledjuje vrednost za koliko treba uvećati trenutnu brzinu. Ukoliko nije moguće izvršiti toliko ubrzanje, trenutnu brzinu postaviti na maksimalnu vrednost brzine, u suprotnom uvećati za traženu vrednost.
// Napraviti metodu uspori kojoj se prosledjuje vrednost za koliko treba smanjiti trenutnu brzinu. Ukoliko nije moguće izvršiti toliko usporenje, trenutnu brzinu postaviti na minimalnu vrednost brzine, u suprotnom umanjiti brzinu za traženu vrednost.

class Automobil{
    constructor(minBr, maxBr, trBr){
        this.minBr = minBr;
        this.maxBr = maxBr;
        this.trBr = trBr;
    }
    // Seteri
    set minBr(minBr){
        this._minBr = minBr;
    }
    set maxBr(maxBr){
        this._maxBr = maxBr;
    }
    set trBr(trBr){
        this._trBr = trBr;
    }
    // Get
    get minBr(){
        return this._minBr;
    }
    get maxBr(){
        return this._maxBr;
    }
    get trBr(){
        return this._trBr;
    }
    // Metode
    // Napraviti metodu  ubrzaj kojoj se prosledjuje vrednost za koliko treba uvećati trenutnu brzinu. Ukoliko nije moguće izvršiti toliko ubrzanje, trenutnu brzinu postaviti na maksimalnu vrednost brzine, u suprotnom uvećati za traženu vrednost.
    // Napraviti metodu uspori kojoj se prosledjuje vrednost za koliko treba smanjiti trenutnu brzinu. Ukoliko nije moguće izvršiti toliko usporenje, trenutnu brzinu postaviti na minimalnu vrednost brzine, u suprotnom umanjiti brzinu za traženu vrednost.
    ubrzaj(){
        let ubrzanje = 25;
        if(ubrzanje + this.trBr > this.maxBr){
            return this.trBr = this.maxBr;
        } else {
            return this.trBr = this.trBr + ubrzanje;
        }
    }
    uspori(){
        let usporenje = 30;
        if(this.trBr - usporenje < this.minBr){
            return this.trBr = this.minBr;
        } else {
            return this.trBr = this.trBr - usporenje;
        }
    }

}

let auto1 = new Automobil(20, 220, 80);
let auto2 = new Automobil(30, 250, 200);
let auto3 = new Automobil(15, 200, 70);

console.log(auto1, auto2, auto3);

// console.log(auto1.ubrzaj());
console.log(auto1.uspori());