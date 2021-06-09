// Kreirati klasu Krug koja ima atribut za poluprečnik kruga.
// Napraviti odgovarajući konstruktor, getere i setere.
// Napraviti metodu obimKruga koja izračunava i vraća obim kruga.
// Napraviti metodu povrsinaKruga koja izračunava i vraća površinu kruga.
// Napraviti funkciju upisaniKrug kojoj se prosleđuju dva objekta tipa krug, a ona vraća true ukoliko je u prvi prosleđeni krug moguće upisati drugi prosleđeni krug. U suprotnom funkcija vraća false.
// * Napisati funkciju rastuci koja vraća true ukoliko se svaki krug može upisati u svog sledbenika. Ukoliko ma jedan krug ne može da se upiše u sledeći krug, vratiti false. 
 

class Krug{
    constructor(r){
        this.r = r;
    }
    obimKruga(){
        return 2*this.r*Math.PI;
    }
    povrsinaKruga(){
        return this.r**2*Math.PI;
    }


    set r(r){
        this._r = r;
    }
    get r(){
        return this._r;
    }

}

let upisaniKrug = (k1, k2) => {
    if(k1.obimKruga() < k2.obimKruga()){
        return true;
    } else {
        return false;
    }
}

let krug1 = new Krug(2);
let krug2 = new Krug(4);
let krug3 = new Krug(6);
let krug4 = new Krug(8);

console.log(upisaniKrug(krug1, krug4));

let krugovi = [krug1, krug2, krug3, krug4];


// * Napisati funkciju rastuci koja vraća true ukoliko se svaki krug može upisati u svog sledbenika. Ukoliko ma jedan krug ne može da se upiše u sledeći krug, vratiti false.

let rastuci = niz => {
    for(let i = 0; i < niz.length; i++){
        for(let j = 0; j < niz.length; j+2){
            if(niz[i].povrsinaKruga() < niz[j].povrsinaKruga()){
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(rastuci(krugovi));