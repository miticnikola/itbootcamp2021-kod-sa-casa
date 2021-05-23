// vremenska prognoza
let dan1 = {
    datum: "2021/05/23",
    kisa: true,
    sunce: false,
    oblacno: false,
    temperatura: [12, 14, 16, 18, 22, 19, 14]
};
let dan2 = {
    datum: "2021/05/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperatura: [12, 14, 16, 18, 22, 15, 23, 19, 14]
};
let dan3 = {
    datum: "2021/05/25",
    kisa: true,
    sunce: false,
    oblacno: false,
    temperatura: [12, 14, 16, 18, 22, 15, 23, 19, 14]
};
let dan4 = {
    datum: "2021/05/26",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperatura: [15, 14, 16, 15, 15, 15]
};

// Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)
let dani = [dan1, dan2, dan3, dan4];

// Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih

let najviseMer = niz => {
    let max = niz[0].temperatura.length;

    // Prvi dan
    for(let i = 0; i < niz.length; i++){
        if(max < niz[i].temperatura.length){
            max = niz[i].temperatura.length;
            console.log(`Prvi dan sa najvise merenja je ` + niz[i].datum); //ovo vazi ako nije prvi u nizu tj i[0] onaj objekat koji ima najvise merenja
        }
    }
    if(max == niz[0].temperatura.length){
        console.log(`Prvi dan sa najvise merenja je ` + niz[0].datum); //ukoliko je niz[0].temperatura.length najduzi dan
    }

    let poslednjiDan;
    niz.forEach(dan => {
        if(max <= dan.temperatura.length){
            poslednjiDan = dan.datum;
        }
    });
    console.log(`Poslednji dan sa najvise merenja je ` + poslednjiDan);
}

najviseMer(dani);

//  Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana
let kso = niz => {
    let kisa = 0;
    let sunce = 0;
    let oblacno = 0;

    niz.forEach(dan => {
        if(dan.kisa == true){
            kisa++;
        }
        if(dan.sunce == true){
            sunce++;
        }
        if(dan.oblacno == true){
            oblacno++;
        }
    });
    console.log(`Kisnih dana je bilo ` + kisa);
    console.log(`Suncanih dana je bilo ` + sunce);
    console.log(`Oblacnih dana je bilo ` + oblacno);
}

kso(dani);

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
let daniSanatpr = niz => {
    let sumaTemp = 0;
    let brojac = 0;

    niz.forEach(dan => {
        dan.temperatura.forEach(temp => {
            sumaTemp += temp;
            brojac++;
        });
    });
    let prosek = sumaTemp / brojac;

    let natprosecno = [];
    niz.forEach(dan => {
        dan.temperatura.forEach(temp => {
            if(temp > prosek){
                natprosecno.push(dan.datum);
            }
        });
    });
    let natprDani = Array.from(new Set(natprosecno));

    return natprDani.length;
}

console.log(daniSanatpr(dani));