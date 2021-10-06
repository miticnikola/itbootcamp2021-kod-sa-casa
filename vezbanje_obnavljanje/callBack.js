// Callback

// Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:
// U konzoli,
// U nekom div elementu na stranici.
// Logika funkcije ispisa je ista – potrebna je petlja kojom se prolazi kroz sve elemente niza, samo je ispis elemenata drugačiji.
// Moguća ideja – napisati posebnu funkciju za željeni ispis (bilo na stranici ili u konzoli), a tu funkciju proslediti kao parametar funkciji koja iterira kroz sve elemente niza.

let el = ["jaja", "brasno", "so"];

// let ispisEkr = niz => {
//     niz.forEach(elem => {
//         document.body.innerHTML += elem + `<br>`;
//     });
// }

// let ispisKonzola = niz => {
//     niz.forEach(elem => {
//         console.log(elem);
//     })
// }

// ispisEkr(el);
// ispisKonzola(el);


let ispis = (niz, callback) => {
    let poruka = " ";
    
    niz.forEach(elem => {
        poruka += elem + " ";
    });
    
    callback(poruka);
}

let konzola = poruka => {
    console.log(poruka);
};

let ekran = poruka => {
    document.body.innerHTML += poruka;
}

ispis(el, konzola);
ispis(el, ekran);