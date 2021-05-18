let blog = {
    title: 'Objekti',
    content: 'Ovo su objekti...',
    author: 'Nikola'
};

console.log(blog);
console.log(typeof blog);

/*
Proveravanje tipa ma koje druge promenljive

let x = 5;
console.log(typeof x);
*/


// Pristupanje osobini/propertiju u objektu:
console.log(blog.title);
console.log(blog['content']);

// izmena jedne osobine/propertija objektu
blog.content = "Objekti su slozeni tipovi podataka..";

console.log(blog.content);

blog['author'] = "Nikola Mitic";

console.log(blog['author']);


// Objekat ================= korisnik ======================== 
let user = {
    username: 'JohnDoe',
    age: 30,
    blogs: ["Naslov1", "Naslov2", "Naslov3"],
    login: function(){  
        console.log("Ulogovani ste!");
    },
    logBlogs: function(){
        // console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    test: function(){
        console.log(this);
    }
};

console.log(user);
user.login();
user.logBlogs();
user.test();
console.log(this); // daje informacije od windows objektu
