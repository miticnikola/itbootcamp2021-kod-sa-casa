let sportista = {
    imePrezime: "Pera Peric",
    visina: 1.95,
    timovi: ["partizan", "indianopolis", "radnicki", "boston"]
};
let sportista2 = {
    imePrezime: "Mika Mikic",
    visina: 1.96,
    timovi: ["kragujevac", "zvezda", "obilic"]
};
let sportista3 = {
    imePrezime: "Mika Antic",
    visina: 1.95,
    timovi: ["kragujevac", "obilic"]
};
let sportista4 = {
    imePrezime: "Zika Zikic",
    visina: 1.96,
    timovi: ["partizan", "lejkers", "vrezina", "radnicki"]
};
let sportista5 = {
    imePrezime: "Zika Stancic",
    visina: 1.97,
    timovi: ["partizan", "lejkers", "vrezina", "radnicki"]
};

// Napraviti niz od najmanje tri objekta (najmanje tri sportiste)
let sportisti = [sportista, sportista2, sportista3, sportista4, sportista5];

// Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli. Ukoliko postoji više takvih sportista, vratiti ime i prezime bilo kog od takvih sportista.
let najmanjeTransfera = niz => {
    let minTransf = niz[0].timovi.length;

    let min = niz[0].imePrezime; //mora da se postavi pocetna vrednost za ime
    for(let i = 0; i < niz.length; i++){
        if(niz[i].timovi.length < minTransf){
            minTransf = niz[i].timovi.length;
            min = niz[i].imePrezime;
        }
    }
    return min;
}
console.log(najmanjeTransfera(sportisti));



// Trener igrače na treningu deli u dva tima kako bi se što bolje pripremili za utakmicu. Kada trener dobije spisak sportista (niz sportista) on ih deli na sledeći način: 
// ○ Ukoliko je na spisku paran broj igrača, trener u prvi tim stavlja prvu polovinu igrača sa spiska, dok drugi tim čine igrači sa druge polovine liste Ukoliko je na spisku neparan broj igrača, trener u prvi tim stavlja jednog igrača više nego u drugi tim.
// Napisati funkciju višiTimPodela, kojoj se prosleđuje niz sportista a funkcija ispisuje na ekranu tekst “Viši je prvi tim” ukoliko je prosečna visina igrača u prvom timu veća od prosečne visine igrača u drugom timu. U suprotnom funkcija na ekranu ispisuje “Viši je drugi tim”. Ako su te dve prosečne visine iste, funkcija ispisuje tekst “Oba tima su u proseku iste visine”. Pozvati funkciju.

let visiTimPodela = niz => {
    let prviTim = [];
    let drugiTim = [];

    if(niz.length % 2 == 0){
        for(let i = 0; i < niz.length / 2; i++){
            prviTim.push(niz[i]);
        }
        
        for(let i = 0; i < niz.length; i++){
            drugaPolovina = niz.length - niz.length / 2;
            drugiTim = niz.slice(- drugaPolovina);
        }

    } else if(niz.length % 2 != 0){
        let ostatak = niz.length % 2;
        // let paranBrIgraca = niz.length - ostatak;

        let brIgracaPrviTim = niz.length - (niz.length - ostatak)/2;
        for(let i = 0; i < niz.length; i++){
            prviTim = niz.slice(0, brIgracaPrviTim);
        }

        let brIgracaDrugiTim = niz.length - brIgracaPrviTim;
        for(let i = 0; i < niz.length; i++){
            drugiTim = niz.slice( - brIgracaDrugiTim);
        }
    }
    // return drugiTim;

    // Drugi nacin === ovo se pise, umesto if - else if petlje
//     for(let i = 0; i < niz.length; i++){
//         if(i < Math.ceil(niz.length/2)){
//                prviTim.push(niz[i]);
//          }
//          else {
//               drugiTim.push(niz[i]);
//         }
//    } 

    // Prosek visine prvi tim
    let sumaVisinaPrviTim = 0;
    prviTim.forEach(sportista => {
        sumaVisinaPrviTim += sportista.visina;
    });
    let prosekPrviTim = sumaVisinaPrviTim / prviTim.length;
    
    // Prosek visine drugi tim
    let sumaVisinaDrugiTim = 0;
    drugiTim.forEach(sportista => {
        sumaVisinaDrugiTim += sportista.visina;
    });
    let prosekDrugiTim = sumaVisinaDrugiTim / drugiTim.length;
    
    // Ispis
    if(prosekPrviTim > prosekDrugiTim){
        document.body.innerHTML += `<h1>Visi je prvi tim.</h1>`
    } else if(prosekPrviTim < prosekDrugiTim){
        document.body.innerHTML += `<h1>Visi je drugi tim.</h1>`
    } else {
        document.body.innerHTML += `<h1>Oba tima su u proseku iste visine.</h1>`
    }


}

visiTimPodela(sportisti);
