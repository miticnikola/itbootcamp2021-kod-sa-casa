let jelo1 = {
    title: "Musaka",
    likes: 102,
    dislikes: 50
}
let jelo2 = {
    title: "Lazanje!",
    likes: 152,
    dislikes: 7
}
let jelo3 = {
    title: "Pizza",
    likes: 100,
    dislikes: 2
}

let hrana = [jelo1, jelo2, jelo3];

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let lajkovi = niz => {
    let zbir = 0;
    niz.forEach(jelo => {
        zbir += jelo.likes;
    });
    return zbir;
}
console.log(lajkovi(hrana));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosecanBrLajk = niz => {
    return lajkovi(niz) / hrana.length;
}
console.log(prosecanBrLajk(hrana));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let visePoz = niz => {
    niz.forEach(jelo => {
        if(jelo.likes > jelo.dislikes){
            console.log(jelo.title);
        }
    });
}
visePoz(hrana);

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploPoz = niz => {
    niz.forEach(jelo => {
        if(jelo.dislikes < jelo.likes / 2){
            console.log(jelo.title);
        }
    });
}
duploPoz(hrana);

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let nasloviSaUz = niz => {
    niz.forEach(jelo => {

        // if(jelo.title.endsWith("!")){
        //     console.log(jelo.title);
        // }
        if(jelo.title[jelo.title.length - 1] == "!"){
            console.log(jelo.title);
        }
    });
}
nasloviSaUz(hrana);
