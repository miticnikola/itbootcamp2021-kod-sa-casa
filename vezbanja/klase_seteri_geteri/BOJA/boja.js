// Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
// Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.
// Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.
// Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.

class Boja{
    constructor(talasnaDuzina, zasicenje, intenzitet){
        this.talasnaDuzina = talasnaDuzina;
        this.zasicenje = zasicenje;
        this.intenzitet = intenzitet;
    }

    // Seteri
    set talasnaDuzina(talasnaDuzina){
        this._talasnaDuzina = talasnaDuzina;
    }
    set zasicenje(zasicenje){
        this._zasicenje = zasicenje;
    }
    set intenzitet(intenzitet){
        this._intenzitet = intenzitet;
    }
    // Geteri
    get talasnaDuzina(){
        return this._talasnaDuzina;
    }
    get zasicenje(){
        return this._zasicenje;
    }
    get intenzitet(){
        return this._intenzitet;
    }
}

export default Boja;