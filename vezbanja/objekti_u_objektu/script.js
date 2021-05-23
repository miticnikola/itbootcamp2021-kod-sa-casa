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

// Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let users = [user1, user2, user3];

// Ispisati imena onih autora koji imaju ispod 18 godina
let youngUsers = niz => {
    niz.forEach(user => {
        if(user.age < 18){
            console.log(user.username);
        }
    });
}
youngUsers(users);

// Ispisati naslove onih blogova koji imaju više od 50 lajkova
let preko50l = niz => {
    niz.forEach(user => {
        user.blogs.forEach(blog => {
            if(blog.likes > 50){
                console.log(blog.title, user.username); //dodao sam i username da bi mi bilo preglednije ko ima taj blog
            }
        });
    });
};
preko50l(users);

// Ispisati sve blogove autora čiji je username ’Marina’
let blogMarina = niz => {
    niz.forEach(user => {
        if(user.username == "Marina"){
            user.blogs.forEach(blog => {
                console.log(blog.title);
            });
        }
    });
};
blogMarina(users);

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

let lajkoviBLogova = blogs => {
    let suma = 0;
    blogs.forEach(blog => {
        suma += blog.likes;
    });
    return suma;
}

let kor100ivise = users => {
    users.forEach(user => {
        if(lajkoviBLogova(user.blogs) > 100){
            console.log(user.username, lajkoviBLogova(user.blogs));
        }
    });
}

kor100ivise(users);

// sl nacin
 let preko100 = niz => {
     niz.forEach(user => {
        let suma = 0;
        user.blogs.forEach(blog =>{
            suma += blog.likes;
        });
        if(suma > 100){
            console.log(user.username, suma);
        }
     });
 };
 preko100(users);


// let viseOd100 = niz => {
    
//     niz.forEach(user => {
//         let sumaLajk = 0;
//         user.blogs.forEach(blog => {
//             sumaLajk += blog.likes;
//         });
//         if(sumaLajk > 100){
//             console.log(user.username, sumaLajk);
//         }
//     });
// };
// viseOd100(users);

// // drugi nacin

// let sumaPerUser = blogs => {
//     let suma = 0;
//     blogs.forEach(blog => {
//         suma += blog.likes;
//     });
//     return suma;
// };

// let korPr100 = users => {
//     users.forEach(user => {
//         if(sumaPerUser(user.blogs) > 100){
//             console.log(user.username, sumaPerUser(user.blogs));   
//         }
//     });
// };
// korPr100(users);


// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let natprosecanBr = niz => {
    let ukLajk = 0;
    let brojac = 0;
    let prosek;
    niz.forEach(user => {
        user.blogs.forEach(blog => {
            ukLajk += blog.likes;
            brojac++;
        });
    });
    prosek = ukLajk / brojac;

    niz.forEach(user => {
        user.blogs.forEach(blog => {
            if(blog.likes > prosek){
                console.log(blog.title);
            }
        });
    });
}

natprosecanBr(users);

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

let ispodProsNeg = niz => {
    let sumaNeg = 0;
    let prosek;
    let brojacNeg = 0;

    niz.forEach(user => {
        user.blogs.forEach(blog => {
            sumaNeg += blog.dislikes;
            brojacNeg++;
        });  
    });
    prosek = sumaNeg / brojacNeg;
    
    niz.forEach(user => {
        user.blogs.forEach(blog => {
            if(blog.dislikes < prosek){
                console.log(blog.title);
            }
        });
    });
}

ispodProsNeg(users);
