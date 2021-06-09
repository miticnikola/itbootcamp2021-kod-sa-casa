import Boja from "./boja.js";

let boja1 = new Boja(150, 0.9, 7);
let boja2 = new Boja(170, 0.5, 5);
let boja3 = new Boja(120, 0.3, 1);
let boja4 = new Boja(165, 0.7, 9);
let boja5 = new Boja(112, 0.1, 13);

let boje = [boja1, boja2, boja3, boja4, boja5];

// Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.

let ispitajSličnost = (b1, b2) => {
    if(b1.talasnaDuzina == b2.talasnaDuzina && b1.zasicenje == b2.zasicenje && b1.intenzitet == b2.intenzitet){
        return true;
    } else {
        return false;
    }
}

console.log(ispitajSličnost(boja1, boja2));

// Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.
let srednjaTalasnaDuzina = niz => {
    let ukTalDuz = 0;
    boje.forEach(boja => {
        ukTalDuz += boja.talasnaDuzina;
    });
    return ukTalDuz / niz.length;
}

console.log(srednjaTalasnaDuzina(boje));