let ime = "Nikola";

function ispis(poruka){
    console.log(poruka);
}

function zdravo(ime){
    ispis(ime); //nema veze sa promenljivom ime
}

// Nudim promenljivu ime i funkciju zdravo
export {ime, zdravo};