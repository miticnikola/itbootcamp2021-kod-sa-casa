// BLOGOVI
let blog1 = {
    title: "HTML",
    likes: 50,
    dislikes: 3
};

let blog2 = {
    title: "CSS",
    likes: 170,
    dislikes: 105
};

let blog3 = {
    title: "JS",
    likes: 205,
    dislikes: 110
};

// KORISNIci
let user1 = {
    username: "Stefan",
    age: 31,
    blogs: [blog1, blog2, blog3],
    logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    },
    sumLikes: function(){
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum;
    }
};

user1.logBlogs();

//Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let user2 = {
    username: 'Jelena',
    age: '26',
    blogs: [blog2, blog3],
    sumLikes: function(){
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum;
    }
};

let user3 = {
    username: 'Milena',
    age: 14,
    blogs: [blog1, blog2],
    sumLikes: function(){
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum;
    }
}

let users = [user1, user2, user3];

// 1. Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(user => {
    let godine = user.age; //cak i ne mora promenljiva godine nego samo da se upise user.age
    if(godine < 18){
        console.log(user.username);
    }
});

// 2. Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(user => {
    let blogovi = user.blogs; //izdvojimo niz blogova tekuceg korisnika
    
    blogovi.forEach(blog => {
        if(blog.likes > 50){
            console.log(blog.title, user.username); //user.username sam dodao samo da bi ispisao i ime onog ko je radio taj blog
        }
    });
    
});
// 3. Ispisati sve blogove autora čiji je username 'Milena’
users.forEach(user => {
    if(user.username == "Milena"){
        user.blogs.forEach(blog => {
            console.log(blog.title, user.username);
        });
    }
});

// 4. Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

// 1. Nacin
users.forEach(user => {
    let ukLajk = 0;
    user.blogs.forEach(blog => {
        ukLajk += blog.likes;

    });
    if(ukLajk > 100){
        console.log(user.username, ukLajk);
    }
});

// 2. Nacin
//napisane su svakom korisniku metode koje vracaju ukupan broj lajkova
users.forEach(user => {
    if(user.sumLikes() > 100){
        console.log(user.username);
    }
});

// 3. Nacin
let sumaLajkova = blogs => {
    let s = 0;
    blogs.forEach(blog => {
        s += blog.likes;
    });
    return s;
}
users.forEach(user => {
    let userBlogs = user.blogs;
    let likes = sumaLajkova(userBlogs);
    if(likes > 100){
        console.log(user.username);
    }
});