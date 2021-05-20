let blog = {
    title: "Funkcije",
    likes: 21,
    dislike: 1
};

let blogs = [  //ovako nije prakticno da se pise
    {title: "Nizovi", likes: 16, dislike: 5},
    {title: "Grananje", likes: 14, dislike: 0}
];

console.log(blogs);

////////////////////////////////// najreprezentativniji nacin pisanja objekata u nizu.

let blog1 = {
    title: "Musaka od tikvica",
    likes: 105,
    dislikes: 31
};

let blog2 = {
    title: "Lazanja!",
    likes: 236,
    dislikes: 13
};

let blog3 = {
    title: "Zapecena boranija!",
    likes: 60,
    dislikes: 32
};

let blogsArr = [blog1, blog2, blog3];


// Ispis celog sadrzaja iz niza blogova
blogsArr.forEach(element => {
    console.log(element);
});

// Ispis naslova iz niza blogova
console.log(blog1.title);

blogsArr.forEach(element => {
    console.log(element.title);
});

// Ispis naslova iz niza blogova for petljom:
console.log(blogsArr[0]); // vraca objekat na 0. poziciji u nizu
console.log(blogsArr[0].title); // vraca naslov objekta na nultoj poziciji

for(let i = 0; i < blogsArr.length; i++){
    console.log(blogsArr[i].title);
}



// 20. slajd == Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let ukLajk = niz => {
    let sumaLajk = 0;
    
    niz.forEach(elem => {
    
            sumaLajk += elem.likes;
    
    });
    return sumaLajk;
}

console.log(ukLajk(blogsArr));

// 20. slajd = Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosBrLajk = niz => {
    // let prosek = ukLajk(niz) / blogsArr.length
    // return prosek;
    return ukLajk(niz) / blogsArr.length;
}
console.log(prosBrLajk(blogsArr));

// Vezbanja == 21 slajd ==

// 1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let pozOcene = niz => {
    let lista = `<ul>`;
    niz.forEach(elem => {
        if(elem.likes > elem.dislikes){
            // console.log(elem.title);
            lista += `<li>${elem.title}</li>`;
        }
    });
    lista += `</ul>`;
    document.body.innerHTML += lista;
}
pozOcene(blogsArr);


// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploVisePoz = niz => {
    niz.forEach(blog => {
        if(blog.dislikes <= blog.likes / 2){ // ili (blog.dislikes * 2 >= blog.likes)
            console.log(blog.title);
        }
    });
}
duploVisePoz(blogsArr);

// 3. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let rec = "Hello!";

let poslednjiKarakter = rec[rec.length - 1]; //uvek vraca poslednji karakter kada je -1, a ako je -2, ili neki drugi vraca karatkter na toj poziciji
console.log(poslednjiKarakter);

let poslednjiKarakter1 = rec.slice(-1); //odseca deo stringa
console.log(poslednjiKarakter1);

let poslednjiKarakter2 = rec.charAt(rec.length - 1); //vraca posednji karakter na odredjenom indeksu
console.log(poslednjiKarakter2);

let poslednjiKarakter3 = rec.endsWith("!"); //Vraca true ukoliko se string zavrsava !, u suprotnom vraca false
console.log(poslednjiKarakter3);


// 3. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = niz => {
    niz.forEach(elem => {
    // Prvi nacin
        // let naslov = elem.title;
        // if(naslov[naslov.length - 1] == "!"){
        //     console.log(elem.title);
        // }
        // Drugi nacin
        if(elem.title.endsWith("!")){
            console.log(elem.title);
        }
    })
}

uzvicnik(blogsArr);