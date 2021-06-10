// Kreirati klasu Film koja od polja sadrži naslov, reziser i godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.
// Kreirati tri objekta klase Film. 
// Testirati metode klase.

// U klasi Film, dodati po tri setera za sva polja, s tim da se u seteru za godinu izdanja proverava da li je godina veća od 1800.

class Film {
    constructor(n, r, g, o){
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
        this.ocene = o;
    }
    
    // Seters
    set naslov(x){
        this._naslov = x;
    }
    
    set reziser(x){
        this._reziser = x;
    }
    
    set godinaIzdanja(x){
        if(x > 1800){
            this._godinaIzdanja = x;
        } else {
            this._godinaIzdanja = 1800;
        }
    }

    set ocene(niz){
        this._ocene = niz;
    }
    
    // Geters
    get naslov(){
        return this._naslov;
    }
    
    get reziser(){
        return this._reziser;
    }
    
    get godinaIzdanja(){
        return this._godinaIzdanja;
    }

    get ocene(){
        return this._ocene;
    }

    // Metode
    stampaj(){
        console.log(`Naslov filma: ${this.naslov}, Reziser: ${this.reziser}, Godina izdanja: ${this.godinaIzdanja}`);
    }
    prosek(){
        let zbirOcena = 0;
        for(let i = 0; i < this.ocene.length; i++){
            zbirOcena += this.ocene[i];
        }
        return zbirOcena / this.ocene.length;
    }

}

// U klasi Film dodati polje ocene koje čini niz ocena koje su korisnici dali filmu
// Kreirati niz od barem tri objekta klase Film
// Napraviti metod prosek koji vraća prosečnu ocenu 

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.


let film1 = new Film("Drakula", "Neki tamo reziser", 1987, [9, 7, 9, 8.2, 6]);
let film2 = new Film("Film 2", "Neki tamo drugi reziser", 1707, [5, 7, 9, 6]);
let film3 = new Film("Film3", "Neki tamo treci reziser", 1997, [2, 5, 10]);


let filmovi = [film1, film2, film3];

// console.log(Math.round(film2.godinaIzdanja / 100));

let vekFilmova = (niz, vek) => {
    niz.forEach(film => {
        // if(Math.ceil(film.godina/100) == vek) // ne stavljati round jer on poveca za 1 i pravi problem
        if(film.godinaIzdanja > (vek - 1) * 100 && film.godinaIzdanja <= vek*100){
            film.stampaj();
        }
    });
}

vekFilmova(filmovi, 20);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
let prosecnaOcena = niz => {
    let zbirOcena = 0;
    let brOcena = 0;

   for(let i = 0; i < niz.length; i++){
       brOcena += niz[i].ocene.length;
       
       for(let j = 0; j < niz[i].ocene.length; j++){
           zbirOcena += niz[i].ocene[j];
        }
    }
    // console.log(brOcena);
    // console.log(zbirOcena);

    return zbirOcena / brOcena;

    //==== Drugi nacin ======
    // niz.forEach(film => {
    //     film.ocene.forEach(ocena => {
    //         zbirOcena += ocena;
    //         brOcena++;
    //     });
    // });
    // return zbirOcena / brOcena;
}

console.log(prosecnaOcena(filmovi));

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

// Najbolje ocenjeni:
let najboljeOcenjeni = niz => {
    let najbolji = niz[0];

    niz.forEach(film => {
        if(film.prosek() > najbolji.prosek()){
            najbolji = film;
        }
    });
    return najbolji;
}

najboljeOcenjeni(filmovi).stampaj(); // da ne bi izbacio log objekta, nego podatke o filmu
// console.log(`Najbolje ocenjen film je ${najboljeOcenjenji(filmovi).stampaj()}`);


// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
/*
film1 -> 8.5
film2 -> 7

globalni -> 8

Math.abs(film1 - globalni) = 8.5 - 8 = 0.5;
Math.abs(film2 - globalni) = 7 - 8 = -1 tj 1, jer mu nalazimo apsolutnu vrednost;
*/

let osrednjiFilm = niz => {
    let najbliziObj = niz[0]; //pretpostavka da je prvi film (objekat) najblizi generalnom proseku
    let prosecnaGlobal = prosecnaOcena(niz);
    let najbliziRazlika = Math.abs(najbliziObj.prosek() - prosecnaGlobal);

    niz.forEach(film => {
        let razlikaTekuceg = Math.abs(film.prosek - prosecnaGlobal);//koliko se tekuci film razlikuje od globalne prosecne ocene
        if(najbliziRazlika > razlikaTekuceg) {
            najbliziRazlika = razlikaTekuceg;
            najbliziObj = film;
        }
    });
    return najbliziObj;
}
console.log(osrednjiFilm(filmovi).naslov);

filmovi.forEach(film => {
    console.log(film.naslov, film.prosek());
});


// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = niz => {
    let najboljaOcena = najboljeOcenjeni(niz);

    let najmanjaOcena = najboljaOcena.ocene[0];

    for(let i = 0; i < najboljaOcena.ocene.length; i++){
        if(najmanjaOcena > najboljaOcena.ocene[i]){
            najmanjaOcena = najboljaOcena.ocene[i];
        }
    }
    return najmanjaOcena;
}
console.log(najmanjaOcenaNajboljeg(filmovi));


// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
let najmanjaOcena = niz => {
    let najmanja = niz[0].ocene[0];

    for(let i = 0; i < niz.length; i++){
        for(let j = 0; j < niz[i].ocene.length; j++){
            if(najmanja > niz[i].ocene[j]){
                najmanja = niz[i].ocene[j];
            }
        }
    }
    return najmanja;
}

console.log(najmanjaOcena(filmovi));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.
let iznadOcene = (niz, ocena) => {
    let boljeOcenjeni = [];

    niz.forEach(film => {
        if(film.prosek() > ocena){
            boljeOcenjeni.push(film);
        }
    });
    return boljeOcenjeni;
}
console.log(film1.prosek(), film2.prosek(), film3.prosek());
console.log(iznadOcene(filmovi, 7));


// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 


// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu



/////////////////
console.log(film2.prosek());

film1.stampaj();

console.log(film1, film2, film3);
console.log(film1._reziser);

console.log(film2.ocene);








// Kreirati klasu Pacijent koja od polja sadrži ime, visina i tezina. Od metoda sadrži:
// Stampaj() koja ispisuje sve podatke o pacijentu,
// Bmi(), koja vraća bmi vrednost pacijenta,
// Kritican(), koja vraća true ukoliko je bmi pacijenta manji od 15 ili veći od 40, a u suprotnom vraća false.
// Kreirati tri objekta ove klase i testirati metode.
// U klasi Pacijent, dodati odgovarajuće getere i setere, s tim što je potrebno da se u odgovarajućim seterima proveri da li je visina između 0 i 250, a težina između 0 i 550.

class Pacijent{
    constructor(i, v, t){
    this.ime = i;
    this.visina = v;
    this.tezina = t;
    }
    
    // Seters
    set ime(x){
        this._ime = x;
    }
    set visina(x){
        if(x > 0 && x < 2.5){
            this._visina = x;
        } else {
            this._visina = 0;
        }
    }
    set tezina(x){
        if(x > 0 && x < 550){
            this._tezina = x;
        } else {
            this._tezina = 0;
        }
    }
    
    // Geters
    get ime(){
        return this._ime;
    }
    get visina(){
        return this._visina;
    }
    get tezina(){
        return this._tezina;
    }

    Stampaj(){
        console.log(`Ime pacijenta: ${this.ime}, Visina: ${this.visina}, Tezina: ${this.tezina}`);
    }
    Bmi(){
        return this.tezina / this.visina**2;
    }
    Kritican(){
        if(this.Bmi() < 15 || this.Bmi() > 40){
            return true;
        }
        else {
            return false;
        }
    }
}

let pacijent1 = new Pacijent("Slavujka", 1.57, 60);
let pacijent2 = new Pacijent("Perica", 2, 105);
let pacijent3 = new Pacijent("Radojka", 1.63, 110);

console.log(pacijent1, pacijent2, pacijent3);

// Pacijent21
pacijent1.Stampaj();
console.log(pacijent1.Bmi());
console.log(pacijent1.Kritican());
// Pacijent2
pacijent2.Stampaj();
console.log(pacijent2.Bmi());
console.log(pacijent2.Kritican());
// Pacijent3
pacijent3.Stampaj();
console.log(pacijent3.Bmi());
console.log(pacijent3.Kritican());
