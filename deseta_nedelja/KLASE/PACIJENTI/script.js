import {Pacijent} from "./pacijent.js";

// Kreirati niz od barem tri pacijenta.
// Ispisati podatke o pacijentu sa najmanjom težinom.
// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
// Ispisati sve pacijente čije ime sadrži slovo A.
// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let pacijent1 = new Pacijent("Miladinka", 1.7, 65);
let pacijent2 = new Pacijent("Stoja", 1.63, 71);
let pacijent3 = new Pacijent("Cmil", 1.8, 108);

let pacijenti = [pacijent1, pacijent2, pacijent3];

let najmanjaTez = pacijenti[0].tezina;

for(let i = 0; i < pacijenti.length; i++){
    if(najmanjaTez > pacijenti[i].tezina){
        najmanjaTez = pacijenti[i].tezina;
    }
}


let pacijent;
for(let i = 0; i < pacijenti.length; i++){
    if(pacijenti[i].tezina == najmanjaTez){
        pacijent = pacijenti[i];
    }
}

pacijent.Stampaj();


// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let najveciBmi = pacijenti[0].Bmi();

for(let i = 0; i < pacijenti.length; i++){
    if(najveciBmi < pacijenti[i].Bmi()){
        najveciBmi = pacijenti[i].Bmi();
    }
}

let pacijentMaxBmi;

pacijenti.forEach(pacijent => {
    if(pacijent.Bmi() == najveciBmi){
        pacijentMaxBmi = pacijent;
    }
});
pacijentMaxBmi.Stampaj();

// Ispisati sve pacijente čije ime sadrži slovo A.
pacijenti.forEach(pacijent => {
    if(pacijent.ime.includes('a') || pacijent.ime.includes('A')){
        console.log(pacijent.ime);
    }
})
