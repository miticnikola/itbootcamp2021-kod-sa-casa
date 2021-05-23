// vremenska prognoza
let dan1 = {
    datum: "2021/05/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperatura: [12, 14, 16, 18, 22, 27, 12, 19, 14],
    // Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Napisati metod koji vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    neuobicajen: function(){
         for(let i = 0; i < this.temperatura.length; i++){
            if(this.kisa == true && this.temperatura[i] < -5 || this.oblacno == true && this.temperatura[i] > 25 || this.kisa == true && this.sunce == true && this.oblacno == true){
                return true;
            }
        }
        return false;
    },
    min: function (){
       let min = this.temperatura[0];
       this.temperatura.forEach(temp => {
           if(min > temp){
               min = temp;
           }
       });
       return min;
    },
    max: function(){
        let max = this.temperatura[0];

        this.temperatura.forEach(temp => {
            if(max < temp){
                max = temp;
            }
        });
        return max;
    },
    ispisNeuredjene: function(){
        let lista = `<ul>`;
        this.temperatura.forEach(temp => {
            if(temp == this.min()){
                lista += `<li style="color: blue;">${temp}</li>`;
            } else if(temp == this.max()){
                lista += `<li style="color: red;">${temp}</li>`;
            } else {
            lista += `<li>${temp}</li>`;
            }
        });
        lista += `</ul>`;

        document.body.innerHTML = lista;
    }
// Napisati metod koji na ekranu ispisuje neuređenu listu, čija je sadržina (čiji su elementi/buleti) vrednosti temperature iz datog niza temperatura. 
// Maksimalnu (ili maksimalne ukoliko ih je više) vrednost u neurešenoj listi obojiti crvenom bojom. 
// Minimalnu (ili minimalne vrednosti ukoliko ih je više) obojiti plavom bojom. 
};
console.log(dan1.neuobicajen());
console.log(dan1.min());
console.log(dan1.max());
console.log(dan1.ispisNeuredjene());

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
    niz.forEach(dan => {
        if( max < dan.temperatura.length){
            max = dan.temperatura.length; //da bi se prikazao prvi dan, mora prvo da se definise koliki je max
            console.log(`Prvi dan sa najvise merenja je ` + dan.datum);
        }
    });

    let poslednjiSaMaxMer;
    niz.forEach(dan => {
        if(max <= dan.temperatura.length){
            poslednjiSaMaxMer = dan.datum;
        }
    });
    console.log(`Poslednji sa najvise merenja je ` + poslednjiSaMaxMer);
}

najviseMer(dani);

// let najviseMer = niz => {
//     let max = niz[0].temperatura.length;

//     // Prvi dan
//     for(let i = 0; i < niz.length; i++){
//         if(max < niz[i].temperatura.length){
//             max = niz[i].temperatura.length;
//             console.log(`Prvi dan sa najvise merenja je ` + niz[i].datum); //ovo vazi ako nije prvi u nizu tj i[0] onaj objekat koji ima najvise merenja
//         }
//     }
//     if(max == niz[0].temperatura.length){
//         console.log(`Prvi dan sa najvise merenja je ` + niz[0].datum); //ukoliko je niz[0].temperatura.length najduzi dan
//     }

//     let poslednjiDan;
//     niz.forEach(dan => {
//         if(max <= dan.temperatura.length){
//             poslednjiDan = dan.datum;
//         }
//     });
//     console.log(`Poslednji dan sa najvise merenja je ` + poslednjiDan);
// }

// najviseMer(dani);

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


// 

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

let uzv = niz => {
    niz.forEach(el => {
        if(el.title[el.title.length - 1] == "!"){
            console.log(el.title);
        }
    });
}

uzv(hrana);

// 
// Blogs
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
        likes: 51,
        dislikes: 14
}

// Users
let user1 = {
    username: 'Nikola',
    age: 28,
    blogs: [blog1, blog2, blog3],
    // U objektu user, napraviti metod koji ispisuje sve blogove korisnika 
    logBLog: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};
user1.logBLog();

let user2 = {
    username: 'Marina',
    age: 16,
    blogs: [blog2, blog3]
};

let user3 = {
    username: 'Pera',
    age: 25,
    blogs: [blog1, blog3]
};

let users = [user1, user2, user3];

let viseOd100 = niz => {
    niz.forEach(user => {
        let ukLajk = 0;
        user.blogs.forEach(blog => {
            ukLajk += blog.likes;
        });
        if(ukLajk > 100){
            console.log(user.username, ukLajk);
        }
    });
};

viseOd100(users);




let br = [12, 5, 13, 17, 3, 28, 26, 32, 3];
// 1. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća indeks minimalnog elementa ovog niza. Ukoliko ima više jednakih minimalnih elemenata, vratiti indeks bilo kog od minimalnih elemenata.
let indexMin = niz => {
    let min = niz[0];
    let ind = 0;


    niz.forEach((el, i) => {
        if(min >= el){ //sa = vraca poslednji, bez = vraca prvi
            min = el;
            ind = i;
        }
    });
    return ind;
}
console.log(indexMin(br));

// 2. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.
let sElSaParInd = niz => {
    let suma = 0;

    niz.forEach((el, i) => {
        if(i % 2 == 0){
            suma += el;
        }
    });
    return suma;
}
console.log(sElSaParInd(br));


// 3. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.

let promenaZnaka = niz => {
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 != 0 && i % 2 == 0){
            niz[i] *= -1;
        }
    }
    console.log(niz);
}
promenaZnaka(br);

// Pozvati sve funkcije.
// Rezultati svih funkcija treba da budu prikazani u konzoli.

// 1.Zadatak
// Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
// Pozvati funkciju i njen rezultat ispisati u konzoli.
let suma = (n, m) => {
    let s = 0
    for(let i = n; i < m; i++){
        s += i**3; // krece da ga racuna od 3
    }
    console.log(s);
}
suma(3,7);

// 2.Zadatak
// Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
// Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
// Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
// Pozvati funkciju i dobijeni rezultat ispisati u konzoli.
let godine = godRodj => {
    let datum = new Date();
    let godina = datum.getFullYear();

    return godina - godRodj;
}
console.log(godine(1992));

// 3.Zadatak
// Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.
let deljiv = (n, m, k) => {
    let brBr = 0;
    for(let i = n; i <= m; i++){
        if(i % k == 0){
            brBr++;
        }
    }
    return brBr;
}

console.log(deljiv(2, 15, 3));

// Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
let n = 15; 
let i = 1;
let brojac = 0;

while(i <= n){
    if(n % i == 0 && i % 3 == 0 && i % 2 != 0){
        brojac++;
    }
    i++;
}
console.log(brojac);