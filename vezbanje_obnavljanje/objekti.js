// Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

// Napisati metode koje:
// Određuje i vraća prosečnu temperaturu izmerenu tog dana.

// Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.

// Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).

// Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

// Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

let dan = {
    kisa: true,
    sunce: false,
    oblacno: true,
    temp: [ 3, 5, 7, 12, 19],
    prosek: function() {
        let zbir = 0;
        for(let i = 0; i < this.temp.length; i++){
            zbir += this.temp[i];
        }
        return zbir / this.temp.length;
    },
    brProsTemp: function(){
        let brPros = 0;
        for(let i = 0; i < this.temp.length; i++){
            if(this.temp[i] > this.prosek()){
                brPros += 1;
            }
        }
        return brPros;
    },
    tempIzmedju: function(tempOd, tempDo){
        let brMer = 0;

        for(let i = 0; i < this.temp.length; i++){
            if(this.temp[i] > tempOd && this.temp[i] < tempDo || this.temp[i] < tempOd && this.temp[i] > tempDo){
                brMer++;
            }
        }
        return brMer;
    },
    leden: function(){
        let led = true;
        
        this.temp.forEach(temp => {
            if(temp > 0){
                led = false;
            }  
        });
        return led;
    },
    nepovoljan: function(){
        // nacin1

        // let nepov = true;
        // for(let i = 0; i < this.temp.length; i++){
        //     if(this.temp[i] - this.temp[i + 1] < 8 || this.temp[i + 1] - this.temp[i] < 8){
        //         nepov = false;
        //         return nepov;
        //     }
        // }
        // return nepov;
        
        // Nacin 2
        for(let i = 0; i < this.temp.length; i++){
            if(Math.abs(this.temp[i] - this.temp[i + 1]) > 8){
                return true;
            }
        }
        return false;
    }
};


console.log(dan.prosek());
console.log(dan.brProsTemp());
console.log(dan.tempIzmedju(5, 13));
console.log(dan.leden());
console.log(dan.nepovoljan());


// OBJEKTI U NIZU

let blog1 = {
    naslov: 'Naslov1',
    likes: 12,
    dislikes: 15
}

let blog2 = {
    naslov: 'Naslov2!',
    likes: 7,
    dislikes: 13
}

let blog3 = {
    naslov: 'Naslov3',
    likes: 30,
    dislikes: 5
}

let blogs = [blog1, blog2, blog3];


//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena


let visePoz = niz => {
    niz.forEach(blog => {
        if(blog.likes / 2 >= blog.dislikes){
            console.log(blog.naslov);
        }
    })
};

visePoz(blogs);

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzv = niz => {
    niz.forEach(blog => {
        if(blog.naslov.endsWith('!')){
            console.log(blog.naslov);
        }
    });
}

uzv(blogs);



// OBJEKAT U OBJEKTU


// Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

// Users
let user1 = {
    ime: 'Pera',
    age: 15,
    blogs: [blog1, blog2]
}

let user2 = {
    ime: 'Jova',
    age: 18,
    blogs: [blog1, blog2, blog3]
}

let user3 = {
    ime: 'Mika',
    age: 25,
    blogs: [blog2, blog3]
}

let users = [user1, user2, user3];


// Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(user => {
    if(user.age < 18){
        console.log(user.ime);
    }
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(user => {
    // user.blogs.forEach(blog => {
        // if(blog.likes > 20){
        //     console.log(blogs.naslov);
        // }
    // });

    for(let i = 0; i < user.blogs.length; i++){
        if(user.blogs[i].likes > 20){
            console.log(user.blogs[i].naslov, user.ime);
        }
    }
});
