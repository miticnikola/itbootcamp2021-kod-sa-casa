/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana)
*/
let dan = {
    datum: "2021/05/21",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperatura: [15, 15, 15, 15, 15, 15, 15]
};
let dan2 = {
    datum: "2021/05/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperatura: [10, 13, 15, 1, 21, 23, 20, 17, 15, 11]
};
let dan3 = {
    datum: "2021/05/23",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperatura: [11, 14, 15, 18, 22, 19, 15, 13]
};
let dan4 = {
    datum: "2021/05/24",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperatura: [10, 16, 18, 20, 25, 23, 19, 15, 13, 11]
};
let dan5 = {
    datum: "2021/05/25",
    kisa: true,
    sunce: false,
    oblacno: false,
    temperatura: [10, 16, 18, 20, 25, 23, 19, 15, 13, 11]
};


// Napraviti niz dan objekata (niz od najmanje 3 objekta).
let dani = [dan, dan2, dan3, dan4, dan5];

// Napraviti arrow funksiju koja u konzoli ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati poslednji od njih.
let najviseDatuma = niz => {
    let maxMer = niz[0].temperatura.length;

    let dan;
    for(let i = 0; i < niz.length; i++){
        if(niz[i].temperatura.length >= maxMer){
            // maxMer = niz[i].temperatura.length;
            dan = niz[i].datum;
        } else if(maxMer == niz[0].temperatura.length){
            dan = niz[0].datum;
        }
    }
    console.log(dan);
}
 najviseDatuma(dani);



// Napraviti arrow funksiju koja prebrojava i u konzoli ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa 
// natprosečnom temperaturom. Pozvati ovu funkciju i njen rezultat ispisati u konzoli.
let natprTemp = niz => {
    let brojacTemp = 0;
    let sumaTemp = 0;

    niz.forEach(dan => {
        dan.temperatura.forEach(temp => {
            brojacTemp++;
            sumaTemp += temp;
        });
    });
    let prosecnaTemp = sumaTemp / brojacTemp;

    let brojacDana = 0;

    for(let i = 0; i < niz.length; i++){
        for(let j = 0; j < niz[i].temperatura.length; j++){
            if(niz[i].temperatura[j] > prosecnaTemp){
                brojacDana++;
                break;
            }
        }
    }
    return brojacDana;
}

console.log(natprTemp(dani));
