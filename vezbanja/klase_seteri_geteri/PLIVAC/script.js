// Kreirati klasu Plivac koja sadrži ime, godinu rodjenja i najbolji rezultat ove godine.
// Napraviti odovarajuće konstruktore, getere i setere.
// Napraviti metodu ispisi koja ispisuje sve podatke o plivaču.
// Napraviti funkciju 
// Napraviti funkciju topTen koja kao rezultat vraća niz od 10 najboljih rezultata ove godine.
// Napraviti funkciju norma kojoj se prosleđuje norma i niz plivača, a funkcija vraća niz onih plivača koji ispunjavaju ovu normu.
// Napisati funkciju normaNajmladji koja treba da na ekranu ispiše sve podatke o najmlađem igraču koji zadovoljava normu koja je zadata prethodnom funkcijom.

class Plivac{
    constructor(ime, godRodj, najRez){
        this.ime = ime;
        this.godRodj = godRodj;
        this.najRez = najRez;
    }
    // Seteri
    set ime(ime){
        this._ime = ime;
    }
    set godRodj(godRodj){
        this._godRodj = godRodj;
    }
    set najRez(najRez){
        this._najRez = najRez;
    }

    // Geteri
    get ime(){
        return this._ime;
    }
    get godRodj(){
        return this._godRodj;
    }
    get najRez(){
        return this._najRez;
    }

    // Metode
    ispisi(){
        console.log(this.ime, this.godRodj, this.najRez);
    }
}