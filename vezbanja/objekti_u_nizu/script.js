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


// OBJEKAT DAN == slajd 14
/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
 */
let dan = {
    datum: "2021/05/22",
    kisa: true,
    sunce: true,
    oblacno: false,
    tempe: [10, 12, 17, 20, 23, 18, 15, 10],
    // Određuje i vraća prosečnu temperaturu izmerenu tog dana.
    prosecna: function(){
        let suma = 0;
        this.tempe.forEach(temp => {
            suma += temp;
        });
        return suma / this.tempe.length;
    },
    // Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natprMer: function(){
        let brNatp = 0;
        this.tempe.forEach(temp => {
            if(temp > this.prosecna()){
                brNatp++;
            }
        });
        return brNatp;
    },
    // Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maksimalna: function(){
        let max = this.tempe[0];
        this.tempe.forEach(temp => {
            if(max < temp){
                max = temp;
            }
        });
        let brojac = 0;
        this.tempe.forEach(temp => {
            if(temp == max){
                brojac++;
            }
        });
        return brojac;
    }
};

console.log(dan.prosecna());

console.log(dan.natprMer());

console.log(dan.maksimalna());

// Napisati metode koje:


// OBJEKTI U NIZU

let blog1 = {
    title: "HTML",
    likes: 30,
    dislikes: 5
}
let blog2 = {
    title: "JS",
    likes: 35,
    dislikes: 15
}
    let blog3 = {
        title: "CSS!",
        likes: 27,
        dislikes: 14
}

let blogs = [blog1, blog2, blog3];

// Napisati foreach petlju koja ispisuje sve naslove iz niza objekata
blogs.forEach(blog => {
    console.log(blog.title);
});

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let ukLajk = niz => {
    let lajks = 0;
    niz.forEach(el => {
        lajks += el.likes;
    });
    return lajks;
}
console.log(ukLajk(blogs));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosecanLajk = niz => {
    return ukLajk(niz) / niz.length;
}
console.log(prosecanLajk(blogs));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let visePozKom = niz => {
    niz.forEach(el => {
        if(el.likes > el.dislikes){
            console.log(el.title);
        }
    });
}
visePozKom(blogs);

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploVisePoz = niz => {
    niz.forEach(el => {
        if(el.dislikes < el.likes / 2){
            console.log(el.title);
        }
    });
}
duploVisePoz(blogs);

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let uzv = niz => {
    niz.forEach(el => {
        if(el.title[el.title.length - 1] == "!"){
            console.log(el.title);
        }
    });
}

uzv(blogs);

// let uzv = niz => {
//     niz.forEach(el => {
//         let naslov = el.title;
//         if(naslov[naslov.length - 1] == "!"){
//             console.log(el.title);
//         }
//     });
// }
// uzv(blogs);
